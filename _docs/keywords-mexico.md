# AMARI Uptown Tulum — Mexican Domestic Keyword Research

**Date:** 2026-09-18
**Market researched:** Mexico (DataForSEO location 2484), language Spanish (`es`)
**Comparison market:** United States (2840), language English (`en`)
**Tool:** OpenSEO MCP (DataForSEO backend), project `AMARI Tulum` / `d4819b80-c4e8-4418-b071-5b34a94981ed`
**Calls made:** 2x `get_keyword_metrics`, 1x `research_keywords` (5 seeds), 1x `get_serp_results` (7 queries), 1x `find_serp_competitors` (20 keywords)

## Provenance rule for this document

Every number in the tables below is **from the API**. Anything I concluded rather than measured is marked **INFERENCE** in bold. No figures in this document were estimated, rounded from memory, or invented. Where a keyword returned nothing, it is listed in the "no measurable volume" section rather than given a guessed number.

Columns: `Vol` = monthly search volume, `KD` = keyword difficulty (0-100), `CPC` = cost per click in USD, `Intent` = DataForSEO main search intent. `KD null` means DataForSEO returned no difficulty score for that keyword, usually a low-volume long tail.

---

## 1. The headline finding: Tulum's Mexican domestic search demand is small, and it is concentrated in the neighbourhood, not the destination

Same concepts, Mexican-Spanish market vs US-English market, all API figures:

| Concept | Spanish (Mexico) | Vol | English (US) | Vol | Foreign multiple |
|---|---|---|---|---|---|
| The destination | tulum mexico | 3,600 | tulum mexico | 90,500 | **25x** |
| Restaurants | restaurantes en tulum | 1,000 | tulum restaurants | 18,100 | **18x** |
| Hotels | hoteles en tulum | 2,900 | tulum hotels | 12,100 | **4.2x** |
| Things to do | que hacer en tulum | 1,900 | things to do in tulum | 3,600 | **1.9x** |
| Villas | villas en tulum | 90 | tulum villas | 720 | **8x** |
| Airbnb | airbnb tulum | 1,300 | tulum airbnb | 1,300 | **1.0x (parity)** |
| **The neighbourhood** | **la veleta tulum** | **1,000** | **la veleta tulum** | **720** | **0.72x — domestic is BIGGER** |

**INFERENCE, and it is the strategic centre of this whole report:** Tulum as a destination is an overwhelmingly foreign-searched place, but **La Veleta is the one term where Mexicans out-search Americans.** Uptown / La Veleta is a lived-in, residential, cafe-and-condo neighbourhood, and the people searching it in Spanish are Mexicans who already know Tulum well enough to search by *barrio* rather than by beach. That is exactly AMARI's address. A Spanish site that owns "la veleta" beats a Spanish site that tries to own "tulum."

Two more API-grounded supports for that read:

- CPCs are systematically higher in the US market for the same concept (`tulum villas` $3.44 vs `villas en tulum` $2.14; `tulum hotels` $2.92 vs `hoteles en tulum` $1.70; `la veleta tulum` US $2.81 vs MX $0.71). **INFERENCE:** foreign buyers are the ones being bid on. Domestic Spanish traffic is cheaper to win, both organically and paid.
- Mexican volume for the neighbourhood cluster is real and steady: `la veleta tulum` 1,000, `aldea zamá` 5,400, `aldea zama tulum` 1,300.

### Seasonality (API monthly trend data, Sep 2025 to Aug 2026)

| Keyword | Peak month | Peak vol | Trough | Trough vol |
|---|---|---|---|---|
| la veleta tulum | Jan 2026 | 1,600 | Jun-Aug 2026 | 720 |
| airbnb tulum | Jan 2026 | 1,900 | Aug 2026 | 880 |
| que hacer en tulum | Jan 2026 / Sep 2025 | 2,400 | Jun 2026 | 1,000 |
| restaurantes en tulum | Oct-Dec 2025, Jan + Apr 2026 | 1,300 | Jun-Aug 2026 | 880 |
| hoteles en tulum | Oct 2025 | 5,400 | Jun 2026 | 1,900 |
| villas en tulum | Sep 2025 / Apr 2026 | 140 | Jul 2026 | 50 |

