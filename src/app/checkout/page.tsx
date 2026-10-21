import {
  EditorialSection,
  InstitutionalShell,
  ModulePairsSection,
  PageFaqSection,
  PageHero,
  RelatedLinksSection,
  StepsSection,
} from '@/components/landing/institutional';
import { checkoutPage as copy } from '@/i18n/messages/pages/checkout';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata({ pathname: '/checkout', ...copy.metadata });

const total = 7;

export default function CheckoutPage() {
  return (
    <InstitutionalShell>
      <PageHero {...copy.hero} />
      <StepsSection id="jornada" index={1} total={total} {...copy.journey} />
      <ModulePairsSection id="configuracao" index={2} total={total} {...copy.composition} />
      <EditorialSection id="assinaturas" index={3} total={total} {...copy.subscriptions} />
      <EditorialSection id="entrega-digital" index={4} total={total} {...copy.delivery} />
      <EditorialSection id="integracoes" index={5} total={total} {...copy.integrations} />
      <PageFaqSection id="perguntas" index={6} total={total} {...copy.faq} />
      <RelatedLinksSection id="proximas-conexoes" index={7} total={total} {...copy.related} />
    </InstitutionalShell>
  );
}
