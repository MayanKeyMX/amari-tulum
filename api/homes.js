// GET /api/homes : AMARI homes for the Stay page, live from Boom PMS when configured.
//
// Set these in Vercel > Project > Settings > Environment Variables to go live:
//   BOOM_API_URL   the Boom endpoint that lists your properties (from Boom support)
//   BOOM_API_KEY   the API key / token Boom issues for that endpoint
//   BOOM_BOOK_URL  optional, booking page template, e.g. https://book.example.com/listing/{id}
// Without them this returns 204 and the page shows the draft list in /data/homes.json.
export default async function handler(req, res) {
  const { BOOM_API_URL, BOOM_API_KEY, BOOM_BOOK_URL } = process.env;
  if (!BOOM_API_URL || !BOOM_API_KEY) return res.status(204).end();
  try {
    const r = await fetch(BOOM_API_URL, {
      headers: { Authorization: `Bearer ${BOOM_API_KEY}`, Accept: 'application/json' },
    });
    if (!r.ok) throw new Error('Boom HTTP ' + r.status);
    const raw = await r.json();
    const list = Array.isArray(raw) ? raw : raw.data || raw.listings || raw.properties || raw.results || [];
    const pick = (o, ...k) => k.map((x) => x.split('.').reduce((v, p) => (v == null ? v : v[p]), o)).find((v) => v != null && v !== '');
    const homes = list
      .filter((l) => pick(l, 'active', 'is_active', 'listed') !== false)
      .map((l) => {
        const id = String(pick(l, 'id', 'listing_id', 'uuid') ?? '');
        const pics = pick(l, 'pictures', 'photos', 'images') || [];
        const first = Array.isArray(pics) && pics.length ? (pics[0].url || pics[0].original || pics[0].src || pics[0]) : null;
        return {
          id,
          name: pick(l, 'title', 'name', 'nickname', 'public_name') || 'AMARI villa',
          model: pick(l, 'property_type', 'type', 'room_type') || '',
          bedrooms: Number(pick(l, 'bedrooms', 'beds_count', 'number_of_bedrooms')) || null,
          bathrooms: Number(pick(l, 'bathrooms', 'baths', 'number_of_bathrooms')) || null,
          guests: Number(pick(l, 'accommodates', 'max_guests', 'guests', 'person_capacity')) || null,
          pool: true,
          image: pick(l, 'picture', 'thumbnail', 'cover_image', 'main_image') || first,
          price: Number(pick(l, 'base_price', 'price', 'nightly_price', 'prices.basePrice')) || null,
          currency: pick(l, 'currency', 'prices.currency') || 'USD',
          url: pick(l, 'booking_url', 'public_url', 'url') || (BOOM_BOOK_URL ? BOOM_BOOK_URL.replace('{id}', id) : null),
          summary: pick(l, 'summary', 'description', 'public_description.summary') || '',
        };
      });
    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=3600');
    return res.status(200).json({ source: 'boom', homes });
  } catch (e) {
    console.error('homes: Boom fetch failed', e.message);
    return res.status(204).end();
  }
}
