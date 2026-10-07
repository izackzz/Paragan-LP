export const THEME_STORAGE_KEY = 'paragan-lp-theme';
export const THEME_MEDIA_QUERY = '(prefers-color-scheme: dark)';

export type Theme = 'light' | 'dark';

export function isTheme(value: unknown): value is Theme {
  return value === 'light' || value === 'dark';
}

export function readSavedTheme(): Theme | null {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    return isTheme(saved) ? saved : null;
  } catch {
    return null;
  }
}

export function applyTheme(theme: Theme, manual: boolean) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.dataset.themePreference = manual ? 'manual' : 'system';
  root.classList.toggle('dark', theme === 'dark');
}

// Runs in <head> before paint; only static constants are interpolated.
export const themeScript = `(()=>{let saved;try{saved=localStorage.getItem('${THEME_STORAGE_KEY}')}catch{}const manual=saved==='light'||saved==='dark';const theme=manual?saved:window.matchMedia('${THEME_MEDIA_QUERY}').matches?'dark':'light';const root=document.documentElement;root.dataset.theme=theme;root.dataset.themePreference=manual?'manual':'system';root.classList.toggle('dark',theme==='dark')})()`;
