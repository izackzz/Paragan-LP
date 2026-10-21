import { cn } from '@/lib/utils';
import Image from 'next/image';
import { illustrationAssets } from '@/config/illustrations';
import { ActionLink, ArtPlaceholder } from '../primitives';
import { frame, section, eyebrow } from '../styles';
import { ScreenshotTour } from '../screenshot-tour';
import { Frame } from '@/components/ui/frame';
import type { PageHeading, PageImage, PageLink } from './types';

export type PageHeroProps = PageHeading & {
  id?: string;
  description: string;
  links?: readonly PageLink[];
  image?: PageImage;
};

export function PageHero({
  id = 'inicio',
  eyebrow: kicker,
  title,
  muted,
  description,
  links,
  image,
}: PageHeroProps) {
  const artwork = image && illustrationAssets[image.asset];
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn(frame, section)}>
      <div className="mx-auto max-w-3xl px-5 pt-16 pb-12 text-left md:px-7 md:pt-25 md:pb-16 lg:text-center xl:px-10">
        {kicker && <p className={eyebrow}>{kicker}</p>}
        <h1
          id={`${id}-title`}
          className="text-3xl font-medium tracking-tight text-balance lg:text-5xl/12"
        >
          {title}
          {muted && (
            <>
              <br />
              <span className="text-foreground-3">{muted}</span>
            </>
          )}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:mx-auto md:text-lg">
          {description}
        </p>
        {!!links?.length && (
          <div className="mt-7 flex w-full flex-col gap-2 sm:flex-row lg:justify-center">
            {links.map((link) => (
              <ActionLink
                key={link.href}
                href={link.href}
                secondary={link.secondary}
                className="w-full sm:w-fit"
              >
                {link.label}
              </ActionLink>
            ))}
          </div>
        )}
      </div>
      {image && artwork && (
        <div className="px-5 pb-12 md:px-7 md:pb-16 xl:px-10">
          {image.tour ? (
            <Frame>
              <ScreenshotTour width={artwork.width} height={artwork.height} viewportRatio="16 / 9">
                <Image
                  src={artwork.src!}
                  width={artwork.width}
                  height={artwork.height}
                  alt={image.alt}
                  sizes="200vw"
                  quality={100}
                  preload
                  className="block h-full w-full"
                />
              </ScreenshotTour>
            </Frame>
          ) : (
            <ArtPlaceholder
              src={artwork.src}
              width={artwork.width}
              height={artwork.height}
              label={image.alt}
              frame
              priority
            />
          )}
          {image.caption && (
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{image.caption}</p>
          )}
        </div>
      )}
    </section>
  );
}
