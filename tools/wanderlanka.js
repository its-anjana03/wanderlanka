// WanderLanka: experience the wonder of Asia. Builds the landing page into docs/ from content/.
// Run:  node tools/wanderlanka.js   then open http://localhost:4391/docs/
// Optional hero video: put an MP4 at docs/assets/hero.mp4 and it plays behind the hero card automatically.
const C = require('./wl-common');
const { fs, path, I, OUT, FACTS, esc, byId, ORDER, short, U, PH, IMG, shortMonths, SOURCES, ARR } = C;
const HERO_VIDEO = fs.existsSync(path.join(OUT, 'assets/hero.mp4'));

// a day on the island: [time, photo, link, label] keyed on content/hours.js
const DAY = [
  ['02:00', U(PH['sri-pada'], 900, 1200), 'places/sri-pada.html', 'Sri Pada'],
  ['06:00', U(PH['horton-plains'], 900, 1200), 'places/horton-plains.html', 'Horton Plains'],
  ['06:15', U(PH.yala, 900, 1200), 'places/yala.html', 'Yala'],
  ['07:00', U(PH.sigiriya, 900, 1200), 'places/sigiriya.html', 'Sigiriya'],
  ['08:30', C.pic('hoppers', 900), 'culture.html#food', 'Breakfast'],
  ['09:00', C.pic('demodara', 1000), 'places/ella.html', 'Kandy to Ella'],
  ['12:30', U(IMG.riceCurry, 900, 1200), 'culture.html#food', 'Lunch'],
  ['16:30', U(PH.polonnaruwa, 900, 1200), 'places/polonnaruwa.html', 'Polonnaruwa'],
  ['17:00', U(PH.jaffna, 900, 1200), 'places/jaffna.html', 'Jaffna'],
  ['17:45', U(PH['galle-fort'], 900, 1200), 'places/galle-fort.html', 'Galle Fort'],
  ['18:30', U(PH.kandy, 900, 1200), 'places/kandy.html', 'Kandy'],
  ['19:30', C.pic('kottu', 900), 'culture.html#food', 'Dinner'],
  ['21:00', C.pic('lantern', 900), 'culture.html#festivals', 'Full moon']
].map(([t, img, href, label]) => { const h = C.HOURS.find(x => x.t === t); return { ...h, img, href, label }; });

const EXPERIENCES = [
  { name: 'Adventure', img: IMG.waterfall, line: 'Climb through the night. Watch the sun rise above the clouds.', items: [['Climb', 'sri-pada', 'Overnight to the summit for sunrise'], ['Walk', 'horton-plains', 'World\'s End before the cloud rolls in'], ['Spot', 'yala', 'Leopards at the water holes at dawn']] },
  { name: 'Culture', img: IMG.monks, line: 'Kingdoms carved into rock, still alive with drums and prayer.', items: [['Climb', 'sigiriya', 'A palace on top of a 200-metre rock'], ['Listen', 'kandy', 'Drums at the Temple of the Tooth'], ['Look up', 'dambulla', 'Caves painted from floor to ceiling']] },
  { name: 'People', img: IMG.people, line: 'Strangers share their snacks on the train. They mean it.', items: [['Meet', 'jaffna', 'The Tamil north and its street food'], ['Wander', 'galle-fort', 'Families living inside a Dutch fort'], ['Ride', 'ella', 'The hill train, where strangers share snacks']] },
  { name: 'Hospitality', img: IMG.riceCurry, line: 'Ayubowan: may you live long. Now sit, there is more rice.', items: [['Eat', 'Rice and curry', 'A whole table of small dishes'], ['Wake up to', 'Hoppers', 'Crisp at the edge, soft inside'], ['Drink', 'Ceylon tea', 'Grown up to 2,000 metres']] }
];

