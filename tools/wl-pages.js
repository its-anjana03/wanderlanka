// WanderLanka inner pages: twelve place pages, routes, plan, culture, about and 404.
// Built automatically by  node tools/wanderlanka.js
const C = require('./wl-common');
const { fig, pic, PHOTOS, ticker, I, HOURS, GALLERY, FACTS, esc, byId, ORDER, short, U, commons, commonsPage, PH, IMG, MONTH_NAMES, shortMonths, monthSet, SOURCES, ARR, fact, head, header, footer, hero, write } = C;

// one line per place that makes a first-time visitor want to keep reading
const HOOK = {
  sigiriya: 'A palace in the sky', kandy: 'One lake, one tooth, a lot of drums', ella: 'Tea, trains and nine arches',
  'sri-pada': 'Climb all night for one sunrise', yala: 'This is leopard country', 'galle-fort': 'A Dutch fort that never stopped living',
  anuradhapura: 'Two thousand years and still at prayer', polonnaruwa: 'A medieval capital by bicycle', dambulla: 'Five caves, painted to the ceiling',
  'horton-plains': 'Walk to the edge of the world', sinharaja: 'The last great rainforest', jaffna: 'The north does it differently'
};
const PLAN_PIC = { money: ['market'], around: ['train', 'tuktuk'], manners: ['ruwanweli'], safety: ['stilt'], wildlife: ['elephants'] };
const PLAN_LINE = {
  visa: 'Five minutes online before you fly. Use the official site only.', money: 'Rupees in your pocket, cards for the big sites.',
  around: 'The slow train is the best seat on the island.', manners: 'A few simple rules, and every temple door is open to you.',
  safety: 'Sri Lanka is famously kind to visitors. Here are the rare exceptions.', wildlife: 'See them wild, and leave them that way.',
  sos: 'Save these before you land, and hope you never dial them.'
};
const FOODPIC = ['hoppers', 'kottu', 'polsambol', 'kiribath', 'tea']; // matches I.FOOD after rice and curry
const RPIC = { r7: 'demodara', r10: 'elephants', r14: 'stilt' };
const routesWith = id => I.ROUTES.filter(r => r.days.some(d => d[3].includes(id)));
const months = (s, label = 'Best months') => { const set = monthSet(s); return `<div class="months rv" role="img" aria-label="${esc(label)}: ${esc(s)}">${MONTH_NAMES.map((m, i) => `<span${set.has(i) ? ' class="on"' : ''}>${m.slice(0, 3)}</span>`).join('')}</div>`; };
const list = items => `<ul class="dots">${items.map(t => `<li>${t}</li>`).join('')}</ul>`;
const thumb = (p, b) => `<a class="stop" href="${b}places/${p.id}.html"><img src="${U(PH[p.id], 120, 120)}" alt="" loading="lazy"><span>${esc(short(p))}</span></a>`;

/* ---------- twelve place pages ---------- */
ORDER.forEach((p, i) => {
  const b = '../', next = ORDER[(i + 1) % ORDER.length], prev = ORDER[(i + ORDER.length - 1) % ORDER.length];
  const hours = HOURS.filter(h => h.place === p.id);
  const gal = [{ ...p.photo, caption: p.name }, ...(GALLERY[p.id] || [])];
  const whyPics = (GALLERY[p.id] || []).length >= 2 ? GALLERY[p.id] : gal;
  const rts = routesWith(p.id);
  const html = `${head({ b, title: `${p.name} · WanderLanka`, desc: p.line, img: U(PH[p.id], 1200, 630) })}
${header({ b, here: 'places' })}
<main id="main">
${hero({ img: U(PH[p.id], 2200), giant: short(p).toUpperCase(), si: p.si, title: p.name, line: p.line, back: ['All twelve places', `${b}index.html#places`],
  meta: [['Region', esc(p.region)], ['Time needed', esc(p.time)], ['Best months', shortMonths(p.months)], ['World Heritage', p.unesco ? `Listed ${p.unesco}` : 'Not listed']] })}

