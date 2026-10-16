(function () {
  'use strict';
  const CONFIG = {
    repo: 'Zelinsky-Vladimir/lampa-releases',
    appStore: '',
    googlePlay: '',
  };
  const FILES = {
    macArm: 'Lampa-mac-arm64.dmg',
    macIntel: 'Lampa-mac-x64.dmg',
    winSetup: 'Lampa-Setup.exe',
    winPortable: 'Lampa-Portable.exe',
    appImage: 'Lampa-linux-x86_64.AppImage',
    deb: 'Lampa-linux-amd64.deb',
  };
  const L = window.LAMPA_I18N;
  const LANGS = ['en', 'ru', 'fr', 'de', 'es'];
  const LOCALES = { en: 'en-GB', ru: 'ru-RU', fr: 'fr-FR', de: 'de-DE', es: 'es-ES' };
  const lang = LANGS.includes(document.documentElement.lang) ? document.documentElement.lang : 'en';
  const tr = (key, fallback) => (lang !== 'en' && L[lang][key] != null ? L[lang][key] : fallback);

  function detectOs() {
    const ua = navigator.userAgent || '';
    const p = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || '';
    if (/iPhone|iPad|iPod/.test(ua) || (/Mac/.test(p) && navigator.maxTouchPoints > 1)) return 'ios';
    if (/Android/.test(ua)) return 'android';
    if (/Mac/.test(p) || /Macintosh/.test(ua)) return 'mac';
    if (/Win/.test(p) || /Windows/.test(ua)) return 'win';
    if (/Linux|X11/.test(p) || /Linux/.test(ua)) return 'linux';
    return 'other';
  }

  const fileUrl = (name) => `https://github.com/${CONFIG.repo}/releases/latest/download/${name}`;

  let whyFeat = 'free';
  function renderTour() {
    const set = lang === 'ru' ? 'ru' : 'en';
    for (const img of document.querySelectorAll('.why img[data-shot]')) {
      const next = `shots/tour/${set}-${img.dataset.shot}.webp`;
      if (!img.src.endsWith(next)) img.src = next;
    }
    for (const b of document.querySelectorAll('.why-item')) b.setAttribute('aria-pressed', String(b.dataset.feat === whyFeat));
    for (const sc of document.querySelectorAll('.why-scene')) sc.hidden = sc.dataset.scene !== whyFeat;
  }
  function bindTour() {
    for (const b of document.querySelectorAll('.why-item')) b.addEventListener('click', () => { whyFeat = b.dataset.feat; renderTour(); });
  }
  function apply() {
    for (const n of document.querySelectorAll('.store.soon')) n.dataset.soon = tr('soon', 'soon');
    hero();
    version();
  }
  function hero() {
    const os = detectOs();
    const btn = document.getElementById('hero-dl');
    if (!btn) return;
    const map = { mac: ['macOS', 'macArm', 'Apple Silicon · .dmg'], win: ['Windows', 'winSetup', 'Windows 10, 11 · .exe'], linux: ['Linux', 'appImage', 'AppImage'] };
    const m = map[os];
    btn.hidden = !m;
    if (m) {
      btn.href = fileUrl(FILES[m[1]]);
      btn.querySelector('.t').textContent = tr('dlFor', 'Download for {os}').replace('{os}', m[0]);
      btn.querySelector('small').textContent = m[2];
    }
    for (const r of document.querySelectorAll('.dl-row')) r.classList.toggle('mine', !!m && r.dataset.file === m[1]);
    const store = document.getElementById('hero-store');
    if (store && os === 'android') store.replaceWith(document.getElementById('play-badge').cloneNode(true));
  }

  let release = null;
  async function version() {
    const out = document.getElementById('dl-version');
    if (!out) return;
    if (!release) {
      try {
        const cached = JSON.parse(sessionStorage.getItem('lampa-site-release') || 'null');
        if (cached && Date.now() - cached.at < 3600000) release = cached.data;
      } catch {}
    }
    if (!release) {
      try {
        const r = await fetch(`https://api.github.com/repos/${CONFIG.repo}/releases/latest`);
        if (r.ok) {
          const j = await r.json();
          release = { tag_name: j.tag_name, published_at: j.published_at };
          try {
            sessionStorage.setItem('lampa-site-release', JSON.stringify({ at: Date.now(), data: release }));
          } catch {}
        }
      } catch {}
    }
    if (!release) return;
    const date = new Date(release.published_at).toLocaleDateString(LOCALES[lang], { day: 'numeric', month: 'long', year: 'numeric' });
    out.textContent = tr('dlVersion', 'Version {v} · {date}').replace('{v}', release.tag_name.replace(/^v/, '')).replace('{date}', date) + ' · ';
  }

  function redirectToLang() {
    if (lang !== 'en') return false;
    let saved = null;
    try {
      saved = localStorage.getItem('lampa-site-lang');
    } catch {}
    const q = new URLSearchParams(location.search).get('lang');
    const nav = (navigator.language || 'en').toLowerCase();
    const guess = /^(ru|uk|be|kk)/.test(nav) ? 'ru' : LANGS.find((l) => nav.startsWith(l)) || 'en';
    const want = LANGS.includes(q) ? q : LANGS.includes(saved) ? saved : guess;
    if (want === 'en') return false;
    const page = location.pathname.split('/').pop();
    const keep = new URLSearchParams(location.search);
    keep.delete('lang');
    const qs = keep.toString();
    location.replace(`${want}/${page}${qs ? `?${qs}` : ''}${location.hash}`);
    return true;
  }
  function init() {
    for (const r of document.querySelectorAll('.dl-row')) r.href = fileUrl(FILES[r.dataset.file]);
    for (const a of document.querySelectorAll('[data-store]')) {
      const url = CONFIG[a.dataset.store];
      if (url) a.href = url;
      else a.classList.add('soon');
    }
    if (document.body.dataset.page === 'confirmed') {
      const params = new URLSearchParams(location.search);
      if (/error/.test(location.hash)) params.set('expired', '1');
      const qs = params.toString();
      history.replaceState(null, '', location.pathname + (qs ? `?${qs}` : ''));
      const failed = params.has('expired');
      for (const n of document.querySelectorAll('.confirm-ok')) n.hidden = failed;
      for (const n of document.querySelectorAll('.confirm-fail')) n.hidden = !failed;
    }
    if (redirectToLang()) return;
    if (document.body.dataset.page === 'signed-in') {
      const params = new URLSearchParams(location.search + (location.hash ? '&' + location.hash.slice(1) : ''));
      const ok = params.has('code') && !params.has('error');
      for (const n of document.querySelectorAll('.confirm-ok')) n.hidden = !ok;
      for (const n of document.querySelectorAll('.confirm-fail')) n.hidden = ok;
      if (ok) {
        const target = 'lampa://auth-callback?code=' + encodeURIComponent(params.get('code'));
        for (const a of document.querySelectorAll('.open-app')) a.href = target;
        history.replaceState(null, '', location.pathname);
        location.href = target;
      }
    }
    for (const a of document.querySelectorAll('.lang a')) {
      a.addEventListener('click', () => {
        try {
          localStorage.setItem('lampa-site-lang', a.dataset.lang);
        } catch {}
      });
    }
    bindTour();
    apply();
  }

  init();
})();
