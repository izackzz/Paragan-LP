import type { ReactNode } from 'react';
import { InstitutionalShell } from '@/components/landing/institutional/institutional-shell';
export default function BlogLayout({ children }: { children: ReactNode }) {
  return <InstitutionalShell>{children}</InstitutionalShell>;
}
