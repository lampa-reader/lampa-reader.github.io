import fs from 'node:fs';
import vm from 'node:vm';

const BASE = 'https://lampa-reader.github.io/';
const LANGS = ['en', 'ru', 'fr', 'de', 'es'];
const PAGES = { index: 'Index', support: 'Support', privacy: 'Privacy' };
const LOCALE = { en: 'en_GB', ru: 'ru_RU', fr: 'fr_FR', de: 'de_DE', es: 'es_ES' };
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync('i18n.js', 'utf8'), ctx);
const I = ctx.window.LAMPA_I18N;

const pageFile = (page) => (page === 'index' ? '' : `${page}.html`);
const url = (lang, page) => BASE + (lang === 'en' ? '' : `${lang}/`) + pageFile(page);
const href = (from, to, page) => (from === 'en' ? '' : '../') + (to === 'en' ? '' : `${to}/`) + pageFile(page) || './';
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const missing = new Set();

function build(lang, page) {
  let h = fs.readFileSync(`src/${page}.html`, 'utf8');
  const t = (key, en) => (lang !== 'en' && I[lang][key] != null ? I[lang][key] : en);
  if (lang !== 'en') {
    h = h.replace(/(<([a-z0-9]+)\b[^>]*\sdata-t="([^"]+)"[^>]*>)([\s\S]*?)(<\/\2>)/g, (m, open, tag, key, inner, close) => {
      if (I[lang][key] == null) missing.add(`${lang}:${key}`);
      return open + t(key, inner) + close;
    });
    h = h.replace(/src="shots\/(tour\/)?en-/g, (m, tour) => (lang === 'ru' ? `src="shots/${tour || ''}ru-` : m));
  }
  const docs = [...h.matchAll(/\n\s*<section lang="([a-z]+)"[^>]*>[\s\S]*?<\/section>/g)];
  if (docs.length) {
    const keep = docs.some((d) => d[1] === lang) ? lang : 'en';
    for (const d of docs) h = h.replace(d[0], d[1] === keep ? d[0].replace(/ hidden(="")?/, '') : '');
  }
  h = h.replace(/<html lang="[a-z]+">/, `<html lang="${lang}">`);
  const title = esc(I[lang][`meta${PAGES[page]}Title`] ?? I.en[`meta${PAGES[page]}Title`]);
  const desc = esc(I[lang][`meta${PAGES[page]}Desc`] ?? I.en[`meta${PAGES[page]}Desc`]);
  const og = `${BASE}og-${lang}.jpg`;
  const alts = LANGS.map((l) => `  <link rel="alternate" hreflang="${l}" href="${url(l, page)}">`).join('\n');
  const head = [
    `  <title>${title}</title>`,
    `  <meta name="description" content="${desc}">`,
    `  <link rel="canonical" href="${url(lang, page)}">`,
    alts,
    `  <link rel="alternate" hreflang="x-default" href="${url('en', page)}">`,
    `  <meta property="og:type" content="website">`,
    `  <meta property="og:site_name" content="Lampa">`,
    `  <meta property="og:url" content="${url(lang, page)}">`,
    `  <meta property="og:title" content="${title}">`,
    `  <meta property="og:description" content="${desc}">`,
    `  <meta property="og:image" content="${og}">`,
    `  <meta property="og:image:width" content="1200">`,
    `  <meta property="og:image:height" content="630">`,
    `  <meta property="og:locale" content="${LOCALE[lang]}">`,
    `  <meta name="twitter:card" content="summary_large_image">`,
  ].join('\n');
  h = h.replace(/  <title>[\s\S]*?<link rel="icon"/, `${head}\n  <link rel="icon"`);
  const sw = LANGS.map((l) => `<a data-lang="${l}" hreflang="${l}" lang="${l}" href="${href(lang, l, page)}"${l === lang ? ' class="on" aria-current="true"' : ''}>${l.toUpperCase()}</a>`).join('');
  h = h.replace(/<div class="lang">[\s\S]*?<\/div>/, `<div class="lang">${sw}</div>`);
  if (lang !== 'en') h = h.replace(/(href|src)="(site\.css|site\.js|i18n\.js|icon\.png|shots\/)/g, '$1="../$2');
  const dir = lang === 'en' ? '.' : lang;
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(`${dir}/${page}.html`, h);
}

for (const lang of LANGS) for (const page of Object.keys(PAGES)) build(lang, page);

const sm = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'];
for (const page of Object.keys(PAGES)) {
  for (const lang of LANGS) {
    sm.push(`  <url>\n    <loc>${url(lang, page)}</loc>`);
    for (const l of LANGS) sm.push(`    <xhtml:link rel="alternate" hreflang="${l}" href="${url(l, page)}"/>`);
    sm.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${url('en', page)}"/>\n  </url>`);
  }
}
sm.push('</urlset>');
fs.writeFileSync('sitemap.xml', sm.join('\n') + '\n');
fs.writeFileSync('robots.txt', `User-agent: *\nDisallow: /src/\n\nSitemap: ${BASE}sitemap.xml\n`);
if (missing.size) console.log('missing translations:', [...missing].join(' '));
console.log('built', LANGS.length * Object.keys(PAGES).length, 'pages');
