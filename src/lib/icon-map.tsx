'use client';

// Boring UI icon adapter: the landing uses Hugeicons exclusively.
import { HugeiconsIcon } from '@hugeicons/react';
import {
  ArrowRight01Icon,
  ArrowRight02Icon,
  Cancel01Icon,
  Menu01Icon,
  Copy01Icon,
  DashboardSquare01Icon,
  UserGroupIcon,
  CreditCardIcon,
} from '@hugeicons/core-free-icons';
import type { ComponentType } from 'react';

export type IconComponent = ComponentType<{
  size?: number;
  strokeWidth?: number;
  className?: string;
}>;
function wrap(icon: typeof ArrowRight01Icon): IconComponent {
  return function Icon(props) {
    return <HugeiconsIcon icon={icon} aria-hidden="true" {...props} />;
  };
}

export const icons = {
  'chevron-right': wrap(ArrowRight01Icon),
  'arrow-right': wrap(ArrowRight02Icon),
  x: wrap(Cancel01Icon),
  menu: wrap(Menu01Icon),
  copy: wrap(Copy01Icon),
  dashboard: wrap(DashboardSquare01Icon),
  users: wrap(UserGroupIcon),
  'credit-card': wrap(CreditCardIcon),
};
export type IconName = keyof typeof icons;
export type IconLibrary = 'hugeicons';
export const iconMap = { hugeicons: icons };
export const iconLibraryOrder: IconLibrary[] = ['hugeicons'];
export const iconLibraryLabels = { hugeicons: 'Hugeicons' };
