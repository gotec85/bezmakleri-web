'use strict';

const services = [
  { icon: '🎬', name: 'Videa interiéru a exteriéru', desc: 'Profesionální video prezentace, která ukáže vaši nemovitost v tom nejlepším světle.' },
  { icon: '📷', name: 'Fotografické služby', desc: 'Špičkové snímky pořízené nejlepšími technologiemi s dokonalým barevným rozsahem.' },
  { icon: '📱', name: 'Kampaně na sociálních sítích', desc: 'Cílená reklama na Facebooku, Instagramu a YouTube – oslovíme správné kupce.' },
  { icon: '🌐', name: 'Vlastní web nemovitosti', desc: 'Unikátní landing page s kompletní prezentací vaší nemovitosti.' },
  { icon: '📐', name: 'Vizualizace 2D a 3D půdorysů', desc: 'Přehledné půdorysy, které zájemcům usnadní orientaci a rozhodování.' },
  { icon: '🛋️', name: 'Virtuální homestaging', desc: 'Digitálně zariadíme prázdné místnosti – bez fyzického stěhování nábytku.' },
  { icon: '🔮', name: 'Matterport prohlídky', desc: 'Interaktivní 3D prohlídka z pohodlí domova zájemce.' },
  { icon: '⚖️', name: 'Právní a smluvní servis', desc: 'Kompletní právní pokrytí celého procesu prodeje.' },
  { icon: '💎', name: 'Stanovení ceny nemovitosti', desc: 'Odborné ocenění, které maximalizuje výtěžek z prodeje.' },
];

const references = [
  { name: 'Petr Juráň', city: 'Brno', rating: 5, text: 'Spolupráce mi ušetřila hodiny práce. Nemusel jsem nijak řešit focení, video ani ladění prezentace. Radši dám někomu 70 000 Kč za veškerý servis, než po prodeji proplácet statisícové provize realitce.' },
  { name: 'Luboš Hladílek', city: 'Mikulov', rating: 5, text: 'Hledali jsme partnera, který pochopí náš projekt a umí ho vizuálně odprezentovat. Dostali jsme nejen krásné vizualizace a videa, ale i nápady, jak celkově zlepšit promo. Spolupráce byla profesionální, rychlá a přínosná.' },
  { name: 'Michaela Králová', city: 'Břeclav', rating: 5, text: 'Nevěděla jsem, jak svůj byt nejlépe nafotit a odprezentovat. Díky pomoci Bezmakléřů jsem měla během pár dní stylové fotky, krátké video i 3D prohlídku. O byt byl zájem hned od začátku a nakonec se prodal za cenu, kterou jsem si přála.' },
  { name: 'Patrik Šustr', city: 'Hodonín', rating: 5, text: 'Prodej domu byl pro nás velký krok. Oceňujeme, že nám kluci zajistili právní servis včetně kontroly smluv. Celý proces byl přehledný, rychlý a bezpečný.' },
  { name: 'Berenika Matějovská', city: 'Vsetín', rating: 5, text: 'Prodávala jsem na Vsetínsku starší chalupu na samotě a bála se, že to bude běh na dlouhou trať. Vše se ale obrátilo – ukázalo se, jak krásné a klidné místo to je. Díky reklamním kampaním na sociálních sítích.' },
  { name: 'Martina Dukovanská', city: 'Ostrava', rating: 5, text: 'Věřil jsem jedné nejmenované realitce, že se o prodej mého domu postará, ale měsíce ubíhaly a zájemci se nechytali. Zkusil jsem oslovit Bezmakléře a teprve na základě jejich práce se ledy hnuly.' },
  { name: 'Petr Prokop', city: 'Bruntál', rating: 5, text: 'Musím pochválit přístup a nápaditost. Bezmakléři založili mému bytu vlastní webovky, přilákali tam návštěvníky a tím pádem i zájemce. Jeden z nich si nakonec byt koupil.' },
  { name: 'Martina Dvořáková', city: 'Kuřim', rating: 5, text: 'Nejsem zastáncem realitních makléřů, svou nemovitost jsem si chtěl prodat sám. Ale musím uznat, že bez Bezmakléřů by to asi neklaplo.' },
  { name: 'Roman Buczek', city: 'Mohelnice', rating: 5, text: 'Prodával jsem krásnou chatu v Mohelnici. Myslel jsem si, že to půjde samo, ale realita mě nemile překvapila. Zabraly až reklamní kampaně, do kterých nevidím a pomohli mi Bezmakléři.' },
  { name: 'Marie Kvapilová', city: 'Podivín', rating: 5, text: 'Nejdřív jsem počítal s tím, že odevzdám 200 000 Kč provizi realitce. Nakonec jsem se obrátil na Bezmakléře a za měsíc bylo prodáno. S mou investicí 50 000 Kč. Děkuju za to.' },
  { name: 'Marek Vyrůbalík', city: 'Rajhrad', rating: 5, text: 'Fajn domluva. Fajn realizace. Co slíbili, to splnili.' },
  { name: 'Lenka Nováková', city: 'Vizovice', rating: 5, text: 'Jsem alergický na realitní makléře a jejich praktiky. Proto jsem hledal alternativu a díky bohu našel Bezmakléře. Budu je doporučovat dál.' },
];

