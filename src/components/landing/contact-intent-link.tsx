'use client';

import type { ComponentProps } from 'react';
import {
  contactOrigins,
  contactScenarios,
  contactSubjects,
  type ContactOrigin,
  type ContactScenario,
  type ContactSubject,
} from '@/config/site';

export const contactIntentEvent = 'paragan-contact-intent';
export type ContactIntent = {
  scenario?: ContactScenario;
  origin?: ContactOrigin;
  subject?: ContactSubject;
};

export function readContactIntent(search: string): ContactIntent {
  const params = new URLSearchParams(search);
  const scenario = params.get('cenario');
  const origin = params.get('origem');
  const subject = params.get('assunto');
  return {
    scenario: contactScenarios.find((value) => value === scenario),
    origin: contactOrigins.find((value) => value === origin),
    subject: contactSubjects.find((value) => value === subject),
  };
}

export function contactIntentHref({ scenario, origin, subject }: ContactIntent) {
  const params = new URLSearchParams();
  if (scenario) params.set('cenario', scenario);
  if (origin) params.set('origem', origin);
  if (subject) params.set('assunto', subject);
  return `${params.size ? `?${params}` : ''}#contato`;
}

export function updateContactIntent(intent: ContactIntent) {
  const url = new URL(window.location.href);
  if (intent.scenario) url.searchParams.set('cenario', intent.scenario);
  else url.searchParams.delete('cenario');
  if (intent.origin) url.searchParams.set('origem', intent.origin);
  else url.searchParams.delete('origem');
  if (intent.subject) url.searchParams.set('assunto', intent.subject);
  else url.searchParams.delete('assunto');
  window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
  window.dispatchEvent(new CustomEvent<ContactIntent>(contactIntentEvent, { detail: intent }));
}

export function ContactIntentLink({
  scenario,
  origin,
  subject,
  onClick,
  ...props
}: ComponentProps<'a'> & ContactIntent) {
  return (
    <a
      {...props}
      href={contactIntentHref({ scenario, origin, subject })}
      onClick={(event) => {
        onClick?.(event);
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          props.target === '_blank'
        )
          return;
        // Keep same-page state and one history entry; href remains the native fallback.
        event.preventDefault();
        const current = readContactIntent(window.location.search);
        const intent = {
          scenario: scenario ?? current.scenario,
          origin: origin ?? current.origin,
          subject: subject ?? (origin ? undefined : current.subject),
        };
        const url = new URL(window.location.href);
        if (intent.scenario) url.searchParams.set('cenario', intent.scenario);
        else url.searchParams.delete('cenario');
        if (intent.origin) url.searchParams.set('origem', intent.origin);
        else url.searchParams.delete('origem');
        if (intent.subject) url.searchParams.set('assunto', intent.subject);
        else url.searchParams.delete('assunto');
        url.hash = 'contato';
        window.history.pushState(null, '', `${url.pathname}${url.search}${url.hash}`);
        window.dispatchEvent(
          new CustomEvent<ContactIntent>(contactIntentEvent, { detail: intent }),
        );
        document.getElementById('contato')?.scrollIntoView();
        document.getElementById('contact-form-title')?.focus({ preventScroll: true });
      }}
    />
  );
}