const html = `${C.head({ title: 'WanderLanka · Experience the wonder of Asia', desc: 'Adventure, culture, people and hospitality in Sri Lanka: twelve places worth the journey, ready routes, and honest prices with the date they were checked.', img: U(IMG.pidurangala, 1200, 630) })}
${C.header({ here: 'home' })}

<main id="main">
<section class="hook" aria-labelledby="h1">
  <div class="hook-pin">
    <img class="hook-bg" src="${U(IMG.forest, 2200)}" alt="" fetchpriority="high">
    <div class="giant" aria-hidden="true"><b>WANDER</b></div>
    <div class="feature">
      ${HERO_VIDEO ? `<video class="feature-bg" poster="assets/hero.jpg" autoplay muted loop playsinline preload="auto" aria-hidden="true"><source src="assets/hero-sm.mp4" type="video/mp4" media="(max-width: 900px)"><source src="assets/hero.mp4" type="video/mp4"></video>` :`<img class="feature-bg" src="${U(IMG.pidurangala, 2400)}" alt="A traveller looking out at Sigiriya rock from Pidurangala at sunrise">`}
      <div class="mid">
        <nav class="tags" aria-label="Four ways to wander">${EXPERIENCES.map(e => `<a href="#${e.name.toLowerCase()}">${e.name}</a>`).join('')}</nav>
        <h1 id="h1" class="silver">SRI LANKA</h1>
        <p class="line">Rock fortresses, cloud forests and the warmest welcome in Asia.</p>
        <p class="acts"><a class="pill" href="#experiences">Start wandering ${ARR}</a><a class="pill ghost" href="#places">See the twelve places</a></p>
      </div>
    </div>
    <p class="giant-si" lang="si" aria-hidden="true">ලංකා</p>
  </div>
</section>

<section class="sec" id="experiences" aria-labelledby="ex-h">
  <div class="wrap">
    <div class="title"><h2 id="ex-h" class="silver" data-split>Pick your kind of wonder</h2><p class="rv">Leopards at dawn, temple drums at dusk. Here they are a few hours apart.</p></div>
    <div class="cards" data-stagger>${EXPERIENCES.map(e => `<article class="card" id="${e.name.toLowerCase()}"><img class="ph" src="${U(e.img, 1400, 1000)}" alt="" loading="lazy">
      <div class="mid-c"><h3 class="silver">${e.name.toUpperCase()}</h3><p>${esc(e.line)}</p></div>
      <div class="info">${e.items.map(([verb, link, text]) => `<div><span class="lbl">${verb}</span><p>${byId[link] ? `<a class="go" href="places/${link}.html">${esc(short(byId[link]))}</a>` : `<a class="go" href="culture.html#food">${esc(link)}</a>`}<br>${esc(text)}</p></div>`).join('')}</div></article>`).join('')}</div>
  </div>
</section>

<section class="day" id="day" aria-labelledby="day-h">
  <div class="day-pin">
    <div class="wrap day-head"><div><span class="lbl rv">From 2 a.m. to the full moon</span><h2 id="day-h" class="silver" data-split>24 hours on the island</h2></div><p class="rv">Every moment at the hour it is best, from the first climb to the full moon.</p></div>
    <div class="day-track">${DAY.map((m, i) => `<a class="mo" href="${m.href}"><img class="ph" src="${m.img}" alt="" loading="lazy"><span class="t">${m.approx ? '<small>c.</small>' : ''}${m.t}</span><span class="pl-l">${esc(m.label)}</span><h3>${esc(m.title)}</h3><p>${esc(m.text)}</p></a>`).join('')}</div>
    <div class="wrap day-bar" aria-hidden="true"><i></i><span>02:00</span><span>21:00</span></div>
  </div>
</section>

<section class="sec band moss" id="places" aria-labelledby="pl-h" style="padding-top:0">
  ${C.ticker(ORDER.map(short))}
  <div class="wrap">
    <div class="title"><h2 id="pl-h" class="silver" data-split>Twelve places worth the long flight</h2><p class="rv">Each with its story, the hour to arrive and the crowd to dodge.</p></div>
    <div class="places" data-stagger>${ORDER.map((p, i) => `<a class="pl" href="places/${p.id}.html"><img class="ph" src="${U(PH[p.id], 800, 1100)}" alt="${esc(p.name)}" loading="lazy">
      <span class="k"><span>${String(i + 1).padStart(2, '0')}</span><span>${esc(p.region)}</span></span>
      <h3 class="silver">${esc(short(p))}</h3><span class="si" lang="si">${p.si}</span><p>${esc(p.line)}</p><span class="best">Best ${shortMonths(p.months)}</span></a>`).join('')}</div>
  </div>
</section>

<section class="sec" aria-labelledby="st-h">
  <div class="wrap">
    <div class="frame rv"><img class="ph" src="${U(IMG.hills, 2000, 1300)}" alt="" loading="lazy">
      <h2 id="st-h" class="silver" data-split>Come back changed, <em>not exhausted.</em></h2>
      <p class="lead">Most tours race the island in one loop. We show you the hour to arrive, what to skip, and where to slow down.</p>
      <div class="stats"><div><b data-count="8">8</b><span>World Heritage sites</span></div><div><b data-count="430" data-suffix=" km">430 km</b><span>from north to south</span></div><div><b data-count="2">2</b><span>monsoons, so one coast is always dry</span></div><div><b data-count="12">12</b><span>places worth the journey</span></div></div>
    </div>
  </div>
</section>

<section class="sec band mist" id="routes" aria-labelledby="rt-h">
  <div class="wrap">
    <div class="title"><h2 id="rt-h" class="silver" data-split>How long have you got?</h2><p class="rv">A week, ten days or two, planned day by day with real drive times.</p></div>
    <div class="routes" data-stagger>${I.ROUTES.map(r => `<a class="rt" href="routes.html#${r.id}"><b>${parseInt(r.name)}<small>days</small></b><h3>${esc(r.title)}</h3><p>${esc(r.text)}</p><p class="stops">${[...new Set(r.days.flatMap(d => d[3]))].map(id => esc(short(byId[id]))).join(' · ')}</p><span class="go open">See the route</span></a>`).join('')}</div>
  </div>
</section>

<section class="sec band moss" id="trust" aria-labelledby="tr-h">
  <div class="wrap">
    <div class="trust rv">
      <div class="side"><div><span class="lbl">Every price is dated</span><p>Fees and visa rules show the day we checked them.</p></div><div><span class="lbl">Official sources first</span><p>Government and site-authority pages before blogs.</p></div></div>
      <div class="core"><h2 id="tr-h" class="silver">Why trust WanderLanka?</h2><div class="nums"><div><b data-count="${FACTS.length}">${FACTS.length}</b><span>dated facts</span></div><div><b data-count="${SOURCES}">${SOURCES}</b><span>sources cited</span></div><div><b>0</b><span>paid placements</span></div></div><a class="go" href="about.html">How we check</a></div>
      <div class="side r"><div><span class="lbl">Legends are labelled</span><p>History and legend are kept apart.</p></div><div><span class="lbl">Not a booking site</span><p>No commissions. Book on the official sites.</p></div></div>
    </div>
  </div>
</section>

<section class="cta" aria-labelledby="cta-h">
  <img class="ph" src="${U(IMG.sunrise, 2000, 1300)}" alt="" loading="lazy">
  <div class="wrap"><h2 id="cta-h" class="silver" data-split>Start wandering.</h2><p class="rv">Pick a place, follow a route, and come home with stories you will still be telling in ten years.</p><a class="pill rv" href="#places">See the twelve places ${ARR}</a></div>
</section>
</main>

${C.footer({})}`;
fs.writeFileSync(path.join(OUT, 'index.html'), html);
const MARK = fs.readFileSync(path.join(OUT, 'assets/wl-mark.svg'), 'utf8');
const markInner = MARK.slice(MARK.indexOf('>', MARK.indexOf('<svg')) + 1, MARK.lastIndexOf('</svg>')).replace(/<title[\s\S]*?<\/title>|<desc[\s\S]*?<\/desc>/g, '').trim();
fs.writeFileSync(path.join(OUT, 'assets/icon.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#0a110e"/><svg x="3" y="10" width="58" height="44" viewBox="155 405 960 380">${markInner}</svg></svg>`);
fs.writeFileSync(path.join(OUT, '.nojekyll'), '');
console.log('Wrote docs/index.html' + (HERO_VIDEO ? ' (with hero video)' : ''));
require('./wl-pages');