const galleryImages = [
  { src: 'assets/foto/bezmakleri-interier-01.webp', alt: 'Profesionální fotografie interiéru nemovitosti' },
  { src: 'assets/foto/bezmakleri-interier-02.webp', alt: 'Profesionální fotografie obývacího pokoje' },
  { src: 'assets/foto/bezmakleri-interier-03.webp', alt: 'Foto interiéru nemovitosti' },
  { src: 'assets/foto/bezmakleri-interier-04.webp', alt: 'Foto nemovitosti – Hodonín' },
  { src: 'assets/foto/bezmakleri-interier-05.webp', alt: 'Interiér nemovitosti – obývací pokoj' },
  { src: 'assets/foto/bezmakleri-interier-06.webp', alt: 'Interiér nemovitosti – kuchyň' },
  { src: 'assets/foto/bezmakleri-interier-07.webp', alt: 'Interiér nemovitosti – chodba' },
  { src: 'assets/foto/bezmakleri-interier-08.webp', alt: 'Interiér nemovitosti – ložnice' },
  { src: 'assets/foto/bezmakleri-interier-09.webp', alt: 'Interiér nemovitosti – detail místnosti' },
  { src: 'assets/foto/bezmakleri-interier-10.webp', alt: 'Interiér nemovitosti – koupelna' },
  { src: 'assets/foto/bezmakleri-interier-11.webp', alt: 'Interiér nemovitosti – terasa' },
  { src: 'assets/foto/bezmakleri-interier-12.webp', alt: 'Interiér nemovitosti – jídelna' },
  { src: 'assets/foto/bezmakleri-interier-13.webp', alt: 'Interiér nemovitosti – obývací pokoj' },
  { src: 'assets/foto/bezmakleri-interier-14.webp', alt: 'Profesionální fotografie nemovitosti' },
  { src: 'assets/foto/bezmakleri-interier-15.webp', alt: 'Interiér nemovitosti – kuchyň a obývací pokoj' },
  { src: 'assets/foto/bezmakleri-interier-16.webp', alt: 'Interiér nemovitosti – detail' },
  { src: 'assets/foto/bezmakleri-interier-17.webp', alt: 'Interiér nemovitosti – chodba' },
  { src: 'assets/foto/bezmakleri-interier-18.webp', alt: 'Profesionální foto interiéru' },
  { src: 'assets/foto/bezmakleri-interier-19.webp', alt: 'Foto interiéru – detail' },
];

const droneImages = [
  { src: 'assets/drony/bezmakleri-dron-01.webp', alt: 'Letecký snímek nemovitosti z dronu' },
  { src: 'assets/drony/bezmakleri-dron-02.webp', alt: 'Dronový snímek nemovitosti a okolí' },
  { src: 'assets/drony/bezmakleri-dron-03.webp', alt: 'Letecký pohled na dům z dronu' },
  { src: 'assets/drony/bezmakleri-dron-04.webp', alt: 'Dronový snímek – okolní krajina' },
  { src: 'assets/drony/bezmakleri-dron-05.webp', alt: 'Letecký snímek nemovitosti' },
  { src: 'assets/drony/bezmakleri-dron-06.webp', alt: 'Dronový pohled na nemovitost' },
  { src: 'assets/drony/bezmakleri-dron-07.webp', alt: 'Letecký snímek domu a zahrady' },
  { src: 'assets/drony/bezmakleri-dron-08.webp', alt: 'Dronový snímek – ptačí perspektiva' },
  { src: 'assets/drony/bezmakleri-dron-09.webp', alt: 'Letecký dronový pohled na nemovitost' },
  { src: 'assets/drony/bezmakleri-dron-10.webp', alt: 'Dronový snímek nemovitosti' },
  { src: 'assets/drony/bezmakleri-dron-11.webp', alt: 'Letecký snímek domu' },
  { src: 'assets/drony/bezmakleri-dron-12.webp', alt: 'Dronový pohled – okolí nemovitosti' },
  { src: 'assets/drony/bezmakleri-dron-13.webp', alt: 'Letecký snímek z dronu' },
  { src: 'assets/drony/bezmakleri-dron-14.webp', alt: 'Dronový snímek nemovitosti' },
];

