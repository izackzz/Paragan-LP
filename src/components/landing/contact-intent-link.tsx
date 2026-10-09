'use client';

import type { ComponentProps } from 'react';
import { contactOrigins, contactScenarios, type ContactOrigin, type ContactScenario } from '@/config/site';

export const contactIntentEvent = 'paragan-contact-intent';
export type ContactIntent = { scenario?: ContactScenario; origin?: ContactOrigin };

export function readContactIntent(search: string): ContactIntent {
  const params = new URLSearchParams(search);
  const scenario = params.get('cenario');
  const origin = params.get('origem');
  return {
    scenario: contactScenarios.find(value => value === scenario),
    origin: contactOrigins.find(value => value === origin),
  };
}

export function contactIntentHref({ scenario, origin }: ContactIntent) {
  const params = new URLSearchParams();
  if (scenario) params.set('cenario', scenario);
  if (origin) params.set('origem', origin);
  return `${params.size ? `?${params}` : ''}#contato`;
}

export function updateContactIntent(intent: ContactIntent) {
  const url = new URL(window.location.href);
  if (intent.scenario) url.searchParams.set('cenario', intent.scenario);
  else url.searchParams.delete('cenario');
  if (intent.origin) url.searchParams.set('origem', intent.origin);
  else url.searchParams.delete('origem');
  window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
  window.dispatchEvent(new CustomEvent<ContactIntent>(contactIntentEvent, { detail: intent }));
}

export function ContactIntentLink({ scenario, origin, onClick, ...props }: ComponentProps<'a'> & ContactIntent) {
  return <a {...props} href={contactIntentHref({ scenario, origin })} onClick={event => {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || props.target === '_blank') return;
    // A native hash navigation scrolls and focuses without triggering a route reload.
    event.preventDefault();
    const current = readContactIntent(window.location.search);
    const intent = { scenario: scenario ?? current.scenario, origin: origin ?? current.origin };
    const url = new URL(window.location.href);
    if (intent.scenario) url.searchParams.set('cenario', intent.scenario);
    else url.searchParams.delete('cenario');
    if (intent.origin) url.searchParams.set('origem', intent.origin);
    else url.searchParams.delete('origem');
    url.hash = 'contato';
    window.history.pushState(null, '', `${url.pathname}${url.search}${url.hash}`);
    window.dispatchEvent(new CustomEvent<ContactIntent>(contactIntentEvent, { detail: intent }));
    document.getElementById('contato')?.scrollIntoView();
    document.getElementById('contact-form-title')?.focus({ preventScroll: true });
  }} />;
}