<section class="sec tight" aria-labelledby="why-h" style="padding-top:clamp(60px,8vw,110px)">
  <div class="wrap">
    <div class="head2 row"><div><span class="lbl rv">${String(i + 1).padStart(2, '0')} of 12 · ${esc(p.region)}</span><h2 id="why-h" class="silver" data-split>${esc(HOOK[p.id] || 'Three reasons to go')}</h2></div><p class="rv">Three reasons it belongs on your route.</p></div>
    <ol class="why pics" data-stagger>${p.why.map((w, k) => { const g = whyPics[k % whyPics.length]; return `<li><figure class="wp"><img class="ph" src="${commons(g.file, 900)}" alt="${esc(g.caption)}" loading="lazy"></figure><b class="silver">0${k + 1}</b><p>${esc(w)}</p></li>`; }).join('')}</ol>
  </div>
</section>

<section class="sec tight band mist" aria-labelledby="gks-h">
  <div class="wrap">
    <h2 id="gks-h" class="vh">How to see it</h2>
    <div class="trio" data-stagger>
      <div class="go-c"><span class="lbl">Go</span><p>${esc(p.go)}</p></div>
      <div><span class="lbl">Know</span><p>${esc(p.know)}</p></div>
      <div class="skip-c"><span class="lbl">Skip</span><p>${esc(p.skip)}</p></div>
    </div>
    <div class="when rv"><span class="lbl">Best months · ${esc(p.months)}</span>${months(p.months)}</div>
  </div>
</section>

<figure class="brk" aria-label="${esc(p.photo.caption || p.name)}">
  <img class="ph" src="${commons(p.photo.file, 2000)}" alt="${esc(p.name)}" loading="lazy">
  <figcaption class="wrap"><q class="silver">${esc(p.go.split('. ')[0].replace(/\.$/, ''))}.</q><span>Photo: <a href="${commonsPage(p.photo.file)}" rel="noopener">${esc(p.photo.author)}</a>, ${esc(p.photo.license)}</span></figcaption>
</figure>

<section class="sec tight" aria-labelledby="story-h">
  <div class="wrap two">
    <div class="main">
      <h2 id="story-h" class="silver h2" data-split>The story so far</h2>
      <div class="prose rv">${p.history.map(t => `<p>${esc(t)}</p>`).join('')}</div>
      ${p.legend ? `<aside class="legend rv"><span class="lbl">Legend, not history</span><p>${esc(p.legend)}</p></aside>` : ''}
      <h2 class="silver h2 gap" data-split>Getting there</h2>
      <div class="prose rv"><p>${esc(p.getting)}</p></div>
      ${p.etiquette && p.etiquette.length ? `<h2 class="silver h2 gap" data-split>Good manners here</h2><div class="rv">${list(p.etiquette.map(esc))}</div>` : ''}
    </div>
    <aside class="side-c rv" aria-label="At a glance">
      <h3>At a glance</h3>
      ${p.facts.map(fact).join('')}
      ${hours.length ? `<div class="hours"><span class="lbl">Best hour</span>${hours.map(h => `<p><b>${h.approx ? '<abbr title="about">c.</abbr> ' : ''}${h.t}</b>${esc(h.title)}</p>`).join('')}</div>` : ''}
      ${rts.length ? `<div><span class="lbl">On these routes</span><p class="chips">${rts.map(r => `<a class="go" href="${b}routes.html#${r.id}">${esc(r.name)}</a>`).join('')}</p></div>` : ''}
      <div><span class="lbl">Sources</span><ul class="src">${p.sources.map(s => `<li><a href="${esc(s.url)}" rel="noopener">${esc(s.label)}</a></li>`).join('')}</ul></div>
    </aside>
  </div>
</section>

<section class="sec tight gallery band moss" aria-labelledby="gal-h" style="padding-top:0">
  ${ticker([short(p).toUpperCase(), p.si])}
  <div class="wrap"><div class="head2 row"><h2 id="gal-h" class="silver" data-split>Look closer</h2><p class="rv">Swipe or scroll sideways. Photographs from Wikimedia Commons.</p></div></div>
  <div class="gal" data-stagger tabindex="0" aria-label="Photographs of ${esc(p.name)}">${gal.map(g => `<figure><img src="${commons(g.file, 1100)}" alt="${esc(g.caption)}" loading="lazy"><figcaption><b>${esc(g.caption)}</b><span>Photo: <a href="${commonsPage(g.file)}" rel="noopener">${esc(g.author)}</a>, ${esc(g.license)}</span></figcaption></figure>`).join('')}</div>