**INFERENCE:** the booking-research window is roughly October through April, with a hard January spike and a June-August floor. Content and paid should be live and indexed by **late September** to catch the following season. Also note `que hacer en tulum` fell from 2,400 (Sep 2025) to 1,300 (Aug 2026) and `airbnb tulum` from 1,900 to 880 over the same window: overall Spanish-language Tulum interest is trending down, not up, so this is a niche-capture play rather than a rising-tide play.

---

## 2. Ranked opportunity table

Ranked by my judgment of volume x intent x winnability for a brand-new 46-villa site, not by raw volume. All Vol/KD/CPC/Intent figures are API.

### Tier A — go after these first

| # | Keyword | Vol | KD | CPC | Intent | Target page |
|---|---|---|---|---|---|---|
| 1 | la veleta tulum | 1,000 | 0 | $0.71 | navigational | `/es/la-veleta/` neighbourhood guide (hero page) |
| 2 | restaurantes en tulum | 1,000 | 0 | $0.53 | commercial | `/es/cidro/` restaurant page + Google Business Profile |
| 3 | restaurantes tulum | 880 | 0 | $0.82 | commercial | `/es/cidro/` (same page, variant) |
| 4 | hospedaje en tulum | 590 | 5 | $1.51 | commercial | `/es/hospedaje/` stay landing page |
| 5 | desayuno tulum | 390 | 0 | $0.40 | navigational | `/es/cidro/desayuno/` |
| 6 | departamentos en venta tulum | 390 | 0 | $1.01 | transactional | `/es/venta/` villas for sale |
| 7 | casas en venta tulum | 320 | 0 | $0.77 | transactional | `/es/venta/` |
| 8 | hoteles en tulum centro | 260 | (n/a) | $1.00 | commercial | `/es/hospedaje/` (Uptown is walkable to centro) |
| 9 | donde comer en tulum | 260 | 0 | $0.44 | informational | Blog: guide, links to Cidro |
| 10 | brunch tulum | 210 | 0 | $0.54 | navigational | `/es/cidro/desayuno/` |
| 11 | mejores restaurantes tulum | 110 | 0 | $0.61 | commercial | Blog: Cidro-inclusive roundup |
| 12 | donde desayunar en tulum | 90 | 0 | $0.51 | informational | `/es/cidro/desayuno/` |
| 13 | villas en tulum | 90 | 0 | $2.14 | commercial | `/es/villas/` (low vol, perfect match, highest CPC in cluster) |
| 14 | restaurantes en la veleta tulum | 30 | null | $0.20 | commercial | `/es/cidro/` (tiny, but it is literally AMARI's block) |

### Tier B — supporting / blog

| # | Keyword | Vol | KD | CPC | Intent | Target page |
|---|---|---|---|---|---|---|
| 15 | cenotes en tulum | 9,900 | 0 | $0.53 | informational | Blog: cenotes guide (huge vol, zero booking intent) |
| 16 | vuelos a tulum | 5,400 | 0 | $0.41 | transactional | Blog: how to get here / airport transfer |
| 17 | aeropuerto de tulum | 3,600 | 2 | $0.70 | navigational | Blog: TQO airport to Uptown, transfer info |
| 18 | que hacer en tulum | 1,900 | 0 | $0.62 | informational | Blog: pillar itinerary guide |
| 19 | playas de tulum | 1,300 | 0 | $0.80 | informational | Blog: beaches guide |
| 20 | viaje a tulum | 1,000 | 0 | $1.03 | informational | Blog: trip-planning pillar |
| 21 | spa tulum | 590 | 0 | $1.27 | navigational | Amenities page (if AMARI has spa/wellness) |
| 22 | escapadas de fin de semana | 480 | 0 | $0.57 | informational | Blog: weekend-escape angle, national not Tulum-specific |
| 23 | hoteles baratos en tulum | 390 | 0 | $0.80 | commercial | Blog only — **wrong price positioning for AMARI** |
| 24 | yoga tulum | 390 | 0 | $0.98 | informational | Amenities / wellness page |
| 25 | temazcal tulum | 320 | 0 | $0.86 | informational | Blog or wellness page |
| 26 | cenotes cerca de tulum | 260 | 0 | $0.26 | informational | Blog: cenotes guide (same page as #15) |
| 27 | mejores cenotes tulum | 170 | 0 | $0.38 | informational | Blog: cenotes guide (same page) |
| 28 | paquetes a tulum | 170 | 0 | $1.99 | transactional | Offers page — high CPC, real buying intent |
| 29 | bares en tulum | 170 | 0 | $1.09 | navigational | Blog: nightlife guide |
| 30 | hoteles en tulum frente al mar | 170 | 0 | $1.37 | commercial | **Do not target** — AMARI is not beachfront |
| 31 | coworking tulum | 140 | 6 | $1.13 | navigational | Amenities page, remote-work angle |
| 32 | cuanto cuesta ir a tulum | 140 | 0 | $1.15 | informational | Blog: budget guide |
| 33 | terrenos en venta tulum | 140 | 0 | $0.86 | transactional | `/es/venta/` secondary |
| 34 | que hacer en tulum gratis | 170 | 0 | $0.13 | informational | Blog: free things to do |
| 35 | condos en tulum | 110 | 0 | $2.02 | commercial | `/es/venta/` — high CPC |
| 36 | renta departamento tulum | 170 | 0 | $0.47 | transactional | `/es/hospedaje/` long-stay section |
| 37 | que hacer en tulum de noche | 70 | 0 | $0.52 | informational | Blog: nightlife guide (same page as #29) |
| 38 | que comer en tulum | 50 | 50 | $0.49 | informational | Blog: food guide |
| 39 | casa en tulum | 480 | 0 | $3.72 | commercial | `/es/venta/` — **highest CPC in the entire dataset** |
| 40 | departamentos tulum | 480 | 0 | $1.07 | commercial | `/es/venta/` |

---

## 3. Explicit split: dedicated page vs blog post vs do not chase

### Worth a dedicated, conversion-focused page

| Page | Primary keyword (API vol) | Supporting keywords |
|---|---|---|
| `/es/la-veleta/` — neighbourhood guide with "stay with us" CTA | la veleta tulum (1,000) | aldea zama tulum (1,300), la veleta tulum hotel (10) |
| `/es/cidro/` — restaurant | restaurantes en tulum (1,000) | restaurantes tulum (880), restaurantes en la veleta tulum (30), mejores restaurantes tulum (110), restaurantes en tulum centro (30) |
| `/es/cidro/desayuno/` — breakfast and brunch | desayuno tulum (390) | brunch tulum (210), donde desayunar en tulum (90), mejores desayunos en tulum (30), donde desayunar en tulum barato (40) |
| `/es/hospedaje/` — stay / book a villa | hospedaje en tulum (590) | hoteles en tulum centro (260), villas en tulum (90), casas en tulum renta (170), renta departamento tulum (170), casas de renta en tulum (50) |
| `/es/venta/` — villas for sale | departamentos en venta tulum (390) | casas en venta tulum (320), casa en tulum (480), departamentos tulum (480), condos en tulum (110), terrenos en venta tulum (140), villas en tulum venta (10) |
| `/es/amenidades/` — amenities and wellness | spa tulum (590) | yoga tulum (390), coworking tulum (140), temazcal tulum (320) |

**INFERENCE on the amenities page:** only build it if AMARI actually has a spa, yoga deck, temazcal and coworking on site. These are navigational/informational queries; a thin page listing amenities AMARI does not have will not rank and will not convert.

### Worth a blog or guide post (traffic and authority, not direct bookings)

| Post | Primary keyword (API vol) | Why |
|---|---|---|
| Guía de cenotes cerca de Tulum | cenotes en tulum (9,900) | Biggest volume in the whole domestic dataset, KD 0. Absorbs cenotes cerca de tulum (260), mejores cenotes tulum (170), cenotes en tulum gratis (70) |
| Cómo llegar a Tulum: aeropuerto TQO, vuelos y traslados | vuelos a tulum (5,400) | Combined with aeropuerto de tulum (3,600) this is the single biggest domestic intent cluster. Transactional intent |
| Qué hacer en Tulum: guía completa | que hacer en tulum (1,900) | Pillar. Absorbs tulum que hacer (210), que hacer en tulum gratis (170), que hacer en tulum centro (30), que hacer en tulum en un día (30) |
| Playas de Tulum: cuáles valen la pena | playas de tulum (1,300) | Absorbs playa paraíso tulum (2,900), playa del pueblo tulum (390), playas en tulum gratis (70) |
| Cuánto cuesta un viaje a Tulum | cuanto cuesta ir a tulum (140) | Absorbs viaje a tulum precio (170), cuanto cuesta ir a tulum desde cdmx (30), cuanto cuesta un viaje a tulum para dos personas (20) |
| Dónde comer en Tulum como local | donde comer en tulum (260) | Absorbs que comer en tulum (50), donde comer en tulum centro (30), restaurantes tulum baratos (90). Natural home for a Cidro mention |
| Vida nocturna en Tulum | bares en tulum (170) | Absorbs antros en tulum (170), que hacer en tulum de noche (70), bares en tulum centro (20), mejores antros en tulum (20) |
| Escapadas de fin de semana desde tu ciudad | escapadas de fin de semana (480) | The only long-weekend term with measurable volume. Not Tulum-specific, so this is a reach post |

### Not worth chasing

| Keyword / cluster | API evidence | Reason |
|---|---|---|
| **uptown tulum** | **No data returned** | **Zero measurable Spanish search volume in Mexico. AMARI's own branding term is not a search term. Do not build SEO on it.** Use it as brand language, rank on "la veleta" |
| tulum desde cdmx / desde monterrey / desde guadalajara | No data returned for any | Mexicans do not search Tulum by origin city. Only `cuanto cuesta ir a tulum desde cdmx` (30) exists. The origin-city page idea has no demand behind it |
| escapada fin de semana tulum | No data returned | The "weekend escape to Tulum" framing does not exist in Spanish search |
| tulum con alberca privada / villas con alberca privada tulum | No data returned for either | Private-pool framing has no Tulum-specific volume. Generic `airbnb con alberca privada` (170) and `casa con alberca privada` (140, KD 56) exist but are not Tulum searches |
| puente que hacer / puentes 2026 mexico / fin de semana largo riviera maya / vacaciones semana santa tulum / que hacer en semana santa en tulum | No data returned for any | **The entire "puente / long weekend / Semana Santa" cluster is empty in the API for Mexico.** Only `viajes fin de semana largo` (10) and `escapadas de fin de semana` (480) registered |
| hoteles la veleta tulum / hoteles aldea zama tulum | No data returned | Neighbourhood + hotel combinations have no volume. Rank the neighbourhood page instead |
| comida yucateca tulum | 10 | Too small for a page. Use as a menu section and an on-page mention |
| tulum en familia / retiro de yoga tulum / nomada digital tulum / airbnb en tulum inversion | No data returned | No measurable domestic volume |
| hoteles en tulum | 2,900, KD 1 | See SERP analysis below. The SERP is owned by a Google Hotels pack and the organic results are not even Tulum-relevant. Unwinnable and pointless |
| airbnb tulum | 1,300, KD 25 | Navigational to airbnb.mx, which ranks #1. You cannot take this |
| aldea tulum (6,600) / aldea tulum plus (320) / aldea tulum venta (90) | API vol real | **INFERENCE:** this is not the Aldea Zamá neighbourhood. The SERP shows `aldeatulumplus.com` at #5 and `aldeatulummexico.com` at #17 for `departamentos en venta tulum`, both Infonavit/Fovissste-credit housing developments. `aldea tulum` at 6,600 is branded navigational traffic for a competing budget developer, in a different price bracket from AMARI. Do not chase it |
| hoteles baratos en tulum (390), hoteles en tulum económicos (320), rentas en tulum economicas (50) | API vol real | Wrong price positioning for a 46-villa gated development |
| hoteles en tulum frente al mar (170), hoteles en tulum todo incluido (1,600) | API vol real | AMARI is Uptown, not beachfront, and not all-inclusive. Ranking here produces bounces |
| preventa tulum (10, KD 51), departamentos en preventa tulum (10, KD 53), invertir en tulum (10), inversion inmobiliaria tulum (10) | API vol real | Near-zero domestic volume, moderate difficulty. The investor conversation happens in English and in person, not in Spanish organic search |
| clima en tulum (22,200), ruinas de tulum (14,800) | API vol real | Huge volume, zero commercial value. Weather widgets and Wikipedia own these |

---

## 4. Who actually ranks (API `find_serp_competitors`, 20 Spanish keywords, Mexico)

Top domains by visibility score:

| Domain | Visibility | Kws | Avg pos | Notable #1s / top-3s |
|---|---|---|---|---|
| tripadvisor.com.mx | 6.80 | 10 | 4.2 | que hacer en tulum #1, mejores hoteles en tulum #2, restaurantes en tulum #2, la veleta tulum #3, donde comer en tulum #3 |
| booking.com | 5.40 | 6 | 2.0 | la veleta tulum #1, hoteles en tulum #1, aldea zama tulum #1, mejores hoteles en tulum #1, hoteles en tulum economicos #1 |
| expedia.mx | 3.25 | 6 | 6.3 | hoteles en tulum #2, hoteles en tulum economicos #3 |
| instagram.com | 2.75 | 6 | 11.4 | aldea zama tulum #2, temazcal tulum #2 and #3 |
| viajeroscallejeros.com | 2.50 | 3 | 2.7 | donde comer en tulum #2, que hacer en tulum #2, restaurantes en tulum #4 |
| airbnb.mx | 2.50 | 3 | 2.7 | airbnb tulum #1, la veleta tulum #2, aldea zama tulum #5 |
| mochileandoporelmundo.com | 2.40 | 4 | 5.0 | donde comer en tulum #1, restaurantes en tulum #5 |
| bestday.com.mx | 2.35 | 4 | 6.5 | viaje a tulum #3, mejores hoteles en tulum #3 |
| kayak.com.mx | 2.20 | 4 | 5.5 | hoteles en tulum economicos #2, que hacer en tulum #3 |
| guide.michelin.com | 1.90 | 3 | 4.7 | restaurantes en tulum #1, donde comer en tulum #4 |
| despegar.com.mx | 1.80 | 4 | 9.5 | viaje a tulum #5, hoteles en tulum economicos #4 |
| tulumtemazcal.com | 1.70 | 1 | 2.5 | temazcal tulum #1 and #4 |
| inmuebles24.com | 1.50 | 2 | 3.5 | aldea zama tulum #3, la veleta tulum #4 |
| youtube.com | 1.40 | 8 | 18.8 | que hacer en tulum #5 |
| trivago.com.mx | 1.35 | 4 | 15.8 | hoteles en tulum #3 |
| facebook.com | 1.35 | 8 | 21.5 | temazcal tulum #5, aldea zama tulum #6 |

**Independent sites that rank and are therefore beatable (INFERENCE):** `viajeroscallejeros.com`, `mochileandoporelmundo.com`, `caleatulum.com` (#13 and #15 for la veleta tulum), `yourtulumconcierge.com` (#5 for la veleta tulum, in English), `plalla.com`, `tulumgourmetguide.com`, `frontdoormexico.com`, `elviajemehizoami.com`, `foodandpleasure.com`, `mbmarcobeteta.com`, `gourmetdemexico.com.mx`, `lapso.at` (a La Veleta property ranking #20 on its own hospedaje page), `tulumtemazcal.com`. None of these are OTAs. A well-made Spanish AMARI site can displace them on neighbourhood and food queries.

### What the live SERPs (API `get_serp_results`) actually look like

**`hoteles en tulum`** — worth flagging plainly: the live Mexico SERP for this term is **broken for content purposes**. Position 1 is an AI Overview, position 2 is a Google Hotels pack, and the organic results below are not about Tulum at all (YouTube cocktail videos, Instagram reels about Baja California, Hotel Misión Saltillo, Disney World tips, Wikipedia's "Hotel" article). **INFERENCE:** Google is treating the national-level Spanish query as generic "hotels" and satisfying the Tulum intent entirely through the hotels pack. **There is no organic slot to win here.** The path to this traffic is Google Hotels / a verified property listing and paid, not a landing page.

**`villas en tulum`** — hotels pack at #1, then booking.com, airbnb.mx, expedia.mx, inmuebles24.com, `villastulum.mx` (#7, a direct competitor development), mrandmrssmith.com, `villas.byunique.com`, `tulumlandandproperty.com`, remax.com.mx, tripadvisor, cntraveler, agoda, propiedades.com, mayaluxe.com. **INFERENCE:** this SERP is split down the middle between rent-a-villa and buy-a-villa, which is unusually favourable for AMARI because AMARI does both. A single page that answers both, in Spanish, is a better intent match than any incumbent.

**`restaurantes en tulum`** — positions 1-3 are a **local pack**: La Brasa Tulum, Onyx Tulum, Xibak Tulum (the last one at Itzamna, Aldea Zamá). Then guide.michelin.com, tripadvisor.com.mx, blogs, rosanegra.com.mx, opentable.com.mx, Instagram, TikTok, Facebook, hoteles.com. **INFERENCE and this is the single most actionable item in this report: for Cidro, the money is in the Google Business Profile, not the website.** Three of the top three results are map listings. A page on amaritulum.com will fight for position 8+; an optimised, reviewed, photographed GBP fights for position 1-3.

**`donde desayunar en tulum`** — same pattern. Local pack #1-3: Del Cielo, Botánica Garden Café, Que Huevos Tulum (Aldea Zamá). Then tripadvisor, foodandpleasure.com, Facebook group, plalla.com, tulumgourmetguide.com, ubereats.com, conradtulumrivieramaya.com, theyellownest.mx, gourmetdemexico.com.mx. **INFERENCE:** breakfast is the most winnable food query for Cidro. The incumbents are small neighbourhood cafes, not Michelin listings, and a hotel restaurant (Conrad's Arbolea at #16, The Yellow Nest's floating breakfast at #17) already ranks, which proves a property restaurant can hold a slot. Note theyellownest.mx sells a DayPass with floating breakfast plus cenote tour at $2,270 MXN per person — **INFERENCE:** a Cidro day-pass or breakfast-plus-pool product is a proven, ranking, monetisable format in this exact market.

**`la veleta tulum`** — Google Knowledge Graph panel at #1 describing the neighbourhood, AI Overview at #2, then booking.com, People Also Ask, `yourtulumconcierge.com` (English), tripadvisor, video, airbnb.mx, inmuebles24.com, a postal-code site, expedia.mx, es.trip.com, `caleatulum.com`, okanrealestate.com, YouTube, propiedades.com, `frontdoormexico.com`, `lapso.at`. **INFERENCE:** the top Spanish-language organic results here are OTAs and property portals. There is **no authoritative Spanish neighbourhood guide to La Veleta written by someone who lives there.** That gap is AMARI's single best organic opportunity, and it sits directly on the one keyword where domestic demand beats foreign demand.

**`hoteles en tulum centro`** — hotels pack #1, tripadvisor.com.mx #2, booking.com #4, expedia.mx #6, bestday.com.mx #7, myboutiquehotel.com #9, trivago #10, kayak #11, tulumtownhotels.com #13, hoteles.com #18, hoteltonight.com #20. Pure OTA wall. **INFERENCE:** winnable only via a listing strategy, not a content strategy.

**`departamentos en venta tulum`** — portal-dominated: inmuebles24.com #1, mercadolibre #2, propiedades.com #3, mudafy #4, then **`aldeatulumplus.com` at #5 — a developer's own site ranking above most portals.** Also iadmexico #7, AI Overview #8, selvacorealty.com #9, vivanuncios #10, lamudi #11, rivieramayacozy.com #13, pincali #14, plalla.com #16, `aldeatulummexico.com` #17, icasas #20. **INFERENCE:** a developer site *can* crack the top 5 of this SERP. AMARI's `/es/venta/` page is genuinely viable, and it should also be syndicated onto inmuebles24, Mercado Libre, propiedades.com and Lamudi, because those portals hold 6 of the top 11 slots.

---

## 5. Keywords that returned no data from the API

These were submitted to `get_keyword_metrics` for Mexico/Spanish and came back with **no row at all**, meaning DataForSEO has no measurable search volume for them. I am listing them rather than assigning a number:

`tulum con alberca privada`, `escapada fin de semana tulum`, `tulum desde cdmx`, `tulum desde monterrey`, `tulum desde guadalajara`, `villas con alberca privada tulum`, `tulum en familia`, `puente que hacer`, `vacaciones semana santa tulum`, `fin de semana largo riviera maya`, `que hacer en semana santa en tulum`, `puentes 2026 mexico`, `uptown tulum`, `hoteles la veleta tulum`, `hoteles aldea zama tulum`, `airbnb en tulum inversion`, `retiro de yoga tulum`, `nomada digital tulum`.

One keyword, `villas en venta tulum`, returned a row with a null search volume and transactional intent but no metrics.

**This is a real result, not a tool failure.** Nine of the eighteen were from the brief's cluster 2 (puente / long-weekend travel) and cluster 1's origin-city terms. **INFERENCE: the assumption that Mexicans search "Tulum from Mexico City" or "what to do on the long weekend" does not hold up. They search for flights (`vuelos a tulum`, 5,400), for the airport (`aeropuerto de tulum`, 3,600), and for cost (`cuanto cuesta ir a tulum`, 140).** If Joseph wants the domestic long-weekend traveller, that person has to be reached through paid social and email around the puente calendar, not through organic search, because the organic queries do not exist.

---

## 6. What I would do with this

1. **Build the La Veleta page first.** It is the one keyword where domestic demand exceeds foreign demand (1,000 vs 720), KD is 0, and no Spanish-language authority exists. It should be a genuine neighbourhood guide, written like a local, with AMARI's booking CTA integrated rather than bolted on.
2. **Fix Cidro's Google Business Profile before writing a single word of restaurant copy.** Three of the top three results for `restaurantes en tulum` (1,000/mo) and for `donde desayunar en tulum` are map listings. Photos, hours, menu, categories, review velocity. Then build `/es/cidro/` and `/es/cidro/desayuno/` behind it.
3. **Do not chase `hoteles en tulum`.** 2,900/mo and KD 1 looks irresistible and is a trap. The live SERP has no winnable organic slot.
4. **Rename the SEO target, not the brand.** "Uptown Tulum" has zero Spanish search volume. Keep it as the brand voice; rank on "La Veleta."
5. **Build `/es/venta/` and syndicate to the portals.** A developer site holds #5 on `departamentos en venta tulum` today, so the slot is reachable, but inmuebles24, Mercado Libre, propiedades.com and Lamudi hold most of the page and need listings regardless.
6. **Ship by late September.** Every travel keyword in this dataset peaks in January and bottoms out in June-August.
7. **Serve the foreign market too.** `tulum restaurants` at 18,100 and `tulum hotels` at 12,100 in the US are 18x and 4x the Spanish equivalents, at higher CPCs. The domestic Spanish play is the differentiated, cheap, winnable one, but it is the smaller pot. A bilingual site captures both; a Spanish-only site leaves the larger market on the table.

---

*No Firecrawl was used. No WebSearch or WebFetch was needed; every figure above came from the OpenSEO/DataForSEO API calls listed at the top.*
