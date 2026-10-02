// Renders the Stay page homes grid: Boom PMS via /api/homes, else the draft list.
(function () {
  var grid = document.getElementById('homes-grid');
  if (!grid) return;
  var base = new URL('.', document.currentScript ? document.currentScript.src : location.href);
  var es = (document.documentElement.lang || '').slice(0, 2) === 'es';
  var T = es ? { all: 'Todas', br: 'rec.', bed: 'rec&aacute;maras', bath: 'ba&ntilde;os', guests: 'hu&eacute;spedes', pool: 'Alberca privada',
      from: 'desde', night: 'noche', book: 'Ver fechas', ask: 'Consultar tarifas', live: 'Disponibilidad en vivo desde Boom',
      draft: 'Vista previa: lista provisional por dise&ntilde;o de villa hasta conectar Boom.', wa: 'Hola, quiero consultar fechas para ' }
    : { all: 'All', br: 'BR', bed: 'bedrooms', bath: 'baths', guests: 'guests', pool: 'Private pool',
      from: 'from', night: 'night', book: 'Check dates', ask: 'Ask for rates', live: 'Live availability from Boom',
      draft: 'Preview: draft list by villa design until Boom is connected.', wa: 'Hi, I would like to check dates for ' };
  var homes = [], filter = 'all';
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function img(src) { return /^https?:|^\//.test(src) ? src : new URL(src, base).href; }
  function card(h) {
    var spec = [h.bedrooms && h.bedrooms + ' ' + T.bed, h.bathrooms && h.bathrooms + ' ' + T.bath, h.guests && h.guests + ' ' + T.guests].filter(Boolean).join(' &middot; ');
    var price = h.price ? T.from + ' $' + Math.round(h.price).toLocaleString('en-US') + ' ' + (h.currency || 'USD') + ' / ' + T.night : T.ask;
    var href = h.url || ('https://wa.me/529842051612?text=' + encodeURIComponent(T.wa.replace(/&[a-z]+;/g, '') + h.name));
    var sum = typeof h.summary === 'object' ? (es ? h.summary.es : h.summary.en) : h.summary;
    return '<article class="home"><div class="home__shot">' + (h.image ? '<img src="' + esc(img(h.image)) + '" alt="' + esc(h.name) + '" loading="lazy">' : '') +
      (h.pool ? '<span class="home__tag">' + T.pool + '</span>' : '') + '</div><div class="home__body"><h3>' + esc(h.name) + '</h3>' +
      '<p class="home__spec">' + spec + '</p>' + (sum ? '<p class="home__spec">' + sum + '</p>' : '') +
      '<p class="home__price">' + price + '</p><a class="btn" href="' + esc(href) + '">' + T.book + '</a></div></article>';
  }
  function render() {
    var list = homes.filter(function (h) { return filter === 'all' || String(h.bedrooms) === filter; });
    grid.innerHTML = list.map(card).join('');
  }
  function filters() {
    var f = document.getElementById('homes-filter'); if (!f) return;
    var brs = Array.from(new Set(homes.map(function (h) { return h.bedrooms; }).filter(Boolean))).sort();
    f.innerHTML = ['all'].concat(brs).map(function (b) {
      return '<button type="button" data-f="' + b + '"' + (String(b) === filter ? ' class="is-on"' : '') + '>' + (b === 'all' ? T.all : b + ' ' + T.br) + '</button>';
    }).join('');
    f.onclick = function (e) { var b = e.target.closest('button'); if (!b) return; filter = b.dataset.f; filters(); render(); };
  }
  function show(data) {
    homes = data.homes || [];
    var st = document.getElementById('homes-status');
    if (st) st.innerHTML = data.source === 'boom' ? T.live : T.draft;
    filters(); render();
  }
  fetch(new URL('api/homes', base)).then(function (r) { if (r.status !== 200) throw 0; return r.json(); })
    .catch(function () { return fetch(new URL('data/homes.json', base)).then(function (r) { return r.json(); }); })
    .then(show).catch(function () { grid.innerHTML = ''; });
})();