</section>

<nav class="sec tight" aria-label="More places">
  <div class="wrap pn" data-stagger>
    <a class="nx prev" href="${prev.id}.html"><img class="ph" src="${U(PH[prev.id], 1000, 700)}" alt="" loading="lazy"><span class="lbl">Previous</span><b class="silver">${esc(short(prev))}</b></a>
    <a class="nx" href="${next.id}.html"><img class="ph" src="${U(PH[next.id], 1400, 800)}" alt="" loading="lazy"><span class="lbl">Next place</span><b class="silver">${esc(short(next))}</b><span class="go">Go to ${esc(short(next))}</span></a>
  </div>
</nav>
</main>
${footer({ b })}`;
  write(`places/${p.id}.html`, html);
});

/* ---------- routes ---------- */
{
  const b = '';
  const html = `${head({ title: 'Routes · WanderLanka', desc: 'Three ready routes around Sri Lanka, 7, 10 and 14 days, day by day with honest drive times.', img: U(IMG.hills, 1200, 630) })}
${header({ here: 'routes' })}
<main id="main">
${hero({ img: U(IMG.hills, 2200), giant: 'ROUTES', title: 'How long have you got?', line: 'A week, ten days or two. Pick one and we have planned every day of it, with real drive times.', cls: 'short' })}
<nav class="jump wrap" aria-label="Routes">${I.ROUTES.map(r => `<a class="pill ghost" href="#${r.id}">${esc(r.name)} · ${esc(r.title)}</a>`).join('')}</nav>
${ticker(['North to south', '430 km', 'Rock', 'Relic', 'Railway', 'Rampart'])}
${I.ROUTES.map(r => {
  const stops = [...new Set(r.days.flatMap(d => d[3]))].map(id => byId[id]);
  return `<section class="sec tight route${r.id === 'r10' ? ' band mist' : ''}" id="${r.id}" aria-labelledby="${r.id}-h">
  <div class="wrap two">
    <div class="r-side rv">
      ${fig(RPIC[r.id], 'r-pic', 1100)}
      <b class="big silver">${parseInt(r.name)}<small>days</small></b>
      <h2 id="${r.id}-h">${esc(r.title)}</h2>
      <p>${esc(r.text)}</p>
      <span class="lbl">${stops.length} places</span>
      <div class="stops">${stops.map(p => thumb(p, b)).join('')}</div>
    </div>
    <ol class="days" data-stagger>${r.days.map(d => `<li${d[3].length ? ' class="has-img"' : ''}><div><span class="dl">${esc(d[0])}</span><h3>${esc(d[1])}</h3><p>${esc(d[2])}</p>${d[3].length ? `<p class="chips">${d[3].map(id => `<a class="go" href="places/${id}.html">${esc(short(byId[id]))}</a>`).join('')}</p>` : ''}</div>${d[3].length ? `<a class="dimg" href="places/${d[3][0]}.html" tabindex="-1" aria-hidden="true"><img class="ph" src="${U(PH[d[3][0]], 520, 380)}" alt="" loading="lazy"></a>` : ''}</li>`).join('')}</ol>
  </div>
</section>`;
}).join('\n')}
<section class="sec tight"><div class="wrap"><p class="note rv">${esc(I.ROUTES_NOTE)} Before you lock in dates, check <a href="plan.html#when">when to go</a> and book trains on the <a href="https://seatreservation.railway.gov.lk/" rel="noopener">official reservation site</a>.</p></div></section>
</main>
${footer({ b })}`;
  write('routes.html', html);
}

/* ---------- plan ---------- */
{
  const W = { g: ['Good', 'g'], m: ['Mixed', 'm'], w: ['Wet', 'w'] };
  const NUM = (k) => String(k + 2).padStart(2, '0');
  const html = `${head({ title: 'Plan your trip · WanderLanka', desc: 'When to go, visa, money, getting around, temple manners, safety and emergency numbers for Sri Lanka, with dated facts.', img: U(IMG.sunrise, 1200, 630) })}
