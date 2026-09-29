// Vercel build: copy the static site into ./public and pull the Kitchen photos
// from Pexels (free license, https://www.pexels.com/license/) into img/kitchen/.
// A photo that fails to download fails the build, so a broken image never ships.
import fs from 'node:fs';
import path from 'node:path';

const OUT = 'public';
const SKIP = new Set(['.git', '.github', 'node_modules', 'scripts', '_docs', OUT, '.vercel',
  'README.md', 'package.json', 'vercel.json', '.gitignore', '.vercelignore']);

// slot -> Pexels photo id. Swap an id here to change a photo.
const PHOTOS = {
  'meal-plan':   30635720, // meal prep containers, rice and vegetables
  'feast':       4929705,  // containers of prepared food
  'bowl':        105588,   // chicken, rice and broccoli
  'motulenos':   5840312,  // breakfast tacos with eggs
  'chaya-juice': 17890560, // green smoothie
  'tikin-xic':   15913464, // salmon with vegetables
  'poc-chuc':    29101362, // grilled steak with vegetables
  'cochinita':   4519057,  // plates of healthy food
  'aguachile':   29177449, // shrimp and avocado salad
  'drinks':      6707445,  // fresh smoothie
  'cafe-pan':    13787645, // matcha
  'terrace':     7299855,  // weighing ingredients on a scale
  'eggs':        19559056, // healthy egg breakfast
  'yogurt':      10421049, // yogurt bowl with berries
};

function copy(src, dst) {
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    if (src === '.' && SKIP.has(e.name)) continue;
    const s = path.join(src, e.name), d = path.join(dst, e.name);
    if (e.isDirectory()) { fs.mkdirSync(d, { recursive: true }); copy(s, d); }
    else fs.copyFileSync(s, d);
  }
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });
copy('.', OUT);

const dir = path.join(OUT, 'img', 'kitchen');
fs.mkdirSync(dir, { recursive: true });
const failed = [];
await Promise.all(Object.entries(PHOTOS).map(async ([slot, id]) => {
  const url = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1050&fit=crop`;
  try {
    const r = await fetch(url, { redirect: 'follow' });
    const type = r.headers.get('content-type') || '';
    if (!r.ok || !type.startsWith('image/')) throw new Error(`HTTP ${r.status} ${type}`);
    const buf = Buffer.from(await r.arrayBuffer());
    fs.writeFileSync(path.join(dir, slot + '.jpg'), buf);
    console.log(`ok   ${slot.padEnd(12)} ${id}  ${(buf.length / 1024).toFixed(0)} KB`);
  } catch (e) { failed.push(`${slot} (${id}): ${e.message}`); }
}));
if (failed.length) { console.error('FAILED photos:\n  ' + failed.join('\n  ')); process.exit(1); }
console.log('site built into', OUT);
