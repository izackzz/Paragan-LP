'use client';

import { useState, useSyncExternalStore, type FormEvent } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SectionLabel, SectionHeading } from '../primitives';
import { contactIntentEvent, readContactIntent, updateContactIntent } from '../contact-intent-link';
import { frame, section } from '../styles';
import { cn } from '@/lib/utils';
import { content, formatIndex, t } from '@/i18n';
import { contactScenarios, contactDelivery, destinations, presentation } from '@/config/site';

const copy = content('structure').contact;
const fields = content('inquiry').fields;
const scenarios = content('structure').scenarios.items;

function subscribeIntent(callback: () => void) {
  window.addEventListener(contactIntentEvent, callback);
  window.addEventListener('popstate', callback);
  window.addEventListener('hashchange', callback);
  return () => {
    window.removeEventListener(contactIntentEvent, callback);
    window.removeEventListener('popstate', callback);
    window.removeEventListener('hashchange', callback);
  };
}
const intentSnapshot = () => window.location.search;
const serverSnapshot = () => '';

export function ContactSection() {
  const search = useSyncExternalStore(subscribeIntent, intentSnapshot, serverSnapshot);
  const intent = readContactIntent(search);
  const [channel, setChannel] = useState('email');
  const [contacts, setContacts] = useState({ email: '', whatsapp: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [prepared, setPrepared] = useState<{
    brief: string;
    channel: string;
    contact: string;
    search: string;
  } | null>(null);
  const [copyStatus, setCopyStatus] = useState('');
  const [copying, setCopying] = useState(false);

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const invalid: Record<string, string> = {};
    for (const element of Array.from(form.elements)) {
      if (
        (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) &&
        !element.validity.valid
      )
        invalid[element.name] = element.validity.tooLong
          ? copy.errors.length
          : element.name === 'name'
            ? copy.errors.name
            : element.name === 'company'
              ? copy.errors.company
              : element.name === 'contact' && channel === 'email'
                ? copy.errors.email
                : copy.invalid;
    }
    if (!intent.scenario) invalid.scenario = copy.errors.scenario;
    if (
      channel === 'whatsapp' &&
      (!/^[+\d\s().-]+$/.test(contacts.whatsapp) ||
        !/^\d{10,15}$/.test(contacts.whatsapp.replace(/\D/g, '')))
    )
      invalid.contact = copy.phoneError;
    setErrors(invalid);
    if (Object.keys(invalid).length) {
      setPrepared(null);
      const first = Object.keys(invalid)[0];
      document
        .getElementById(first === 'scenario' ? 'contact-scenario' : `contact-${first}`)
        ?.focus();
      return;
    }
    const extra = Object.entries(copy.extra)
      .filter(([key]) => key !== 'platform' || intent.scenario === 'migration')
      .map(([key, label]) => `${label}: ${String(data.get(key) || copy.none)}`)
      .join('\n');
    const contact = contacts[channel as keyof typeof contacts];
    setPrepared({
      channel,
      contact,
      search,
      brief: t('structure.contact.brief', {
        name: String(data.get('name') ?? '').trim(),
        company: String(data.get('company') ?? '').trim(),
        channel: channel === 'email' ? copy.email : copy.whatsapp,
        contact,
        scenario: scenarios[intent.scenario!].label,
        origin: intent.origin ? copy.origins[intent.origin] : copy.none,
        subject: intent.subject ? copy.subjects[intent.subject] : copy.none,
        message: String(data.get('message') || copy.none),
        extra,
      }),
    });
    setCopyStatus('');
  }

  async function copyBrief() {
    if (!prepared || copying) return;
    setCopying(true);
    setCopyStatus('');
    try {
      await navigator.clipboard.writeText(prepared.brief);
      setCopyStatus(copy.copied);
    } catch {
      setCopyStatus(copy.copyError);
    } finally {
      setCopying(false);
    }
  }

  function error(name: string) {
    return errors[name] ? (
      <p id={`error-${name}`} className="text-sm text-destructive">
        {errors[name]}
      </p>
    ) : null;
  }

  return (
    <section id="contato" className="dark scroll-mt-22 bg-background text-foreground">
      <div className={cn(frame, section)}>
        <SectionLabel number={formatIndex(presentation.sections.inquiry)}>
          {copy.label}
        </SectionLabel>
        <div className="grid lg:grid-cols-12">
          <div className="border-b border-border p-6 md:p-8 lg:col-span-5 lg:border-r lg:border-b-0">
            <div className="sticky top-47">
              <SectionHeading
                eyebrow={copy.label}
                title={copy.title}
                description={copy.description}
              />
              <ul className="mt-8 list-none border-t border-border">
                {copy.points.map((point) => (
                  <li key={point} className="border-b border-border py-5 text-sm">
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {copy.returnNote}
              </p>
            </div>
          </div>
          <form
            noValidate
            onSubmit={prepare}
            aria-labelledby="contact-form-title"
            className="min-w-0 lg:col-span-7"
            onChange={() => {
              setPrepared(null);
              setCopyStatus('');
            }}
          >
            <div className="border-b border-border p-6 md:p-8">
              <h3
                id="contact-form-title"
                tabIndex={-1}
                className="text-lg font-medium tracking-tight"
              >
                {content('inquiry').form.title}
              </h3>
            </div>
            <div className="grid gap-5 p-6 md:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                {(['name', 'company'] as const).map((name) => (
                  <div key={name} className="grid gap-2">
                    <Label htmlFor={`contact-${name}`}>{fields[name].label}</Label>
                    <Input
                      id={`contact-${name}`}
                      name={name}
                      autoComplete={name === 'name' ? 'name' : 'organization'}
                      required
                      maxLength={name === 'name' ? 120 : 160}
                      placeholder={fields[name].placeholder}
                      pattern=".*\S.*"
                      className="h-11"
                      aria-invalid={!!errors[name]}
                      aria-describedby={errors[name] ? `error-${name}` : undefined}
                    />
                    {error(name)}
                  </div>
                ))}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="contact-channel">{copy.channel}</Label>
                <Select
                  name="channel"
                  value={channel}
                  onValueChange={(value) => {
                    if (value !== 'email' && value !== 'whatsapp') return;
                    setChannel(value);
                    setErrors({});
                    setPrepared(null);
                  }}
                >
                  <SelectTrigger id="contact-channel" className="w-full data-[size=default]:h-11">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="dark">
                    <SelectItem value="email">{copy.email}</SelectItem>
                    <SelectItem value="whatsapp">{copy.whatsapp}</SelectItem>
                  </SelectContent>
                </Select>
                <Label htmlFor="contact-contact" className="mt-3">
                  {channel === 'email' ? fields.email.label : fields.phone.label}
                </Label>
                <Input
                  id="contact-contact"
                  name="contact"
                  type={channel === 'email' ? 'email' : 'tel'}
                  autoComplete={channel === 'email' ? 'email' : 'tel'}
                  inputMode={channel === 'email' ? 'email' : 'tel'}
                  value={contacts[channel as keyof typeof contacts]}
                  onChange={(event) =>
                    setContacts((current) => ({ ...current, [channel]: event.target.value }))
                  }
                  required
                  maxLength={channel === 'email' ? 254 : 30}
                  placeholder={
                    channel === 'email' ? fields.email.placeholder : fields.phone.placeholder
                  }
                  className="h-11"
                  aria-invalid={!!errors.contact}
                  aria-describedby={errors.contact ? 'error-contact' : undefined}
                />
                {error('contact')}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="contact-scenario">{copy.scenario}</Label>
                <Select
                  name="scenario"
                  value={intent.scenario ?? ''}
                  onValueChange={(value) => {
                    const scenario = contactScenarios.find((item) => item === value);
                    if (!scenario) return;
                    updateContactIntent({ ...intent, scenario });
                    setPrepared(null);
                    setErrors({});
                  }}
                >
                  <SelectTrigger
                    id="contact-scenario"
                    className="w-full data-[size=default]:h-11"
                    aria-invalid={!!errors.scenario}
                    aria-describedby={errors.scenario ? 'error-scenario' : undefined}
                  >
                    <SelectValue placeholder={copy.selectScenario} />
                  </SelectTrigger>
                  <SelectContent className="dark">
                    {contactScenarios.map((value) => (
                      <SelectItem key={value} value={value}>
                        {scenarios[value].label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {error('scenario')}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="contact-message">{copy.message}</Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  maxLength={2000}
                  placeholder={fields.message.placeholder}
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? 'contact-message-help error-message' : 'contact-message-help'
                  }
                />
                {error('message')}
                <p
                  id="contact-message-help"
                  className="text-xs leading-relaxed text-muted-foreground"
                >
                  {copy.messageHint}
                </p>
              </div>
              {intent.origin && (
                <p className="text-xs text-muted-foreground">
                  {copy.origin}: {copy.origins[intent.origin]}
                </p>
              )}
              {intent.subject && (
                <p className="text-xs text-muted-foreground">
                  {copy.subject}: {copy.subjects[intent.subject]}
                </p>
              )}
              <details className="border-t border-border pt-5">
                <summary className="min-h-11 cursor-pointer text-sm">{copy.qualification}</summary>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  {Object.entries(copy.extra)
                    .filter(([name]) => name !== 'platform' || intent.scenario === 'migration')
                    .map(([name, label]) => (
                      <div key={name} className="grid gap-2">
                        <Label htmlFor={`contact-${name}`}>{label}</Label>
                        <Input
                          id={`contact-${name}`}
                          name={name}
                          placeholder={copy.extraExamples[name as keyof typeof copy.extraExamples]}
                          aria-describedby={`contact-${name}-help`}
                          maxLength={240}
                          className="h-11"
                        />
                        <p
                          id={`contact-${name}-help`}
                          className="text-xs leading-relaxed text-muted-foreground"
                        >
                          {copy.extraHelp[name as keyof typeof copy.extraHelp]}
                        </p>
                      </div>
                    ))}
                </div>
              </details>
              {contactDelivery.mode === 'local' && (
                <p className="text-xs leading-relaxed text-muted-foreground">{copy.privacy}</p>
              )}
              <Button type="submit" variant="cta" size="lg" className="min-h-11 w-full">
                {copy.submit}
              </Button>
            </div>
            {prepared && prepared.search === search && (
              <div
                className="grid gap-4 border-t border-border p-6 md:p-8"
                role="region"
                aria-label={copy.summary}
              >
                <p role="status" className="text-sm">
                  {copy.ready}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">{copy.next}</p>
                <p className="text-sm">
                  {copy.channelSummary}: {prepared.channel === 'email' ? copy.email : copy.whatsapp}{' '}
                  · {prepared.contact}
                </p>
                <Label htmlFor="contact-summary">{copy.summary}</Label>
                <Textarea id="contact-summary" value={prepared.brief} readOnly rows={10} />
                <Button
                  type="button"
                  variant="secondary"
                  disabled={copying}
                  aria-busy={copying}
                  onClick={copyBrief}
                  className="min-h-11"
                >
                  {copying ? copy.copying : copy.copy}
                </Button>
                <p role="status" className="text-sm">
                  {copyStatus}
                </p>
                {prepared.channel === 'email' && (
                  <p className="text-xs leading-relaxed text-muted-foreground">{copy.noEmail}</p>
                )}
                <Button asChild variant="primary" className="min-h-11">
                  <Link
                    href={destinations.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {copy.whatsappAction}
                  </Link>
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
