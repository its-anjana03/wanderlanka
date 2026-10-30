// WanderLanka shared parts: data, photo helpers, and the head, header and footer every page uses.
const fs = require('fs');
const path = require('path');
const places = require('../content/places');
const I = require('../content/info');
const HOURS = require('../content/hours');
const GALLERY = require('../content/gallery.json');
const PHOTOS = require('../content/photos.json');
const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'docs');
const FACTS = JSON.parse(fs.readFileSync(path.join(OUT, 'data/facts.json'), 'utf8')).facts;
const FACT = Object.fromEntries(FACTS.map(f => [f.id, f]));

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const byId = Object.fromEntries(places.map(p => [p.id, p]));
const ORDER = ['sigiriya', 'kandy', 'ella', 'sri-pada', 'yala', 'galle-fort', 'anuradhapura', 'polonnaruwa', 'dambulla', 'horton-plains', 'sinharaja', 'jaffna'].map(id => byId[id]);
const short = p => p.name.replace(' Cave Temple', '');
const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${h ? '&h=' + h : ''}&q=72`;
const commons = (file, w = 1200) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${w}`;
const commonsPage = file => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replace(/ /g, '_'))}`;
const PH = {
  sigiriya: '1612862862126-865765df2ded', anuradhapura: '1663403766626-f4c961f66d39', polonnaruwa: '1709729508706-87741ec2d50a', dambulla: '1756670164679-83f5fa92d1e1',
  kandy: '1665849050332-8d5d7e59afb6', ella: '1566296314736-6eaac1ca0cb9', 'galle-fort': '1743585826344-aea35e952642', sinharaja: '1703566567802-e1945c83f0cb',
  yala: '1743014118271-415197f9b0ef', 'sri-pada': '1572189098330-fba0d45de2e7', 'horton-plains': '1695188605657-f741e8cafb1a', jaffna: '1725773682183-f0c885081ce5'
};
const IMG = { forest: '1593417697535-005222b1278c', pidurangala: '1539576776193-2c07122e5fee', waterfall: '1609681980718-340e7f4b11d7', monks: '1624963145721-277432579507', people: '1509763988163-d54b5f5d5b67', riceCurry: '1742281095650-dd3c50c08772', hills: '1586512376088-67bb95ce4310', sunrise: '1588950310265-fd44be13f9fc' };
const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const shortMonths = s => /all year/i.test(s) ? 'All year' : s.split(/\s+to\s+/i).map(x => x.trim().slice(0, 3)).join(' – ');
// "December to May" -> the month numbers it covers, wrapping round the new year
const monthSet = s => {
  if (/all year/i.test(s)) return new Set(MONTH_NAMES.keys());
  const [a, b] = s.split(/\s+to\s+/i).map(x => MONTH_NAMES.indexOf(x.trim())), set = new Set();
  for (let m = a; ; m = (m + 1) % 12) { set.add(m); if (m === b) break; }
  return set;
};
const SOURCES = places.reduce((n, p) => n + p.sources.length, 0);
const ARR = '<span aria-hidden="true">→</span>';
const date = d => { const [y, m, dd] = d.split('-').map(Number); return `${dd} ${MONTH_NAMES[m - 1].slice(0, 3)} ${y}`; };

// one dated fact; the script turns the date amber after six months and red after twelve
const fact = id => {
  const f = FACT[id]; if (!f) return '';
  return `<div class="fact" data-checked="${f.checked}"><span class="lbl">${esc(f.label)}</span><b>${esc(f.value)}</b>${f.note ? `<p>${esc(f.note)}</p>` : ''}<small><span class="kind">${f.kind === 'official' ? 'Official source' : 'Travel guide'}</span><span class="age">Checked ${date(f.checked)}</span><a href="${esc(f.url)}" rel="noopener">${esc(f.source)}</a></small></div>`;
};

const NAV = [['Places', 'index.html#places', 'places'], ['Routes', 'routes.html', 'routes'], ['Plan', 'plan.html', 'plan'], ['Culture', 'culture.html', 'culture'], ['Why trust us', 'about.html', 'about']];
const logo = b => `<a class="logo" href="${b}./" aria-label="WanderLanka home"><img src="${b}assets/wl-mark.svg" alt="" width="101" height="40"><b>WanderLanka</b></a>`;

const head = ({ b = '', title, desc, img }) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:image" content="${img}">
<meta name="theme-color" content="#0a110e">
<link rel="icon" href="${b}assets/icon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preconnect" href="https://images.unsplash.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@600;700;800&family=Inter:wght@400;500;600&family=Yaldevi:wght@400;500;600&display=swap">
<link rel="stylesheet" href="${b}assets/wl.css">
<script>(function(d){d.classList.add('js');try{var t=sessionStorage.getItem('wl-to');sessionStorage.removeItem('wl-to');if(t!==null&&!matchMedia('(prefers-reduced-motion: reduce)').matches){d.setAttribute('data-to',t);d.classList.add('arrive');setTimeout(function(){d.classList.add('arrived')},2500)}}catch(e){}})(document.documentElement);</script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>`;

