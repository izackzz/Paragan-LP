import { content } from '@/i18n';
import { destinations } from './site';
import type { MegaMenuDefinition, MegaMenuLink } from '@/components/landing/mega-menu';

const navigation = content('navigation');
const copy = content('megaMenu');
type ItemId = keyof typeof destinations.header.items;

function link(
  id: ItemId,
  item: { title: string; description: string },
  icon: MegaMenuLink['icon'],
): MegaMenuLink {
  return { id, ...item, href: destinations.header.items[id], icon };
}

/** One to three link columns; omit promotion or set showIllustration=false independently. */
export const megaMenus: readonly MegaMenuDefinition[] = [
  {
    id: 'platform',
    title: navigation.platform.title,
    intro: navigation.platform.intro,
    columns: [
      {
        id: 'operation',
        title: copy.groups.operation,
        items: [
          link('gateway', navigation.platform.items.gateway, 'dashboard'),
          link('sellers', navigation.platform.items.sellers, 'users'),
          link('acquiring', navigation.platform.items.acquiring, 'routing'),
        ],
      },
      {
        id: 'sales',
        title: copy.groups.sales,
        items: [
          link('checkout', navigation.platform.items.checkout, 'credit-card'),
          link('finance', navigation.platform.items.finance, 'chart'),
          link('subscriptions', navigation.platform.items.subscriptions, 'repeat'),
        ],
      },
    ],
    promotion: {
      ...copy.promotions.platform,
      href: '/plataforma',
      placeholderLabel: copy.illustrationPlaceholder,
    },
  },
  {
    id: 'solutions',
    title: navigation.solutions.title,
    intro: navigation.solutions.intro,
    columns: [
      {
        id: 'project',
        title: copy.groups.project,
        items: [
          link('launch', navigation.solutions.items.launch, 'launch'),
          link('migration', navigation.solutions.items.migration, 'routing'),
          link('platforms', navigation.solutions.items.platforms, 'users'),
        ],
      },
      {
        id: 'viability',
        title: copy.groups.viability,
        items: [
          link('digital', navigation.solutions.items.digital, 'package'),
          link('calculator', navigation.solutions.items.calculator, 'calculator'),
        ],
      },
    ],
  },
  {
    id: 'developers',
    title: navigation.developers.title,
    intro: navigation.developers.intro,
    columns: [
      {
        id: 'connections',
        title: copy.groups.connections,
        items: [
          link('overview', navigation.developers.items.overview, 'dashboard'),
          link('api', navigation.developers.items.api, 'code'),
          link('webhooks', navigation.developers.items.webhooks, 'webhook'),
          link('integrations', navigation.developers.items.integrations, 'package'),
        ],
      },
    ],
    promotion: {
      ...copy.promotions.integrations,
      href: '/integracoes',
      placeholderLabel: copy.illustrationPlaceholder,
    },
  },
];
