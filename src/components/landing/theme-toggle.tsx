'use client';

import { useSyncExternalStore } from 'react';
import { Button } from '@/components/ui/button';
import { icons } from '@/lib/icon-map';
import { t } from '@/i18n';
import {
  applyTheme,
  isTheme,
  readSavedTheme,
  THEME_MEDIA_QUERY,
  THEME_STORAGE_KEY,
} from '@/lib/theme';

function subscribe(onChange: () => void) {
  const root = document.documentElement;
  const media = window.matchMedia(THEME_MEDIA_QUERY);
  const observer = new MutationObserver(onChange);
  observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] });

  const onSystemChange = () => {
    if (root.dataset.themePreference !== 'manual') {
      applyTheme(media.matches ? 'dark' : 'light', false);
    }
  };
  const onStorage = (event: StorageEvent) => {
    if (event.key !== THEME_STORAGE_KEY && event.key !== null) return;
    const saved = readSavedTheme();
    applyTheme(saved ?? (media.matches ? 'dark' : 'light'), saved !== null);
  };

  media.addEventListener('change', onSystemChange);
  window.addEventListener('storage', onStorage);
  return () => {
    observer.disconnect();
    media.removeEventListener('change', onSystemChange);
    window.removeEventListener('storage', onStorage);
  };
}

function getSnapshot() {
  const theme = document.documentElement.dataset.theme;
  return isTheme(theme) ? theme : null;
}

function getServerSnapshot() {
  return null;
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const label = theme
    ? t(theme === 'dark' ? 'accessibility.lightTheme' : 'accessibility.darkTheme')
    : t('accessibility.toggleTheme');
  const SunIcon = icons.sun;
  const MoonIcon = icons.moon;

  return (
    <Button
      type="button"
      variant="secondary"
      size="icon-lg"
      className="min-h-11 min-w-11 shrink-0"
      aria-label={label}
      title={label}
      onClick={() => {
        const next = getSnapshot() === 'dark' ? 'light' : 'dark';
        applyTheme(next, true);
        try {
          localStorage.setItem(THEME_STORAGE_KEY, next);
        } catch {
          // Keep the selected theme for this visit even if storage is blocked.
        }
      }}
    >
      <SunIcon className="hidden dark:block" />
      <MoonIcon className="block dark:hidden" />
    </Button>
  );
}
