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

const interests = [
  'Lançar meu gateway',
  'Planejar operação',
  'Migrar minha infra',
  'Avaliar para um projeto futuro',
  'Conhecer mais antes de decidir',
  'Explorar uma parceria',
];
const perspectives = [
  ['Seu modelo', 'O que sua operação quer construir e controlar.'],
  ['Sua experiência', 'Como sua marca se conecta aos sellers e aos clientes.'],
  ['Seu próximo passo', 'Recursos, integrações e prioridades para começar.'],
];

export function ContactSection() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([interests[0]]);
  const [brief, setBrief] = useState('');
  const [copyStatus, setCopyStatus] = useState('');

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setBrief(
      `Minha operação com a Paragan\n\nNome: ${data.get('name')}\nEmpresa ou projeto: ${data.get('company')}\nCargo ou papel: ${data.get('role')}\nE-mail: ${data.get('email')}\nTelefone / WhatsApp: ${data.get('phone')}\nSite: ${data.get('website') || 'Ainda não informado'}\nInteresses: ${interests.filter((item) => selectedInterests.includes(item)).join(', ') || 'Quero explorar as possibilidades'}\nComo conheci a Paragan: ${data.get('source')}\n\nSobre meu projeto:\n${data.get('message')}`,
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
                Da primeira ideia à operação em crescimento: conte seu momento e o que você quer construir.
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
                    Nome da empresa ou projeto
                  </Label>
                  <Input
                    id="contact-company"
                    name="company"
                    autoComplete="organization"
                    placeholder="Sua empresa, marca ou ideia em construção"
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
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="contact-phone" className="text-sm font-normal">
                    Telefone / WhatsApp
                  </Label>
                  <Input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+55 (11) 99999-9999"
                    required
                    maxLength={30}
                    className="h-11"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="contact-role" className="text-sm font-normal">
                    Seu cargo ou papel no projeto
                  </Label>
                  <Select name="role" required autoComplete="organization-title">
                    <SelectTrigger
                      id="contact-role"
                      className="w-full min-w-0 text-sm data-[size=default]:h-11"
                    >
                      <SelectValue placeholder="Selecione seu cargo ou papel" />
                    </SelectTrigger>
                    <SelectContent position="popper" className="dark">
                      {[
                        'CEO / Fundador(a)',
                        'CTO / Liderança de tecnologia',
                        'Designer',
                        'Developer / Desenvolvedor(a)',
                        'Idealizador(a) do projeto',
                        'Produto / Estratégia',
                        'Financeiro / Operações',
                        'Comercial / Parcerias',
                        'Outro cargo ou papel',
                      ].map((role) => (
                        <SelectItem key={role} value={role}>
                          {role}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-website" className="text-sm font-normal">
                  Site da empresa ou projeto <span className="text-muted-foreground">(opcional)</span>
                </Label>
                <Input
                  id="contact-website"
                  name="website"
                  type="url"
                  autoComplete="url"
                  placeholder="https://suaempresa.com.br"
                  maxLength={500}
                  className="h-11"
                />
              </div>

              <fieldset className="min-w-0 border-t border-border pt-5">
                <legend className="pr-3 text-sm">No que você tem interesse?</legend>
                <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
                  Selecione tudo o que faz sentido para o seu próximo passo.
                </p>
                <div className="grid grid-cols-1 p-1 gap-1 border rounded-input border-accent sm:grid-cols-2">
                  {interests.map((item) => (
                    <Button
                      key={item}
                      type="button"
                      size="xs"
                      variant={selectedInterests.includes(item) ? 'primary' : 'ghost'}
                      active={selectedInterests.includes(item)}
                      aria-pressed={selectedInterests.includes(item)}
                      className={cn(
                        'min-h-11 min-w-0 rounded-md border-2 font-normal px-3.5 py-3 whitespace-normal shadow-none focus-visible:z-10 text-md text-xs',
                        selectedInterests.includes(item) &&
                          'shadow-[inset_0_1ex_2rem_2px_color-mix(in_srgb,var(--primary)_50%,transparent)]! border-primary text-md text-xs',
                        !selectedInterests.includes(item) && 'bg-muted/40 border-accent text-md text-xs',
                      )}
                      onClick={() => setSelectedInterests((current) =>
                        current.includes(item)
                          ? current.filter((selected) => selected !== item)
                          : [...current, item],
                      )}
                    >
                      {item}
                    </Button>
                  ))}
                </div>
              </fieldset>

              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-source" className="text-sm font-normal">
                  Onde você conheceu a Paragan?
                </Label>
                <Select name="source" required>
                  <SelectTrigger
                    id="contact-source"
                    className="w-full min-w-0 text-sm data-[size=default]:h-11"
                  >
                    <SelectValue placeholder="Selecione onde nos conheceu" />
                  </SelectTrigger>
                  <SelectContent position="popper" className="dark">
                    {[
                      'Indicação',
                      'Google / Busca',
                      'LinkedIn',
                      'Instagram',
                      'GitHub',
                      'Evento / Comunidade',
                      'Outro canal',
                    ].map((source) => (
                      <SelectItem key={source} value={source}>
                        {source}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-message" className="text-sm font-normal">
                  Conte um pouco sobre o que você quer construir
                </Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  maxLength={2000}
                  placeholder="Qual é a sua ideia ou operação? Conte quem você quer atender, o que precisa resolver e quando gostaria de começar."
                  required
                  className="min-h-32"
                />
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Ainda está na fase de ideia? Ótimo. Compartilhe seu objetivo e o que precisa funcionar primeiro.
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
