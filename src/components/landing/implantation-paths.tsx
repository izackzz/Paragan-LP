'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabItem, TabPanel } from '@/components/ui/tabs';
import { ActionLink } from './primitives';
import { ContentModule } from './section-content';
import { content, formatIndex } from '@/i18n';

const copy = content('structure').onboarding;

export function ImplantationPaths() {
  const [path, setPath] = useState('activation');
  return (
    <div className="border-t border-border">
      <Tabs defaultValue="activation" onValueChange={setPath}>
        <div className="p-6 md:p-8">
          <h3 className="mb-6 font-display text-2xl/7 font-medium">{copy.pathsLabel}</h3>
          <TabsList aria-label={copy.pathsLabel} className="flex w-full flex-col gap-1 sm:flex-row">
            <TabItem
              value="activation"
              label={copy.activation}
              className="min-h-12 flex-1 whitespace-normal"
            />
            <TabItem
              value="migration"
              label={copy.migration}
              className="min-h-12 flex-1 whitespace-normal"
            />
          </TabsList>
        </div>
        {(['activation', 'migration'] as const).map((id) => (
          <TabPanel key={id} value={id}>
            <ol className="m-0 list-none p-0">
              {copy.paths[id].map((step, index) => (
                <li
                  key={step.title}
                  className="grid gap-5 border-t border-border p-6 md:grid-cols-12 md:p-8"
                >
                  <span className="font-mono text-3xl text-brand md:col-span-1">
                    {formatIndex(index + 1)}
                  </span>
                  <div className="min-w-0 md:col-span-5">
                    <h3 className="text-base font-medium">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {step.delivery}
                    </p>
                  </div>
                  <dl className="grid gap-3 text-sm md:col-span-6">
                    <div>
                      <dt className="font-medium">{copy.owner}</dt>
                      <dd className="mt-1 text-muted-foreground">{step.owner}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">{copy.completion}</dt>
                      <dd className="mt-1 text-muted-foreground">{step.completion}</dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ol>
          </TabPanel>
        ))}
      </Tabs>
      <div className="grid md:grid-cols-2 xl:grid-cols-3">
        {copy.after.map((item) => (
          <div
            key={item.title}
            className="border-t border-border md:odd:border-r xl:border-r xl:last:border-r-0"
          >
            <ContentModule {...item} />
          </div>
        ))}
      </div>
      <div className="grid justify-items-start gap-5 border-t border-border p-6 md:p-8">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {content('onboarding').note}
        </p>
        <ActionLink origin="implantacao" scenario={path === 'migration' ? 'migration' : undefined}>
          {copy.cta}
        </ActionLink>
      </div>
    </div>
  );
}
