import type { ReactNode } from 'react';
import type { illustrationAssets } from '@/config/illustrations';

export type PageHeading = {
  eyebrow?: string;
  title: string;
  muted?: string;
  description?: string;
};

export type PageLink = { label: string; href: string; secondary?: boolean };

/** Resolve media only from the existing local asset registry. */
export type PageImage = {
  asset: keyof typeof illustrationAssets;
  alt: string;
  caption?: string;
  tour?: boolean;
};

export type SectionIdentity = {
  id: string;
  label: string;
  index: number;
  total: number;
};

export type ContentItem = {
  id: string;
  title: string;
  description: string;
};

export type ModuleItem = ContentItem & {
  eyebrow: string;
  image?: PageImage;
  icon?: ReactNode;
  link?: PageLink;
};

export type EditorialItem = ContentItem & {
  heading?: PageHeading;
  image: PageImage;
  imageSide?: 'left' | 'right';
  points?: readonly ContentItem[];
  link?: PageLink;
};

export type QuestionItem = { id: string; question: string; answer: string };