${header({ here: 'plan' })}
<main id="main">
${hero({ img: U(IMG.sunrise, 2200), giant: 'PLAN', title: 'Before you fly', line: 'Ten minutes of reading that saves you a day of hassle. Every price shows the day we checked it.', cls: 'short' })}
<nav class="jump wrap" aria-label="On this page"><a class="pill ghost" href="#when">When to go</a>${I.PLAN.map(s => `<a class="pill ghost" href="#${s.id}">${esc(s.title)}</a>`).join('')}</nav>

<section class="sec tight psec band mist" id="when" aria-labelledby="when-h">
  <div class="wrap two">
    <div class="p-side"><span class="lbl">01</span><h2 id="when-h" class="silver h2" data-split>When to go</h2><p class="rv">Two monsoons hit opposite coasts at different times, so some part of the island is always dry. There is no wrong month, only a wrong coast.</p>
      <div class="rv">${fig('tea', 'p-pic', 1000)}</div>
      <p class="key rv"><span><i class="wx g"></i>Good</span><span><i class="wx m"></i>Mixed</span><span><i class="wx w"></i>Wet</span></p></div>
    <div class="tbl rv" tabindex="0"><table class="wxt">
      <thead><tr><th scope="col">Month</th>${I.ZONES.map(z => `<th scope="col">${esc(z)}</th>`).join('')}<th scope="col" class="nt">Worth knowing</th></tr></thead>
      <tbody>${I.MONTHS.map(m => `<tr><th scope="row">${m[0]}</th>${m.slice(1, 5).map(c => `<td><i class="wx ${c}" aria-hidden="true"></i><span class="vh">${W[c][0]}</span></td>`).join('')}<td class="nt">${esc(m[5])}</td></tr>`).join('')}</tbody>
    </table></div>
  </div>
</section>

${I.PLAN.map((s, k) => `<section class="sec tight psec${k % 2 ? ' band moss' : ''}" id="${s.id}" aria-labelledby="${s.id}-h">
  <div class="wrap two">
    <div class="p-side"><span class="lbl">${NUM(k)}</span><h2 id="${s.id}-h" class="silver h2" data-split>${esc(s.title)}</h2>${PLAN_LINE[s.id] ? `<p class="rv">${esc(PLAN_LINE[s.id])}</p>` : ''}${PLAN_PIC[s.id] ? `<div class="rv">${PLAN_PIC[s.id].map(x => fig(x, 'p-pic', 1000)).join('')}</div>` : ''}</div>
    <div class="p-main">${s.facts.length ? `<div class="facts rv">${s.facts.map(fact).join('')}</div>` : ''}<div class="prose rv">${s.html.replace(/<ul>/g, '<ul class="dots">')}</div></div>
  </div>
</section>`).join('\n')}

<section class="sec tight"><div class="wrap"><div class="frame small rv"><img class="ph" src="${U(IMG.pidurangala, 2000, 1000)}" alt="" loading="lazy"><h2 class="silver">Ready for the route?</h2><p class="lead">Pick 7, 10 or 14 days and follow it day by day.</p><p><a class="pill" href="routes.html">See the routes ${ARR}</a></p></div></div></section>
</main>
${footer({})}`;
  write('plan.html', html);
}

/* ---------- culture ---------- */
{
  // the moonstone as five half rings, outside to centre
  const R = [200, 166, 132, 98, 64];
  const moon = `<svg class="moon" viewBox="0 0 440 230" role="img" aria-label="The five bands of a moonstone, from the outer flames to the lotus at the centre">${R.map((r, k) => `<path d="M${220 - r} 220 A${r} ${r} 0 0 1 ${220 + r} 220" fill="none" stroke="currentColor" stroke-opacity="${0.35 + k * 0.13}" stroke-width="${k === 4 ? 2 : 1.2}"/><text x="220" y="${226 - r + 22}" text-anchor="middle">${k + 1}</text>`).join('')}<line x1="10" y1="220" x2="430" y2="220" stroke="currentColor" stroke-opacity=".5"/></svg>`;
  const html = `${head({ title: 'Culture and food · WanderLanka', desc: 'Rice and curry, hoppers and tea; festivals by the moon; Kandyan drums, healing masks and the moonstone at the temple door.', img: U(IMG.monks, 1200, 630) })}
