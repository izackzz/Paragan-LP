import { createTranslator } from 'next-intl';
import messages from './messages/pt-BR';

// A single explicit locale for now. No redirects or browser-language negotiation.
export const locale = 'pt-BR';
export const t = createTranslator({
  locale,
  messages,
  onError(error) {
    // Missing/invalid copy must never silently render a key or fallback text.
    throw error;
  },
});

/** Typed structured content, resolved through the same i18n runtime as ICU messages. */
export function content<Key extends keyof typeof messages>(key: Key): (typeof messages)[Key] {
  // next-intl narrows raw() to leaf keys in its types, though it supports objects.
  // This adapter only accepts existing catalog namespaces and retains their shape.
  return t.raw(key as Parameters<typeof t.raw>[0]) as (typeof messages)[Key];
}

export function formatIndex(index: number) {
  return new Intl.NumberFormat(locale, {
    minimumIntegerDigits: 2,
    useGrouping: false,
  }).format(index);
}
