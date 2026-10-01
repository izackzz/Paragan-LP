"use client";

import type { ReactNode } from "react";
import { icons, type IconName, type IconLibrary } from "@/lib/icon-map";
export type { IconComponent, IconName, IconLibrary } from "@/lib/icon-map";
export { iconLibraryOrder, iconLibraryLabels } from "@/lib/icon-map";

// The registry's demo keyboard shortcut intentionally does not ship to visitors.
export function IconProvider({ children }: { children: ReactNode; defaultLibrary?: IconLibrary }) {
  return children;
}
export function useIcon(name: IconName) { return icons[name]; }
export function useIcons() { return icons; }
