'use client';

import { useState, type FormEvent } from 'react';
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
import { frame, section, micro } from '../styles';
import { cn } from '@/lib/utils';
import { content, formatIndex, t } from '@/i18n';
import { presentation } from '@/config/site';

const copy = content('inquiry');
const interests = Object.entries(copy.interests);
const perspectives = Object.entries(copy.perspectives);

export function ContactSection() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([interests[0][0]]);
  const [brief, setBrief] = useState('');
  const [copyStatus, setCopyStatus] = useState('');

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setBrief(
      t('inquiry.brief.template', {
        name: String(data.get('name') ?? ''),
        company: String(data.get('company') ?? ''),
        role: copy.roles[data.get('role') as keyof typeof copy.roles],
        email: String(data.get('email') ?? ''),
        phone: String(data.get('phone') ?? ''),
        website: String(data.get('website') || copy.brief.missingWebsite),
        interests:
          interests
            .filter(([id]) => selectedInterests.includes(id))
            .map(([, label]) => label)
            .join(copy.brief.separator) || copy.brief.missingInterests,
        source: copy.sources[data.get('source') as keyof typeof copy.sources],
        message: String(data.get('message') ?? ''),
      }),
    );
    setCopyStatus('');
  }

  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(brief);
      setCopyStatus(copy.brief.copied);
    } catch {
      setCopyStatus(copy.brief.failed);
    }
  }

  return (
    <section id="contato" className="dark scroll-mt-22 bg-background text-foreground">
      <div className={cn(frame, section)}>
        <SectionLabel number={formatIndex(presentation.sections.inquiry)}>
          {copy.label}
        </SectionLabel>
        <div className="grid lg:grid-cols-2">
          <div className="border-b border-border p-6 md:p-8 lg:border-r lg:border-b-0 xl:p-10">
            <div className="sticky top-47 flex flex-col items-start gap-8">
              <SectionHeading
                eyebrow={copy.heading.eyebrow}
                title={copy.heading.primary}
                muted={copy.heading.secondary}
                description={copy.heading.description}
              />
              <ol className="w-full border-t border-border">
                {perspectives.map(([id, { title, description }], index) => (
                  <li key={id} className="flex gap-4 border-b border-border py-5 last:border-b-0">
                    <span className={cn(micro, 'pt-0.5 text-accent-2')}>
                      {formatIndex(index + 1)}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-sm font-medium">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <form onSubmit={prepare} aria-labelledby="contact-form-title" className="min-w-0">
            <div className="border-b border-border p-6 md:p-8">
              <p className={cn(micro, 'mb-3 text-muted-foreground')}>{copy.form.eyebrow}</p>
              <h3 id="contact-form-title" className="text-lg font-medium tracking-tight">
                {copy.form.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {copy.form.description}
              </p>
            </div>

            <div className="grid gap-5 p-6 md:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="contact-name" className="text-sm font-normal">
                    {copy.fields.name.label}
                  </Label>
                  <Input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    placeholder={copy.fields.name.placeholder}
                    required
                    maxLength={120}
                    className="h-11"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="contact-company" className="text-sm font-normal">
                    {copy.fields.company.label}
                  </Label>
                  <Input
                    id="contact-company"
                    name="company"
                    autoComplete="organization"
                    placeholder={copy.fields.company.placeholder}
                    required
                    maxLength={160}
                    className="h-11"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-email" className="text-sm font-normal">
                  {copy.fields.email.label}
                </Label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={copy.fields.email.placeholder}
                  required
                  maxLength={254}
                  className="h-11"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="contact-phone" className="text-sm font-normal">
                    {copy.fields.phone.label}
                  </Label>
                  <Input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder={copy.fields.phone.placeholder}
                    required
                    maxLength={30}
                    className="h-11"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="contact-role" className="text-sm font-normal">
                    {copy.fields.role.label}
                  </Label>
                  <Select name="role" required autoComplete="organization-title">
                    <SelectTrigger
                      id="contact-role"
                      className="w-full min-w-0 text-sm data-[size=default]:h-11"
                    >
                      <SelectValue placeholder={copy.fields.role.placeholder} />
                    </SelectTrigger>
                    <SelectContent position="popper" className="dark">
                      {Object.entries(copy.roles).map(([id, role]) => (
                        <SelectItem key={id} value={id}>
                          {role}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-website" className="text-sm font-normal">
                  {copy.fields.website.label}{' '}
                  <span className="text-muted-foreground">{copy.form.optional}</span>
                </Label>
                <Input
                  id="contact-website"
                  name="website"
                  type="url"
                  autoComplete="url"
                  placeholder={copy.fields.website.placeholder}
                  maxLength={500}
                  className="h-11"
                />
              </div>

              <fieldset className="min-w-0 border-t border-border pt-5">
                <legend className="pr-3 text-sm">{copy.fields.interests.label}</legend>
                <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
                  {copy.fields.interests.hint}
                </p>
                <div className="grid grid-cols-1 gap-1 rounded-input border border-accent p-1 sm:grid-cols-2">
                  {interests.map(([id, item]) => (
                    <Button
                      key={id}
                      type="button"
                      size="xs"
                      variant={selectedInterests.includes(id) ? 'primary' : 'ghost'}
                      active={selectedInterests.includes(id)}
                      aria-pressed={selectedInterests.includes(id)}
                      className={cn(
                        'text-md min-h-11 min-w-0 rounded-md border-2 px-3.5 py-3 text-xs font-normal whitespace-normal shadow-none focus-visible:z-10',
                        selectedInterests.includes(id) &&
                          'text-md border-primary text-xs shadow-[inset_0_1ex_2rem_2px_color-mix(in_srgb,var(--primary)_50%,transparent)]!',
                        !selectedInterests.includes(id) &&
                          'text-md border-accent bg-muted/40 text-xs',
                      )}
                      onClick={() =>
                        setSelectedInterests((current) =>
                          current.includes(id)
                            ? current.filter((selected) => selected !== id)
                            : [...current, id],
                        )
                      }
                    >
                      {item}
                    </Button>
                  ))}
                </div>
              </fieldset>

              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-source" className="text-sm font-normal">
                  {copy.fields.source.label}
                </Label>
                <Select name="source" required>
                  <SelectTrigger
                    id="contact-source"
                    className="w-full min-w-0 text-sm data-[size=default]:h-11"
                  >
                    <SelectValue placeholder={copy.fields.source.placeholder} />
                  </SelectTrigger>
                  <SelectContent position="popper" className="dark">
                    {Object.entries(copy.sources).map(([id, source]) => (
                      <SelectItem key={id} value={id}>
                        {source}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-message" className="text-sm font-normal">
                  {copy.fields.message.label}
                </Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  maxLength={2000}
                  placeholder={copy.fields.message.placeholder}
                  required
                  className="min-h-32"
                />
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {copy.fields.message.hint}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 border-t border-border p-6 sm:flex-row md:p-8">
              <Button
                type="submit"
                size="lg"
                variant="cta"
                className="min-h-11 w-full! shrink-0 rounded-md sm:w-full!"
              >
                {copy.form.submit}
              </Button>
            </div>

            {brief && (
              <div
                className="border-t border-border bg-muted/10 p-6 md:p-8"
                role="region"
                aria-label={copy.brief.region}
              >
                <p role="status" className="mb-4 text-sm">
                  {copy.brief.ready}
                </p>
                <Label htmlFor="conversation-brief" className="text-sm font-normal">
                  {copy.brief.label}
                </Label>
                <Textarea
                  id="conversation-brief"
                  value={brief}
                  readOnly
                  rows={8}
                  className="mt-2"
                />
                <Button
                  type="button"
                  size="xs"
                  variant="primary"
                  onClick={copyBrief}
                  className="mt-4 min-h-11 rounded-md"
                >
                  {copy.brief.copy}
                </Button>
                <p role="status" className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {copyStatus}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
