// AMARI site menu: full-screen menu toggle for phones and small windows.
(function () {
  var btn = document.querySelector('.menu-btn'), menu = document.getElementById('site-menu');
  if (!btn || !menu) return;
  function set(open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    menu.hidden = !open;
    document.documentElement.classList.toggle('menu-open', open);
    if (open) { var f = menu.querySelector('a'); if (f) f.focus(); } else btn.focus();
  }
  btn.addEventListener('click', function () { set(menu.hidden); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a') || e.target.closest('.menu__close')) set(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !menu.hidden) set(false); });
})();
