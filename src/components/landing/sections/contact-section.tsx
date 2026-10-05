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
        <div className="grid md:grid-cols-2">
          <div className="border-b border-border px-6 py-12 md:border-r md:border-b-0 xl:px-10 xl:py-16">
            <div className="sticky top-47 flex flex-col justify-start">
              <SectionHeading
                eyebrow="Seu negócio, com mais possibilidades"
                title="A próxima operação"
                muted="pode levar a sua marca."
                description="Conte o que você quer construir, o que já existe e o que precisa evoluir. O ponto de partida é o seu negócio."
              />
              <div className="mt-12 border-t border-border pt-6">
                <span className={cn(micro, 'text-brand')}>UMA CONVERSA, TRÊS PERSPECTIVAS</span>
                <p className="mt-4 text-sm leading-7">
                  Seu modelo de negócio.
                  <br />A experiência dos seus sellers.
                  <br />A estrutura para fazer acontecer.
                </p>
              </div>
            </div>
          </div>
          <form
            onSubmit={prepare}
            className="flex flex-col gap-6 px-6 py-9 md:py-12 xl:px-9 xl:py-16 [&_input]:min-h-12 [&_input]:rounded-lg [&_input]:border-input [&_input]:bg-card [&_input]:text-sm [&_input]:text-foreground [&_input]:shadow-none [&_label]:text-xs [&_label]:font-normal [&_label]:text-muted-foreground [&_textarea]:min-h-32 [&_textarea]:rounded-lg [&_textarea]:border-input [&_textarea]:bg-card [&_textarea]:p-3.5 [&_textarea]:text-sm [&_textarea]:text-foreground [&_textarea]:shadow-none"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-name">Seu nome</Label>
                <Input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  placeholder="Como podemos chamar você?"
                  required
                  maxLength={120}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-company">Empresa ou marca</Label>
                <Input
                  id="contact-company"
                  name="company"
                  autoComplete="organization"
                  placeholder="Nome da sua operação"
                  required
                  maxLength={160}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-email">E-mail profissional</Label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="voce@empresa.com.br"
                required
                maxLength={254}
              />
            </div>
            <fieldset>
              <legend className="mb-3 text-sm">Qual é o seu próximo passo?</legend>
              <FluidGroup className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <Button
                    key={item}
                    type="button"
                    variant="secondary"
                    active={interest === item}
                    aria-pressed={interest === item}
                    className={cn('min-h-11 rounded-full px-3 text-xs aria-pressed:border-brand')}
                    onClick={() => setInterest(item)}
                  >
                    {item}
                  </Button>
                ))}
              </FluidGroup>
            </fieldset>
            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-message">O que você quer colocar em movimento?</Label>
              <Textarea
                id="contact-message"
                name="message"
                rows={4}
                maxLength={2000}
                placeholder="Sua base de sellers, modelo de negócio e o que é prioridade para você."
                required
              />
            </div>
            <div className="flex flex-col items-start justify-between gap-5 xl:flex-row xl:items-center">
              <p className="text-xs leading-relaxed text-muted-foreground">
                Prévia da experiência comercial.
                <br />
                Prepare seu resumo; nenhum dado será enviado.
              </p>
              <Button type="submit" size="lg" className="min-h-12 px-6">
                Preparar conversa
              </Button>
            </div>
            {brief && (
              <div
                className="rounded-lg border border-border p-5"
                role="region"
                aria-label="Resumo da conversa"
              >
                <p role="status" className="mb-3 text-sm">
                  Seu resumo está pronto. Nesta versão, ele permanece apenas no navegador.
                </p>
                <Label htmlFor="conversation-brief">Resumo para copiar</Label>
                <Textarea
                  id="conversation-brief"
                  value={brief}
                  readOnly
                  rows={8}
                  className="mt-2"
                />
                <Button
                  type="button"
                  variant="secondary"
                  onClick={copyBrief}
                  className="mt-3 min-h-11"
                >
                  Copiar resumo
                </Button>
                <p role="status" className="mt-3 text-sm">
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
