// GET /api/homes : live AMARI homes from the MayanKey Boom booking site.
//
// Query: check_in, check_out (YYYY-MM-DD), adults, children, lang (en|es).
// With dates, Boom returns only homes free for those nights.
// AMARI homes are the Boom listings whose nickname is "<unit>-<design>-<owner>",
// e.g. "16H-Selva-Morton" or "23F-Jaguar-AMARI".
const BOOM = process.env.BOOM_SITE || 'https://mayankey.bookingsboom.com';
const AMARI = /^\d{2}[A-Z]-(Sol|Selva|Luna|Jaguar)-/i;
const DATE = /^\d{4}-\d{2}-\d{2}$/;

export default async function handler(req, res) {
  const q = req.query || {};
  const lang = q.lang === 'es' ? 'es' : 'en';
  const p = new URLSearchParams({ city: 'Tulum', language: lang });
  const ci = DATE.test(q.check_in || '') ? q.check_in : '';
  const co = DATE.test(q.check_out || '') ? q.check_out : '';
  const adults = Math.min(Math.max(parseInt(q.adults, 10) || 0, 0), 20);
  const children = Math.min(Math.max(parseInt(q.children, 10) || 0, 0), 20);
  if (ci && co) { p.set('check_in', ci); p.set('check_out', co); }
  if (adults) p.set('adults', String(adults));
  if (adults || children) p.set('children', String(children));
  try {
    const r = await fetch(`${BOOM}/api/booking/listings?${p}`, {
      headers: { Accept: 'application/json', 'User-Agent': 'Mozilla/5.0 (AMARI site; +https://amaritulum.com)' },
    });
    if (!r.ok) throw new Error('Boom HTTP ' + r.status);
    const data = await r.json();
    const link = new URLSearchParams({ check_in: ci, check_out: co, adults: String(adults || 1), children: String(children), lang });
    const homes = (data.listings || [])
      .filter((l) => AMARI.test(l.nickname || ''))
      .map((l) => {
        const model = (l.nickname.split('-')[1] || '').replace(/^./, (c) => c.toUpperCase());
        const img = l.picture ? l.picture.replace('/upload/', '/upload/c_fill,w_900,h_675,q_auto,f_auto/') : null;
        return {
          id: l.id, name: l.title, model, unit: l.nickname.split('-')[0],
          bedrooms: l.beds || null, bathrooms: l.baths || null, guests: l.accommodates || null,
          pool: true, image: img, url: `${BOOM}/listing/${l.id}?${link}`,
        };
      });
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=1800');
    return res.status(200).json({
      source: 'boom', dated: !!(ci && co), homes,
      search: `${BOOM}/listings?check_in=${ci}&check_out=${co}&city=Tulum&region&neighborhood&adults=${adults || 1}&children=${children}&lang=${lang}`,
    });
  } catch (e) {
    console.error('homes: Boom fetch failed', e.message);
    return res.status(502).json({ error: 'boom_unavailable' });
  }
}
