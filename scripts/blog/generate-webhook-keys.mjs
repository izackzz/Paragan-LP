import { randomBytes, createHash } from 'node:crypto';
import { readFile, writeFile, rename, chmod } from 'node:fs/promises';
import path from 'node:path';

const file = path.resolve('.env.local');
let env = await readFile(file, 'utf8').catch((error) => {
  if (error.code === 'ENOENT') return '';
  throw error;
});
for (const name of ['BLOG_WEBHOOK_API_KEY', 'BLOG_INGESTION_KEY']) {
  const existing = env.match(new RegExp(`^${name}=(.*)$`, 'm'))?.[1];
  if (existing) {
    if (!/^[A-Za-z0-9_-]{32,256}$/.test(existing))
      throw new Error(`${name}: valor existente inválido; não foi alterado.`);
    continue;
  }
  const value = `pbg_${randomBytes(32).toString('base64url')}`;
  const pattern = new RegExp(`^${name}=.*$`, 'm');
  env = pattern.test(env)
    ? env.replace(pattern, `${name}=${value}`)
    : `${env.trimEnd()}\n${name}=${value}\n`;
}
const temporary = `${file}.${randomBytes(8).toString('hex')}.tmp`;
await writeFile(temporary, env, { mode: 0o600, flag: 'wx' });
await rename(temporary, file);
await chmod(file, 0o600);
const ingestionKey = env.match(/^BLOG_INGESTION_KEY=(.*)$/m)[1];
console.log('Chaves configuradas em .env.local (0600). Nenhum segredo foi exibido.');
console.log(`BLOG_INGESTION_KEY_SHA256=${createHash('sha256').update(ingestionKey).digest('hex')}`);
