import { SectionContent, ContentModule, StructuredRecords } from '../section-content';
import { ImplantationPaths } from '../implantation-paths';
import { content } from '@/i18n';
import { presentation } from '@/config/site';

const copy = content('structure').onboarding;

export function LaunchSection() {
  return <SectionContent id="implantacao" number={presentation.sections.onboarding} title={copy.title} description={copy.description}>
    <div className="grid border-t border-border lg:grid-cols-12">
      <div className="lg:col-span-6 lg:border-r lg:border-border">{copy.delivery.map((item, index) => <div key={item.title} className={index ? 'border-t border-border' : undefined}><ContentModule {...item} /></div>)}</div>
      <div className="min-w-0 lg:col-span-6 lg:[&>div>div]:border-t-0"><StructuredRecords records={[{ title: copy.commercial, fields: copy.fields }]} /></div>
    </div>
    <ImplantationPaths />
  </SectionContent>;
}
