// Downloads the Kitchen photos listed in scripts/photos.json from Pexels
// (free license, https://www.pexels.com/license/) into img/kitchen/.
// Run by .github/workflows/photos.yml, which commits the files to the repo.
import fs from 'node:fs';
const PHOTOS = JSON.parse(fs.readFileSync('scripts/photos.json', 'utf8'));
fs.mkdirSync('img/kitchen', { recursive: true });
const failed = [];
for (const [slot, id] of Object.entries(PHOTOS)) {
  const url = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1050&fit=crop`;
  const r = await fetch(url);
  const type = r.headers.get('content-type') || '';
  if (!r.ok || !type.startsWith('image/')) { failed.push(`${slot} ${id} HTTP ${r.status}`); continue; }
  const buf = Buffer.from(await r.arrayBuffer());
  fs.writeFileSync(`img/kitchen/${slot}.jpg`, buf);
  console.log(`ok ${slot} ${id} ${(buf.length / 1024).toFixed(0)} KB`);
}
if (failed.length) { console.error('FAILED:\n' + failed.join('\n')); process.exit(1); }
