// Stay page: search bar + AMARI homes grid, live from the MayanKey Boom booking site.
// /api/homes proxies Boom; the dates and guests in the bar filter to homes that are
// free, and every card books straight into Boom with the same dates filled in.
// If the API is unreachable (e.g. a static preview) it falls back to /data/homes.json
// and the search opens Boom's own results page instead.
(function () {
  var grid = document.getElementById('homes-grid');
  if (!grid) return;
  var BOOM = 'https://mayankey.bookingsboom.com';
  var base = new URL('.', document.currentScript ? document.currentScript.src : location.href);
  var es = (document.documentElement.lang || '').slice(0, 2) === 'es';
  var L = es ? 'es' : 'en';
  var T = es ? {
      all: 'Todas', br: 'rec.', bed: 'rec&aacute;maras', bath: 'ba&ntilde;os', guests: 'hu&eacute;spedes', pool: 'Alberca privada',
      book: 'Ver y reservar', bookDates: 'Reservar estas fechas', loading: 'Buscando casas libres&hellip;',
      countAll: function (n) { return n + ' casas AMARI. Agrega tus fechas para ver cu&aacute;les est&aacute;n libres.'; },
      countDated: function (n, d, g) { return n + (n === 1 ? ' casa AMARI libre' : ' casas AMARI libres') + ' del ' + d + (g ? ' &middot; ' + g : ''); },
      none: 'No hay casas AMARI libres en esas fechas.', boom: 'Ver todas las casas MayanKey en Tulum &rarr;',
      draft: 'Vista previa sin conexi&oacute;n a Boom. La b&uacute;squeda abre el sitio de reservas.', wa: 'Hola, quiero consultar fechas para ',
      guestsLbl: function (a, c) { return a + (a === 1 ? ' adulto' : ' adultos') + (c ? ', ' + c + (c === 1 ? ' ni&ntilde;o' : ' ni&ntilde;os') : ''); }
    } : {
      all: 'All', br: 'BR', bed: 'bedrooms', bath: 'baths', guests: 'guests', pool: 'Private pool',
      book: 'View and book', bookDates: 'Book these dates', loading: 'Finding free homes&hellip;',
      countAll: function (n) { return n + ' AMARI homes. Add your dates to see what is free.'; },
      countDated: function (n, d, g) { return n + (n === 1 ? ' AMARI home free' : ' AMARI homes free') + ' for ' + d + (g ? ' &middot; ' + g : ''); },
      none: 'No AMARI homes are free on those dates.', boom: 'See every MayanKey home in Tulum &rarr;',
      draft: 'Offline preview without Boom. Search opens the booking site.', wa: 'Hi, I would like to check dates for ',
      guestsLbl: function (a, c) { return a + (a === 1 ? ' adult' : ' adults') + (c ? ', ' + c + (c === 1 ? ' child' : ' children') : ''); }
    };
  var form = document.getElementById('stay-search');
  var status = document.getElementById('homes-status');
  var filterEl = document.getElementById('homes-filter');
  var homes = [], filter = 'all', live = true, boomSearch = '';

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function img(src) { return /^https?:|^\//.test(src) ? src : new URL(src, base).href; }
  function iso(d) { return d.toISOString().slice(0, 10); }
  function fmt(s) {
    var d = new Date(s + 'T12:00:00');
    return d.toLocaleDateString(es ? 'es-MX' : 'en-US', { day: 'numeric', month: 'short' });
  }
  function params() {
    var f = form ? new FormData(form) : new FormData();
    var p = { check_in: f.get('check_in') || '', check_out: f.get('check_out') || '', adults: f.get('adults') || '2', children: f.get('children') || '0' };
    if (!(p.check_in && p.check_out && p.check_out > p.check_in)) { p.check_in = ''; p.check_out = ''; }
    return p;
  }
  function boomUrl(p) {
    return BOOM + '/listings?check_in=' + p.check_in + '&check_out=' + p.check_out + '&city=Tulum&region&neighborhood&adults=' + p.adults + '&children=' + p.children + '&lang=' + L;
  }

  function card(h, dated) {
    var spec = [h.bedrooms && h.bedrooms + ' ' + T.bed, h.bathrooms && h.bathrooms + ' ' + T.bath, h.guests && h.guests + ' ' + T.guests].filter(Boolean).join(' &middot; ');
    var href = h.url || ('https://wa.me/15128096438?text=' + encodeURIComponent(T.wa.replace(/&[a-z]+;/g, '') + h.name));
    var sum = h.summary && (typeof h.summary === 'object' ? (es ? h.summary.es : h.summary.en) : h.summary);
    return '<article class="home"><div class="home__shot">' + (h.image ? '<img src="' + esc(img(h.image)) + '" alt="' + esc(h.name) + '" loading="lazy">' : '') +
      (h.model ? '<span class="home__tag">' + esc(h.model) + (h.pool ? ' &middot; ' + T.pool : '') + '</span>' : (h.pool ? '<span class="home__tag">' + T.pool + '</span>' : '')) +
      '</div><div class="home__body"><h3>' + esc(h.name) + '</h3><p class="home__spec">' + spec + '</p>' +
      (sum ? '<p class="home__spec">' + sum + '</p>' : '') +
      '<a class="btn" href="' + esc(href) + '">' + (dated ? T.bookDates : T.book) + '</a></div></article>';
  }
  function render(dated) {
    var list = homes.filter(function (h) { return filter === 'all' || String(h.bedrooms) === filter; });
    grid.innerHTML = list.map(function (h) { return card(h, dated); }).join('');
  }
  function filters(dated) {
    if (!filterEl) return;
    var brs = Array.from(new Set(homes.map(function (h) { return h.bedrooms; }).filter(Boolean))).sort();
    if (filter !== 'all' && brs.map(String).indexOf(filter) < 0) filter = 'all';
    filterEl.innerHTML = brs.length > 1 ? ['all'].concat(brs).map(function (b) {
      return '<button type="button" data-f="' + b + '"' + (String(b) === filter ? ' class="is-on"' : '') + '>' + (b === 'all' ? T.all : b + ' ' + T.br) + '</button>';
    }).join('') : '';
    filterEl.onclick = function (e) { var b = e.target.closest('button'); if (!b) return; filter = b.dataset.f; filters(dated); render(dated); };
  }
  function say(html) { if (status) status.innerHTML = html; }

  function load(p) {
    grid.setAttribute('aria-busy', 'true'); say(T.loading);
    var q = new URLSearchParams({ check_in: p.check_in, check_out: p.check_out, adults: p.adults, children: p.children, lang: L });
    return fetch(new URL('api/homes?' + q, base)).then(function (r) { if (r.status !== 200) throw 0; return r.json(); })
      .then(function (d) {
        live = true; homes = d.homes || []; boomSearch = d.search || boomUrl(p);
        var dated = !!d.dated;
        var g = T.guestsLbl(+p.adults, +p.children);
        var line = !homes.length ? T.none : dated ? T.countDated(homes.length, fmt(p.check_in) + ' &ndash; ' + fmt(p.check_out), g) : T.countAll(homes.length);
        say(line + ' <a class="link" href="' + esc(boomSearch) + '">' + T.boom + '</a>');
        filters(dated); render(dated);
      })
      .catch(function () {
        return fetch(new URL('data/homes.json', base)).then(function (r) { return r.json(); }).then(function (d) {
          live = false; homes = d.homes || []; boomSearch = boomUrl(p);
          say(T.draft + ' <a class="link" href="' + esc(boomSearch) + '">' + T.boom + '</a>');
          filters(false); render(false);
        });
      })
      .catch(function () { grid.innerHTML = ''; say('<a class="link" href="' + esc(boomUrl(p)) + '">' + T.boom + '</a>'); })
      .then(function () { grid.removeAttribute('aria-busy'); });
  }

  if (form) {
    var ci = form.elements.check_in, co = form.elements.check_out;
    var today = iso(new Date());
    ci.min = today; co.min = today;
    // start from the address bar so a shared link keeps its search
    var u = new URLSearchParams(location.search);
    ['check_in', 'check_out', 'adults', 'children'].forEach(function (k) { if (u.get(k) && form.elements[k]) form.elements[k].value = u.get(k); });
    ci.addEventListener('change', function () {
      if (!ci.value) return;
      var next = new Date(ci.value + 'T12:00:00'); next.setDate(next.getDate() + 1);
      co.min = iso(next);
      if (!co.value || co.value <= ci.value) { var plus = new Date(ci.value + 'T12:00:00'); plus.setDate(plus.getDate() + 4); co.value = iso(plus); }
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var p = params();
      if (!live && p.check_in) { location.href = boomUrl(p); return; }
      var q = new URLSearchParams(p);
      history.replaceState(null, '', location.pathname + '?' + q + '#homes');
      load(p);
    });
  }
  load(params());
})();
