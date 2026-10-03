// AMARI site menu: full-screen menu for phones and small windows.
(function () {
  var btn = document.querySelector('.menu-btn'), menu = document.getElementById('site-menu');
  if (!btn || !menu) return;
  function open() { return !menu.hidden; }
  function set(on) {
    if (on === open()) return;
    btn.setAttribute('aria-expanded', on ? 'true' : 'false');
    menu.hidden = !on;
    document.documentElement.classList.toggle('menu-open', on);
    if (on) { var f = menu.querySelector('.menu__main a'); if (f) f.focus(); } else btn.focus({ preventScroll: true });
  }
  btn.addEventListener('click', function () { set(!open()); });
  menu.addEventListener('click', function (e) {
    if (e.target.closest('.menu__close')) return set(false);
    var a = e.target.closest('a');
    if (a) set(false); // let the link navigate (same-page #anchors scroll after the menu closes)
  });
  document.addEventListener('keydown', function (e) {
    if (!open()) return;
    if (e.key === 'Escape') return set(false);
    if (e.key === 'Tab') { // keep focus inside the open menu
      var f = menu.querySelectorAll('a,button'), first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  var mq = window.matchMedia('(min-width: 981px)');
  (mq.addEventListener ? mq.addEventListener.bind(mq, 'change') : mq.addListener.bind(mq))(function (m) { if (m.matches) set(false); });
})();