${header({ here: 'culture' })}
<main id="main">
${hero({ img: U(IMG.monks, 2200), giant: 'CULTURE', si: 'සංස්කෘතිය', title: 'Eat, listen, look closer', line: 'Hoppers at breakfast, drums at dusk, and the stories carved into masks and temple steps.', cls: 'short' })}
<nav class="jump wrap" aria-label="On this page"><a class="pill ghost" href="#food">Food</a><a class="pill ghost" href="#festivals">Festivals</a><a class="pill ghost" href="#drums">Drums and dance</a><a class="pill ghost" href="#masks">Healing masks</a><a class="pill ghost" href="#moonstone">The moonstone</a></nav>

<section class="sec tight" id="food" aria-labelledby="food-h">
  <div class="wrap">
    <div class="head2 row"><h2 id="food-h" class="silver" data-split>Come hungry</h2><p class="rv">Six things to eat and drink before you leave. Say yes when someone offers seconds; they will offer anyway.</p></div>
    <div class="food" data-stagger>
      <article class="f-big"><img class="ph" src="${U(IMG.riceCurry, 1400, 1000)}" alt="Rice and curry served as many small dishes" loading="lazy"><div><span class="lbl">${esc(I.FOOD[0][0])}</span><p>${esc(I.FOOD[0][1])}</p></div></article>
      ${I.FOOD.slice(1).map(([n, t], k) => { const key = FOODPIC[k], ph = PHOTOS[key]; return `<article class="f-pic"><figure><img class="ph" src="${pic(key, 900)}" alt="${esc(ph.caption)}" loading="lazy"><figcaption>Photo: <a href="${commonsPage(ph.file)}" rel="noopener">${esc(ph.author)}</a>, ${esc(ph.license)}</figcaption></figure><span class="lbl">${esc(n)}</span><p>${esc(t)}</p></article>`; }).join('')}
    </div>
  </div>
</section>

${ticker(['Ayubowan', 'ආයුබෝවන්', 'Vanakkam', 'வணக்கம்', 'Welcome'])}
<section class="sec tight band moss" id="festivals" aria-labelledby="fest-h">
  <div class="wrap two">
    <div class="p-side"><h2 id="fest-h" class="silver h2" data-split>Festivals by the moon</h2><p class="rv">Fire, elephants and a million paper lanterns. ${esc(I.FEST_NOTE)}</p><div class="rv duo">${fig('perahera', 'p-pic', 1000)}${fig('vesak', 'p-pic', 1000)}</div></div>
    <ol class="days fest" data-stagger>${I.FEST.map(([m, n, t]) => `<li><span class="dl">${esc(m)}</span><h3>${esc(n)}</h3><p>${esc(t)}</p></li>`).join('')}</ol>
  </div>
</section>

<section class="sec tight band mist" id="drums" aria-labelledby="drums-h">
  <div class="wrap">
    <div class="head2 row"><h2 id="drums-h" class="silver" data-split>Three ways to drum</h2><p class="rv">You will hear the drums before you see the dancers. Sri Lanka has three classical traditions, each with its own drum.</p></div>
    <div class="drums">
      <div class="rv">${fig('kandyan', 'tall', 1200)}</div>
      <div class="trio stack" data-stagger>${I.DRUMS.map(([n, s, t]) => `<div><span class="lbl">${esc(n)}</span><p class="si big-si" lang="si">${s}</p><p>${esc(t)}</p></div>`).join('')}</div>
    </div>
  </div>
</section>

<section class="sec tight" id="masks" aria-labelledby="masks-h">
  <div class="wrap">
    <div class="head2 row"><h2 id="masks-h" class="silver" data-split>Eighteen faces of illness</h2><p class="rv">${esc(I.MASKS_INTRO)}</p></div>
    <div class="mask-pics" data-stagger>${fig('sanni', 'tall', 1100)}${fig('maskwall', '', 1400)}${fig('raksha', '', 1100)}</div>
    <ul class="masks" data-stagger>${I.MASKS.map(([, n, s, ill, face]) => `<li><b>${esc(n)}</b><span class="si" lang="si">${s}</span><p>${esc(ill)}</p><small>${esc(face)}</small></li>`).join('')}</ul>
    <p class="note rv">${esc(I.MASKS_NOTE.replace('The faces are original drawings made for this site, not copies of real carvings. ', ''))}</p>
  </div>
</section>

