// EN / KO language toggle. Mirrors dark_mode.js pattern.
(function () {
  function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);
    var btn = document.getElementById('lang-toggle');
    if (btn) btn.setAttribute('data-lang', lang);
  }

  // Apply stored preference as early as possible to reduce flicker.
  try {
    var saved = localStorage.getItem('lang');
    if (saved === 'en' || saved === 'ko') {
      applyLang(saved);
    } else {
      applyLang('en');
    }
  } catch (e) {
    applyLang('en');
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('lang-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('lang') || 'en';
      var next = current === 'en' ? 'ko' : 'en';
      try { localStorage.setItem('lang', next); } catch (e) {}
      applyLang(next);
    });
  });
})();
