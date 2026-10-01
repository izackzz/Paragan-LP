import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { dot, micro } from "./styles";

export function Brand({ className }: { className?: string }) {
  return <Link href="#inicio" aria-label="Paragan — início" className={cn("inline-flex items-baseline py-2 text-3xl leading-none font-semibold tracking-tighter", className)}>paragan<span className="text-brand" aria-hidden="true">.</span></Link>;
}

export function ActionLink({ children, href = "#contato", secondary = false, className }: { children: ReactNode; href?: string; secondary?: boolean; className?: string }) {
  return <Button asChild variant={secondary ? "secondary" : "primary"} size="lg" className={cn("min-h-11 rounded-lg px-5 py-3 text-xs font-medium motion-reduce:transition-none", className)}><Link href={href}>{children}</Link></Button>;
}

export function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return <div className={cn(micro, "relative flex min-h-14 items-center gap-3 border-b border-border px-5 py-4 text-muted-foreground before:absolute before:-top-0.5 before:-left-0.5 before:size-1 before:bg-brand after:absolute after:-top-0.5 after:-right-0.5 after:size-1 after:bg-brand md:px-8")}><span className="text-brand">[ {number} / 10 ]</span><span>{children}</span><span className="ml-auto hidden sm:block" aria-hidden="true">PARAGAN / INFRASTRUCTURE</span></div>;
}

export function SectionHeading({ eyebrow, title, muted, description, align = "left" }: { eyebrow?: string; title: string; muted?: string; description?: string; align?: "left" | "center" }) {
  return <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
    {eyebrow && <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-medium"><span className={dot} aria-hidden="true" />{eyebrow}</p>}
    <h2 className="text-3xl leading-tight font-normal tracking-tighter text-balance md:text-4xl xl:text-5xl">{title}{muted && <><br /><span className="text-muted-foreground">{muted}</span></>}</h2>
    {description && <p className={cn("mt-6 max-w-xl text-sm leading-7 text-muted-foreground md:text-base", align === "center" && "mx-auto")}>{description}</p>}
  </div>;
}

export function ArtPlaceholder({ width, height, label, dark = false, priority = false, className }: { width: number; height: number; label: string; dark?: boolean; priority?: boolean; className?: string }) {
  return <figure className={cn("m-0 overflow-hidden rounded-lg border border-border bg-muted", className)}>
    {/* Placeholder temporário global. O briefing de composição e a direção da futura
        arte/print/Lottie ficam imediatamente antes de cada uso deste componente. */}
    <Image src={`https://placehold.co/${width}x${height}/${dark ? "14241f/779589" : "edf2ee/7d9285"}.png?text=${encodeURIComponent(label)}`}
      width={width} height={height} alt={`Espaço reservado: ${label}`} unoptimized
      preload={priority} sizes="(max-width: 768px) 92vw, (max-width: 1280px) 80vw, 1120px" className="h-auto w-full" />
    <figcaption className={cn(micro, "flex flex-wrap items-center gap-2 border-t border-border px-3 py-2.5 text-muted-foreground")}><span className={dot} aria-hidden="true" />DIREÇÃO VISUAL <span aria-hidden="true">/</span> {label}</figcaption>
  </figure>;
}