/* ── Lightbox ── */
let allImages = [];
let currentIdx = 0;

function openLightbox(idx) {
  currentIdx = idx;
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  img.src = allImages[idx].src;
  img.alt = allImages[idx].alt;
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
  updateLbNav();
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

function updateLbNav() {
  document.getElementById('lightbox-prev').disabled = currentIdx === 0;
  document.getElementById('lightbox-next').disabled = currentIdx === allImages.length - 1;
}

function moveLightbox(dir) {
  currentIdx = Math.max(0, Math.min(allImages.length - 1, currentIdx + dir));
  const img = document.getElementById('lightbox-img');
  img.src = allImages[currentIdx].src;
  img.alt = allImages[currentIdx].alt;
  updateLbNav();
}

/* ── Render services ── */
function renderServices() {
  const grid = document.getElementById('services-grid');
  services.forEach(s => {
    const el = document.createElement('div');
    el.className = 'service-card fade-in';
    el.innerHTML = `<div class="service-icon">${s.icon}</div><h3>${s.name}</h3><p>${s.desc}</p>`;
    grid.appendChild(el);
  });
}

/* ── Photo slider (gallery + drones) ── */
function createSlider({ trackId, prevId, nextId, dotsId, images }) {
  const track = document.getElementById(trackId);
  const dotsEl = document.getElementById(dotsId);
  const startIdx = allImages.length;
  const GAP = 16;
  let offset = 0;

  images.forEach((img, i) => {
    allImages.push(img);
    const slide = document.createElement('div');
    slide.className = 'slider-slide';
    slide.innerHTML = `<img src="${img.src}" alt="${img.alt}" loading="lazy" />`;
    slide.addEventListener('click', () => openLightbox(startIdx + i));
    track.appendChild(slide);

    const dot = document.createElement('button');
    dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Snímek ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(dot);
  });

  function perVisible() { return window.innerWidth <= 480 ? 1 : 2; }

  function getStep() {
    const slide = track.querySelector('.slider-slide');
    return slide ? slide.offsetWidth + GAP : 0;
  }

  function goTo(idx) {
    const per = perVisible();
    const max = Math.max(0, images.length - per);
    offset = Math.max(0, Math.min(max, idx));
    const step = getStep();
    if (step > 0) track.style.transform = `translateX(-${offset * step}px)`;
    dotsEl.querySelectorAll('.slider-dot').forEach((d, i) => d.classList.toggle('active', i === offset));
    document.getElementById(prevId).disabled = offset <= 0;
    document.getElementById(nextId).disabled = offset >= max;
  }

  document.getElementById(prevId).addEventListener('click', () => goTo(offset - 1));
  document.getElementById(nextId).addEventListener('click', () => goTo(offset + 1));
  window.addEventListener('resize', () => goTo(offset), { passive: true });
  window.addEventListener('load', () => goTo(0), { once: true });

  goTo(0);
}

/* ── Reviews carousel ── */
let reviewsOffset = 0;

function getCardWidth() {
  const card = document.querySelector('.review-card');
  if (!card) return 364;
  return card.offsetWidth + 24;
}

function renderReviews() {
  const track = document.getElementById('reviews-track');
  const dots = document.getElementById('reviews-dots');
  references.forEach((r, i) => {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
      <div class="review-stars">${'★'.repeat(r.rating)}</div>
      <p class="review-text">"${r.text}"</p>
      <div class="review-author">${r.name}</div>
      <div class="review-city">${r.city}</div>`;
    track.appendChild(card);

    const dot = document.createElement('button');
    dot.className = 'reviews-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Recenze ${i + 1}`);
    dot.addEventListener('click', () => goToReview(i));
    dots.appendChild(dot);
  });
}

