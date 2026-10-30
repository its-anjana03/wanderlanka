/* WanderLanka motion: pages hand over with a rising curtain, the hero opens as you scroll, colour bands
   open out as they arrive, headings rise word by word, photographs open from a smaller frame, names slide
   sideways, route lines fill, and numbers count up. No libraries. */
(() => {
  const $ = (s, c = document) => c.querySelector(s), $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root = document.documentElement, top = $('.top'), bar = $('.progress');
  const hook = $('.hook') || $('.phero'), pinned = !!$('.hook');
  const clamp = x => Math.min(1, Math.max(0, x)), ease = x => x * x * (3 - 2 * x);

  /* ---------- page transitions ---------- */
  // arriving: the curtain from the last page is still up (set in <head>); lift it once this page is ready
  if (root.classList.contains('arrive')) {
    requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add('arrived')));
    setTimeout(() => root.classList.remove('arrive', 'arrived'), 1400);
  }
  // leaving: drop a curtain with the name of where you are going, then go
  const curtain = document.createElement('div');
  curtain.className = 'curtain'; curtain.setAttribute('aria-hidden', 'true'); curtain.innerHTML = '<b></b><i></i>';
  document.body.append(curtain);
  const page = u => u.pathname.replace(/index\.html$/, '');
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href]');
    if (!a || reduce || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target || a.hasAttribute('download')) return;
    const u = new URL(a.href, location.href);
    if (u.origin !== location.origin || page(u) === page(location) || /\.(mp4|jpg|png|svg|json)$/.test(u.pathname)) return;
    e.preventDefault();
    const label = ((a.querySelector('h3') || a.querySelector('b') || a).textContent || '').replace(/[←→]/g, '').replace(/^\s*Go to /, '').replace(/\s+/g, ' ').trim().slice(0, 30);
    try { sessionStorage.setItem('wl-to', label); } catch (err) { /* private mode: the curtain still plays here */ }
    $('b', curtain).textContent = label;
    curtain.classList.add('on');
    setTimeout(() => { location.href = u.href; }, 540);
  });
  addEventListener('pageshow', e => { if (e.persisted) curtain.classList.remove('on'); });
  // fetch the next page while the pointer is on its link, so the curtain lifts quickly
  const pre = new Set();
  document.addEventListener('pointerover', e => {
    const a = e.target.closest && e.target.closest('a[href]'); if (!a) return;
    const u = new URL(a.href, location.href); u.hash = '';
    if (u.origin !== location.origin || pre.has(u.href) || page(u) === page(location)) return;
    pre.add(u.href); const l = document.createElement('link'); l.rel = 'prefetch'; l.href = u.href; document.head.append(l);
  });

  /* ---------- headings: split into words that rise from behind their own baseline ---------- */
  $$('[data-split]').forEach(h => {
    h.classList.add('split'); h.setAttribute('aria-label', h.textContent.replace(/\s+/g, ' ').trim());
    let i = 0;
    const walk = n => [...n.childNodes].forEach(c => {
      if (c.nodeType === 3) { const f = document.createDocumentFragment(); c.textContent.split(/(\s+)/).forEach(w => { if (!w) return; if (!w.trim()) { f.append(w); return; } const o = document.createElement('span'), s = document.createElement('span'); o.className = 'wd'; o.setAttribute('aria-hidden', 'true'); s.textContent = w; s.style.setProperty('--i', i++); o.append(s); f.append(o); }); c.replaceWith(f); }
      else if (c.nodeType === 1) walk(c);
    });
    walk(h);
  });

  /* hero video: still for people who prefer less motion, and paused while it is off-screen */
  const vid = $('video.feature-bg');
  if (vid) {
    if (reduce) { vid.removeAttribute('autoplay'); vid.pause(); }
    else new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) vid.play().catch(() => {}); else vid.pause(); })).observe(vid);
  }

  /* dated facts: amber after six months, red after twelve, so readers can judge them */
  $$('.fact[data-checked]').forEach(el => {
    const mo = Math.floor((Date.now() - new Date(el.dataset.checked + 'T00:00:00')) / 2629746000), age = $('.age', el);
    if (mo >= 12) { el.classList.add('old'); age.textContent += ' · over a year ago, may have changed'; }
    else if (mo >= 6) { el.classList.add('aging'); age.textContent += ' · ' + mo + ' months ago'; }
  });

  /* ---------- reveals ---------- */
  $$('[data-stagger]').forEach(g => [...g.children].forEach((c, i) => { c.classList.add('rv'); c.style.setProperty('--d', (i % 6) * 0.09 + 's'); }));
  const count = el => {
    const end = +el.dataset.count, suf = el.dataset.suffix || '', t0 = performance.now(), dur = 1400;
    const step = t => { const k = Math.min(1, (t - t0) / dur), v = Math.round(end * (1 - Math.pow(1 - k, 3))); el.textContent = v.toLocaleString('en') + suf; if (k < 1) requestAnimationFrame(step); };
    if (reduce) el.textContent = end.toLocaleString('en') + suf; else requestAnimationFrame(step);
  };
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target; el.classList.add('in'); io.unobserve(el);
    if (el.dataset.count) count(el);
    // once a photograph has opened, drop its frame clip so hover shadows are not cut off
    setTimeout(() => el.classList.add('done'), 1500 + (parseFloat(el.style.getPropertyValue('--d')) || 0) * 1000);
  }), { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
  $$('.rv, .split, [data-count], .lbl').forEach(el => io.observe(el));

  /* ---------- scroll-linked motion that glides: every value eases toward its target ---------- */
  const items = [];
  const track = (el, prop, calc, { box = el, k = 0.12, px = false } = {}) => items.push({ el, box, prop, calc, k, px, t: 0, c: null, w: '' });
  if (!reduce) {
    if (hook) track(hook, '--p', (r, h) => ease(clamp(-r.top / (pinned ? hook.offsetHeight - h : hook.offsetHeight))), { k: 0.14 });
    $$('.ph').forEach(el => track(el, '--py', (r, h) => (r.top + r.height / 2 - h / 2) / h * -36, { box: el.parentElement, px: true }));
    $$('.band').forEach(el => track(el, '--bi', (r, h) => ease(clamp((h - r.top) / (h * 0.6))), { k: 0.13 }));
    $$('.ticker p').forEach(el => track(el, '--mx', (r, h) => -clamp((h - r.top) / (h + r.height)) * Math.min(el.scrollWidth / 3, innerWidth * 0.55), { box: el.parentElement, px: true, k: 0.09 }));
    $$('.days').forEach(el => track(el, '--tp', (r, h) => clamp((h * 0.62 - r.top) / r.height), { k: 0.1 }));
  }

  /* 24 hours on the island: on wide screens the section pins and the day travels sideways with the scroll;
     on phones it is a normal swipeable row. The thin bar shows how far through the day you are. */
  const day = $('.day'), dtrack = $('.day-track'), dbar = $('.day-bar i');
  let dDist = 0;
  const sizeDay = () => {
    if (!day) return;
    const on = !reduce && matchMedia('(min-width: 900px)').matches;
    day.classList.toggle('pinned', on);
    dDist = on ? Math.max(0, dtrack.scrollWidth - innerWidth) : 0;
    day.style.height = on ? innerHeight + dDist + 'px' : '';
  };
  sizeDay();
  if (day && !reduce) {
    const prog = r => dDist ? clamp(-r.top / dDist) : clamp(dtrack.scrollLeft / Math.max(1, dtrack.scrollWidth - dtrack.clientWidth));
    track(dtrack, '--dx', r => -prog(r) * dDist, { box: day, px: true, k: 0.12 });
    track(dbar, '--dp', r => prog(r), { box: day, k: 0.15 });
    dtrack.addEventListener('scroll', () => kick(), { passive: true });
  }
  let running = false;
  const targets = () => {
    const y = scrollY, h = innerHeight, max = root.scrollHeight - h;
    top.classList.toggle('scrolled', y > 40);
    if (bar) bar.style.setProperty('--sp', max > 0 ? y / max : 0);
    items.forEach(it => { const r = it.box.getBoundingClientRect(); it.vis = r.bottom > -200 && r.top < h + 200; it.t = it.calc(r, h); if (it.c === null) it.c = it.t; });
  };
  const loop = () => {
    let moving = false;
    items.forEach(it => {
      it.c += (it.t - it.c) * it.k;
      if (Math.abs(it.t - it.c) > (it.px ? 0.05 : 0.0004)) moving = true; else it.c = it.t;
      if (!it.vis) return;
      const v = it.px ? it.c.toFixed(2) + 'px' : it.c.toFixed(4);
      if (v !== it.w) { it.el.style.setProperty(it.prop, v); it.w = v; if (it.prop === '--bi') it.el.classList.toggle('open', it.c >= 0.999); }
    });
    if (moving) requestAnimationFrame(loop); else running = false;
  };
  const kick = () => { targets(); if (!running && items.length) { running = true; requestAnimationFrame(loop); } };
  addEventListener('scroll', kick, { passive: true });
  addEventListener('resize', () => { sizeDay(); kick(); }); kick();
})();
