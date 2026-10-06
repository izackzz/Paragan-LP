'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { SectionLabel, SectionHeading } from '../primitives';
import { FluidGroup } from '../fluid-group';
import { frame, section, micro } from '../styles';
import { cn } from '@/lib/utils';

const interests = ['Lançar meu gateway', 'Modernizar a operação', 'Integrar minha plataforma'];
const perspectives = [
  ['Seu modelo', 'O que sua operação quer construir e controlar.'],
  ['Sua experiência', 'Como sua marca se conecta aos sellers e aos clientes.'],
  ['Seu próximo passo', 'Recursos, integrações e prioridades para começar.'],
];

export function ContactSection() {
  const [interest, setInterest] = useState(interests[0]);
  const [brief, setBrief] = useState('');
  const [copyStatus, setCopyStatus] = useState('');

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setBrief(
      `Minha operação com a Paragan\n\nNome: ${data.get('name')}\nEmpresa: ${data.get('company')}\nE-mail: ${data.get('email')}\nObjetivo: ${interest}\n\n${data.get('message')}`,
    );
    setCopyStatus('');
  }

  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(brief);
      setCopyStatus('Resumo copiado. Nenhum dado foi enviado.');
    } catch {
      setCopyStatus(
        'Não foi possível copiar automaticamente. Selecione o resumo abaixo para copiar.',
      );
    }
  }

  return (
    <section id="contato" className="dark scroll-mt-22 bg-background text-foreground">
      <div className={cn(frame, section)}>
        <SectionLabel number="10">VAMOS CONSTRUIR O PRÓXIMO CAPÍTULO</SectionLabel>
        <div className="grid lg:grid-cols-2">
          <div className="border-b border-border p-6 md:p-8 lg:border-r lg:border-b-0 xl:p-10">
            <div className="sticky top-47 flex flex-col items-start gap-8">
              <SectionHeading
                eyebrow="Seu negócio, com mais possibilidades"
                title="A próxima operação"
                muted="pode levar a sua marca."
                description="Conte o que você quer construir, o que já existe e o que precisa evoluir. O ponto de partida é o seu negócio."
              />
              <ol className="w-full border-t border-border">
                {perspectives.map(([title, description], index) => (
                  <li
                    key={title}
                    className="flex gap-4 border-b border-border py-5 last:border-b-0"
                  >
                    <span className={cn(micro, 'pt-0.5 text-accent-2')}>0{index + 1}</span>
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
              <p className={cn(micro, 'mb-3 text-muted-foreground')}>Primeiro, seu contexto</p>
              <h3 id="contact-form-title" className="text-lg font-medium tracking-tight">
                Vamos entender sua operação.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Uma apresentação breve para começar uma conversa com direção.
              </p>
            </div>

            <div className="grid gap-5 p-6 md:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="contact-name" className="text-sm font-normal">
                    Seu nome
                  </Label>
                  <Input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    placeholder="Como podemos chamar você?"
                    required
                    maxLength={120}
                    className="h-11"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="contact-company" className="text-sm font-normal">
                    Empresa ou marca
                  </Label>
                  <Input
                    id="contact-company"
                    name="company"
                    autoComplete="organization"
                    placeholder="Nome da sua operação"
                    required
                    maxLength={160}
                    className="h-11"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-email" className="text-sm font-normal">
                  E-mail profissional
                </Label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="voce@empresa.com.br"
                  required
                  maxLength={254}
                  className="h-11"
                />
              </div>

              <fieldset className="min-w-0 border-t border-border pt-5">
                <legend className="pr-3 text-sm">Qual é o seu próximo passo?</legend>
                <FluidGroup className="flex flex-wrap gap-3">
                  {interests.map((item) => (
                    <Button
                      key={item}
                      type="button"
                      size="xs"
                      variant="primary"
                      active={interest === item}
                      aria-pressed={interest === item}
                      className="min-h-11 rounded-md aria-pressed:ring-2 aria-pressed:ring-accent-2 aria-pressed:ring-offset-2 aria-pressed:ring-offset-background"
                      onClick={() => setInterest(item)}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          'mr-2 inline-block size-1.5 rounded-full bg-foreground',
                          interest !== item && 'opacity-30',
                        )}
                      />
                      {item}
                    </Button>
                  ))}
                </FluidGroup>
              </fieldset>

              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-message" className="text-sm font-normal">
                  O que você quer colocar em movimento?
                </Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  maxLength={2000}
                  placeholder="Sua base de sellers, modelo de negócio e o que é prioridade para você."
                  required
                  className="min-h-32"
                />
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Compartilhe o essencial: seu objetivo e o que precisa funcionar primeiro.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 border-t border-border p-6 sm:flex-row md:p-8">
              <Button
                type="submit"
                size="lg"
                variant="cta"
                className="min-h-11 shrink-0 rounded-md w-full! sm:w-full!"
              >
                PREPARAR CONVERSA
              </Button>
            </div>

            {brief && (
              <div
                className="border-t border-border bg-muted/10 p-6 md:p-8"
                role="region"
                aria-label="Resumo da conversa"
              >
                <p role="status" className="mb-4 text-sm">
                  Seu resumo está pronto. Você decide quando compartilhar.
                </p>
                <Label htmlFor="conversation-brief" className="text-sm font-normal">
                  Resumo para copiar
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
                  Copiar resumo
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