function getVisibleCount() {
  const vp = document.querySelector('.reviews-viewport');
  if (!vp) return 1;
  return Math.max(1, Math.floor(vp.offsetWidth / getCardWidth()));
}

function goToReview(idx) {
  const max = references.length - getVisibleCount();
  reviewsOffset = Math.max(0, Math.min(max, idx));
  document.getElementById('reviews-track').style.transform = `translateX(-${reviewsOffset * getCardWidth()}px)`;
  document.querySelectorAll('.reviews-dot').forEach((d, i) => d.classList.toggle('active', i === reviewsOffset));
  document.getElementById('reviews-prev').disabled = reviewsOffset <= 0;
  document.getElementById('reviews-next').disabled = reviewsOffset >= max;
}

/* ── Navbar scroll ── */
function initNavbar() {
  const nb = document.getElementById('navbar');
  const onScroll = () => nb.classList.toggle('scrolled', window.scrollY > 50);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Hamburger ── */
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const links = document.getElementById('nav-links');
  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.classList.toggle('active', open);
    btn.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    btn.classList.remove('active');
    btn.setAttribute('aria-expanded', 'false');
  }));
}

/* ── Scroll animations ── */
function initScrollAnimations() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.fade-in, .slide-up').forEach(el => obs.observe(el));
}

/* ── Scroll spy ── */
function initScrollSpy() {
  const sections = ['uvod', 'sluzby', 'vyhody', 'reference', 'kontakt'];
  const navLinks = document.querySelectorAll('.nav-links a');

  function update() {
    const navH = document.getElementById('navbar').offsetHeight + 60;
    let active = 'uvod';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= navH) active = id;
    });
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + active));
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ── Contact form ── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const fields = [
    { id: 'name', errId: 'name-error', msg: 'Zadejte prosím vaše jméno.' },
    { id: 'phone', errId: 'phone-error', msg: 'Zadejte prosím telefonní číslo.' },
    { id: 'email', errId: 'email-error', msg: 'Zadejte prosím platný e-mail.' },
  ];

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    fields.forEach(f => {
      const input = document.getElementById(f.id);
      const errEl = document.getElementById(f.errId);
      let ok = input.value.trim() !== '';
      if (f.id === 'email' && ok) ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
      input.classList.toggle('error', !ok);
      errEl.textContent = ok ? '' : f.msg;
      if (!ok) valid = false;
    });

    if (valid) {
      console.log('Poptávka:', { name: form.name.value, phone: form.phone.value, email: form.email.value, message: form.message.value });
      form.reset();
      const success = document.getElementById('form-success');
      success.classList.add('visible');
      setTimeout(() => success.classList.remove('visible'), 6000);
    }
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  createSlider({ trackId: 'gallery-track', prevId: 'gallery-prev', nextId: 'gallery-next', dotsId: 'gallery-dots', images: galleryImages });
  createSlider({ trackId: 'drones-track', prevId: 'drones-prev', nextId: 'drones-next', dotsId: 'drones-dots', images: droneImages });
  renderReviews();

  initNavbar();
  initHamburger();
  initScrollSpy();
  initScrollAnimations();
  initContactForm();

  /* Lightbox events */
  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  document.getElementById('lightbox-prev').addEventListener('click', () => moveLightbox(-1));
  document.getElementById('lightbox-next').addEventListener('click', () => moveLightbox(1));
  document.getElementById('lightbox').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeLightbox();
  });
  document.addEventListener('keydown', e => {
    if (!document.getElementById('lightbox').classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') moveLightbox(-1);
    if (e.key === 'ArrowRight') moveLightbox(1);
  });

  /* Reviews nav buttons */
  document.getElementById('reviews-prev').addEventListener('click', () => goToReview(reviewsOffset - 1));
  document.getElementById('reviews-next').addEventListener('click', () => goToReview(reviewsOffset + 1));
  goToReview(0);

  /* Re-observe dynamically added .fade-in elements */
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
    if (!el.classList.contains('visible')) obs.observe(el);
  });
});