<section class="sec tight band moss" id="moonstone" aria-labelledby="moon-h">
  <div class="wrap two">
    <div class="p-side"><h2 id="moon-h" class="silver h2" data-split>The moonstone</h2><p class="rv">${esc(I.MOONSTONE_INTRO)} In the most common reading, stepping over it means crossing the whole cycle of life.</p><div class="rv">${fig('moonstone', 'p-pic', 1200)}</div><div class="rv">${moon}</div></div>
    <div><ol class="rings" data-stagger>${I.RINGS.map(([n, t]) => `<li><b>${esc(n)}</b><p>${esc(t)}</p></li>`).join('')}</ol><p class="note rv">${esc(I.MOONSTONE_NOTE)}</p></div>
  </div>
</section>
</main>
${footer({})}`;
  write('culture.html', html);
}

/* ---------- about ---------- */
{
  const credits = C.places.flatMap(p => [{ ...p.photo, caption: p.name, place: p }, ...(GALLERY[p.id] || []).map(g => ({ ...g, place: p }))]);
  const html = `${head({ title: 'Why trust us · WanderLanka', desc: 'How WanderLanka checks its facts, dates every price, labels legend, and credits every photograph.', img: U(IMG.forest, 1200, 630) })}
${header({ here: 'about' })}
<main id="main">
${hero({ img: U(IMG.forest, 2200), giant: 'TRUST', title: 'Why trust WanderLanka?', line: 'An independent guide. No commissions, no paid placements, every price dated.', cls: 'short',
  meta: [['Dated facts', String(FACTS.length)], ['Sources cited', String(SOURCES)], ['Paid placements', '0'], ['Places', '12']] })}

<section class="sec tight" aria-labelledby="rules-h">
  <div class="wrap two">
    <div class="p-side"><h2 id="rules-h" class="silver h2" data-split>How we check</h2><p class="rv">Five rules for every page.</p></div>
    <ol class="rings" data-stagger>${I.RULES.map(([n, t]) => `<li><b>${esc(n)}</b><p>${esc(t)}</p></li>`).join('')}</ol>
  </div>
</section>

<section class="sec tight band moss" id="facts" aria-labelledby="facts-h">
  <div class="wrap">
    <div class="head2 row"><h2 id="facts-h" class="silver" data-split>Every fact, with its date</h2><p class="rv">Dates turn amber after six months and red after twelve, so you can judge them yourself.</p></div>
    <div class="facts all" data-stagger>${FACTS.map(f => fact(f.id)).join('')}</div>
  </div>
</section>

<section class="sec tight band mist" id="photos" aria-labelledby="ph-h">
  <div class="wrap">
    <div class="head2 row"><h2 id="ph-h" class="silver" data-split>Photo credits</h2><p class="rv">Large photographs come from Unsplash under the Unsplash License. The opening film on the home page was made with AI video generation (Higgsfield), so it is an illustration, not footage. Place galleries come from Wikimedia Commons:</p></div>
    <ul class="credits rv">${credits.map(g => `<li><a href="${commonsPage(g.file)}" rel="noopener">${esc(g.caption)}</a><span>${esc(short(g.place))} · ${esc(g.author)} · ${esc(g.license)}</span></li>`).join('')}${Object.values(PHOTOS).map(g => `<li><a href="${commonsPage(g.file)}" rel="noopener">${esc(g.caption)}</a><span>${esc(g.author)} · ${esc(g.license)}</span></li>`).join('')}</ul>
  </div>
</section>
</main>
${footer({})}`;
  write('about.html', html);
}

/* ---------- 404 ---------- */
write('404.html', `${head({ title: 'Lost · WanderLanka', desc: 'This page does not exist.', img: U(IMG.forest, 1200, 630) })}
${header({})}
<main id="main">${hero({ img: U(IMG.forest, 2200), giant: 'LOST', title: 'Off the map', line: 'This page does not exist. Every good wander has one wrong turn.' })}
<section class="sec tight"><div class="wrap"><p class="jump" style="padding:0"><a class="pill" href="./">Back to the start ${ARR}</a><a class="pill ghost" href="index.html#places">See the twelve places</a></p></div></section></main>
${footer({})}`);

console.log('Wrote 12 place pages, routes.html, plan.html, culture.html, about.html, 404.html');