const header = ({ b = '', here = '' }) => `<header class="top"><div class="wrap">
  ${logo(b)}
  <nav aria-label="Main">${NAV.map(([t, h, k]) => `<a href="${here === 'home' && k === 'places' ? '#places' : b + h}"${k === here ? ' aria-current="page"' : ''}>${t}</a>`).join('')}</nav>
  <a class="pill" href="${b}plan.html">Plan my trip</a>
</div><i class="progress" aria-hidden="true"></i></header>`;

const footer = ({ b = '' }) => `<footer class="foot"><div class="wrap">
  <div class="row">
    <div>${logo(b)}<p class="tag">Experience the wonder of Asia.</p></div>
    <div><h4>Explore</h4><ul><li><a href="${b}index.html#places">Twelve places</a></li><li><a href="${b}routes.html">Routes</a></li><li><a href="${b}culture.html">Culture and food</a></li></ul></div>
    <div><h4>Plan</h4><ul><li><a href="${b}plan.html#when">When to go</a></li><li><a href="${b}plan.html#visa">Visa</a></li><li><a href="${b}plan.html#manners">Temple manners</a></li></ul></div>
    <div><h4>Trust</h4><ul><li><a href="${b}about.html">How we check</a></li><li><a href="${b}about.html#photos">Photo credits</a></li></ul></div>
  </div>
  <p class="base"><span>An independent guide to Sri Lanka. Not a booking site.</span><span>Photographs: Unsplash and Wikimedia Commons.</span></p>
</div></footer>
<script src="${b}assets/wl.js"></script>
</body>
</html>
`;

// a page-top hero: photo, giant translucent word, local script, silver title, and optional labels underneath
const hero = ({ img, giant, si, title, line, meta = [], back, cls = '' }) => {
  const longest = Math.max(6, ...title.split(/\s+/).map(w => w.length));
  return `<section class="phero ${cls}" aria-labelledby="h1">
  <img class="ph" src="${img}" alt="" fetchpriority="high">
  <p class="pgiant" aria-hidden="true" style="--n:${giant.length};--nw:${Math.max(...giant.split(/\s+/).map(w => w.length))}">${esc(giant)}</p>
  ${back ? `<div class="wrap bk"><a class="back" href="${back[1]}"><span aria-hidden="true">←</span> ${esc(back[0])}</a></div>` : ''}
  <div class="wrap phero-in">
    ${si ? `<p class="psi" lang="si">${si}</p>` : ''}
    <h1 id="h1" class="silver" style="--w:${longest}">${esc(title)}</h1>
    ${line ? `<p class="line">${esc(line)}</p>` : ''}
    ${meta.length ? `<dl class="meta">${meta.map(([k, v]) => `<div><dt class="lbl">${esc(k)}</dt><dd>${v}</dd></div>`).join('')}</dl>` : ''}
  </div>
</section>`;
};

const ticker = words => `<div class="ticker" aria-hidden="true"><p>${[0, 1, 2].map(() => words.map(w => `<span${/[\u0D80-\u0DFF]/.test(w) ? ' lang="si"' : /[\u0B80-\u0BFF]/.test(w) ? ' lang="ta"' : ''}>${esc(w)}</span><i>✦</i>`).join('')).join('')}</p></div>`;
// a Commons photograph from content/photos.json, framed, with its credit on the image
const pic = (k, w = 1200) => commons(PHOTOS[k].file, w);
const fig = (k, cls = '', w = 1200) => { const p = PHOTOS[k]; return `<figure class="pic ${cls}"><img class="ph" src="${pic(k, w)}" alt="${esc(p.caption)}" loading="lazy"><figcaption><b>${esc(p.caption)}</b><span>Photo: <a href="${commonsPage(p.file)}" rel="noopener">${esc(p.author)}</a>, ${esc(p.license)}</span></figcaption></figure>`; };
const write = (rel, html) => { const f = path.join(OUT, rel); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, html); };

module.exports = { fs, path, places, I, HOURS, GALLERY, OUT, FACTS, FACT, esc, byId, ORDER, short, U, commons, commonsPage, PH, IMG, MONTH_NAMES, shortMonths, monthSet, SOURCES, ARR, date, fact, head, header, footer, hero, ticker, write, PHOTOS, pic, fig };
