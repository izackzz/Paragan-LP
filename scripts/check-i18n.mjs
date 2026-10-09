import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import ts from 'typescript';
import { createTranslator } from 'next-intl';

const root = path.resolve(import.meta.dirname, '..');
const failures = [];
const copyAttributes = new Set([
  'aria-label',
  'aria-description',
  'aria-valuetext',
  'alt',
  'title',
  'placeholder',
  'label',
  'eyebrow',
  'description',
  'muted',
]);

async function loadData(relative) {
  const source = await readFile(path.join(root, relative), 'utf8');
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  });
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);
}

async function files(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const result = await Promise.all(
    entries.map((entry) => {
      const location = path.join(directory, entry.name);
      return entry.isDirectory() ? files(location) : [location];
    }),
  );
  return result.flat();
}

for (const file of await files(path.join(root, 'src'))) {
  if (!file.endsWith('.tsx')) continue;
  const source = ts.createSourceFile(
    file,
    await readFile(file, 'utf8'),
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  const report = (node, reason) => {
    const { line } = source.getLineAndCharacterOfPosition(node.getStart(source));
    failures.push(`${path.relative(root, file)}:${line + 1}: ${reason}`);
  };
  const readable = (value) => /[\p{L}\p{N}]/u.test(value.trim());
  const visit = (node) => {
    if (ts.isJsxText(node) && readable(node.text)) report(node, 'literal JSX copy');
    if (ts.isJsxAttribute(node)) {
      const name = node.name.getText(source);
      if (copyAttributes.has(name) && node.initializer && ts.isStringLiteral(node.initializer)) {
        report(node, `literal ${name}`);
      }
      if (
        ['href', 'src'].includes(name) &&
        node.initializer &&
        ts.isStringLiteral(node.initializer)
      ) {
        report(node, `literal destination ${name}`);
      }
    }
    if (ts.isJsxExpression(node) && node.expression) {
      const expression = node.expression;
      if (
        (ts.isStringLiteral(expression) || ts.isNoSubstitutionTemplateLiteral(expression)) &&
        readable(expression.text)
      ) {
        report(node, 'literal JSX expression');
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(source);
}

const { default: messages } = await loadData('src/i18n/messages/pt-BR.ts');
const { destinations } = await loadData('src/config/site.ts');
const translator = createTranslator({
  locale: 'pt-BR',
  messages,
  onError(error) {
    throw error;
  },
});
let count = 0;
function validate(group, prefix = '') {
  for (const [key, value] of Object.entries(group)) {
    const messageKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'string') {
      assert.ok(value.trim(), `Empty message: ${messageKey}`);
      const values = Object.fromEntries(
        [...value.matchAll(/\{(\w+)\}/g)].map(([, parameter]) => [parameter, 'test']),
      );
      assert.equal(typeof translator(messageKey, values), 'string', messageKey);
      count++;
    } else {
      assert.deepEqual(translator.raw(messageKey), value);
      validate(value, messageKey);
    }
  }
}
validate(messages);
assert.throws(() => translator('missing.message'));
assert.equal(translator('brand.copyright', { year: '2026' }), '© 2026 Paragan');
const brief = translator('structure.contact.brief', {
  name: 'Teste {name}',
  company: 'Teste',
  channel: messages.structure.contact.email,
  contact: 'teste@example.invalid',
  scenario: messages.structure.scenarios.items.launch.label,
  origin: 'inicio',
  subject: messages.structure.contact.none,
  extra: messages.structure.contact.none,
  message: '<script>test</script>',
});
assert.ok(brief.includes('Teste {name}'));
assert.ok(brief.includes('<script>test</script>'));
assert.ok(!brief.includes('[object Object]'));

for (const menu of Object.values(messages.navigation)) {
  for (const id of Object.keys(menu.items))
    assert.ok(destinations.header.items[id], `Missing header destination: ${id}`);
}
for (const [id, group] of Object.entries(messages.footer.groups)) {
  assert.deepEqual(Object.keys(group.items), Object.keys(destinations.footer.groups[id]));
}
assert.deepEqual(Object.keys(messages.footer.social), Object.keys(destinations.social));
for (const destination of Object.values(destinations.social).filter(Boolean))
  assert.equal(new URL(destination).protocol, 'https:');

assert.deepEqual(failures, [], `Hardcoded copy/destinations:\n${failures.join('\n')}`);
console.log(
  `i18n: ${count} messages valid; no JSX copy or destination leaks; link mappings and interpolation valid.`,
);
