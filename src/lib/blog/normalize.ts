import type { FrontMatter } from './types';
export function isPublished(metadata: FrontMatter, now: number) {
  return !metadata.draft && Date.parse(metadata.date) <= now;
}
export function normalizeTags(tags: string[]) {
  const seen = new Set<string>();
  return tags
    .filter((tag) => {
      const key = tag
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
        .toLowerCase();
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .map((tag) => tag.trim());
}
