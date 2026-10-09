import Link from 'next/link';
import { AppLogo } from '@/components/assets/brand/logo';
import { AppWordMark } from '@/components/assets/brand/wordmark';
import { FluidGroup } from './fluid-group';
import { frame, micro } from './styles';
import { MotionRenderAscii } from '../ascii/motion-render-ascii';
import { content, t } from '@/i18n';
import { destinations } from '@/config/site';

const copy = content('footer');
const institution = content('structure').footer;
const linkClass = 'flex min-h-11 items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:-outline-offset-2';

export function SiteFooter() {
  return <footer aria-label={t('accessibility.footer')} className="dark border-t border-border bg-background text-foreground">
    <div className={frame}>
      <div className="stripes flex flex-wrap items-center gap-3 border-b border-border px-6 py-4 md:px-8"><p className={`${micro} text-muted-foreground`}>{copy.eyebrow}</p><p className="text-xs text-muted-foreground md:ml-auto">{copy.tagline}</p></div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4">
        <div id="footer-brand" className="min-w-0 p-6 md:border-r md:border-border md:p-8">
          <Link href={destinations.footer.home} aria-label={t('brand.home')} className="inline-flex min-h-12 items-center"><AppLogo aria-hidden="true" className="h-10 w-auto" /></Link>
          <p className="mt-6 text-sm leading-relaxed">{t('brand.promise')}<br /><span className="text-muted-foreground">{t('brand.supportingPromise')}</span></p>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{institution.company}</p>
          <Link href={destinations.social.whatsapp} target="_blank" rel="noopener noreferrer" className={`${linkClass} mt-4`}>{institution.contact}</Link>
        </div>
        {Object.entries(destinations.footer.groups).map(([id, links], index) => <nav key={id} aria-labelledby={`footer-menu-${id}`} className={`min-w-0 border-t border-border p-6 md:p-8 ${index === 0 ? 'md:border-t-0' : ''} ${index === 1 ? 'md:border-r' : ''} xl:border-t-0 ${index < 2 ? 'xl:border-r' : ''}`}>
          <h2 id={`footer-menu-${id}`} className="mb-4 px-3 text-sm font-medium">{copy.groups[id as keyof typeof copy.groups].title}</h2>
          <FluidGroup as="ul" axis="y" className="m-0 list-none p-0">{Object.entries(links).map(([key, href]) => <li key={key}><Link href={href} className={linkClass}>{t(`footer.groups.${id}.items.${key}` as Parameters<typeof t>[0])}</Link></li>)}</FluidGroup>
          {id === 'company' && <>
            <p className="mt-5 px-3 text-xs font-medium">{institution.social}</p>
            <FluidGroup as="ul" axis="y" className="m-0 list-none p-0">{Object.entries(destinations.social).filter(([, href]) => href && href !== destinations.social.whatsapp).map(([key, href]) => <li key={key}><Link href={href!} target="_blank" rel="noopener noreferrer" className={linkClass} aria-label={t('accessibility.externalLink', { label: copy.social[key as keyof typeof copy.social] })}>{copy.social[key as keyof typeof copy.social]}</Link></li>)}</FluidGroup>
          </>}
        </nav>)}
      </div>
      <div className="overflow-hidden border-y border-border px-6 py-6 md:px-8 md:py-8"><MotionRenderAscii render="paragan-wordmark" model="halftone" className="text-foreground" baseOpacity={0.2} fallback={<AppWordMark aria-hidden="true" className="h-auto w-full opacity-20" />} /></div>
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 md:px-8"><p className="text-xs text-muted-foreground">{t('brand.copyright', { year: String(new Date().getFullYear()) })}</p><Link href={destinations.footer.home} className={linkClass}>{t('actions.backToTop')}</Link></div>
    </div>
  </footer>;
}
