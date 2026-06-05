'use strict';

const services = [
  {
    name: 'Videa interiéru a exteriéru',
    bg: 'assets/drony/bezmakleri-dron-01.webp',
    svg: `<svg viewBox="0 0 140 100" xmlns="http://www.w3.org/2000/svg">
      <line x1="52" y1="43" x2="22" y2="18" stroke="#1a1a1a" stroke-width="5" stroke-linecap="round"/>
      <line x1="88" y1="43" x2="118" y2="18" stroke="#1a1a1a" stroke-width="5" stroke-linecap="round"/>
      <line x1="52" y1="57" x2="22" y2="82" stroke="#1a1a1a" stroke-width="5" stroke-linecap="round"/>
      <line x1="88" y1="57" x2="118" y2="82" stroke="#1a1a1a" stroke-width="5" stroke-linecap="round"/>
      <ellipse cx="20" cy="18" rx="19" ry="5" fill="none" stroke="#CC1111" stroke-width="4"/>
      <ellipse cx="120" cy="18" rx="19" ry="5" fill="none" stroke="#CC1111" stroke-width="4"/>
      <ellipse cx="20" cy="82" rx="19" ry="5" fill="none" stroke="#CC1111" stroke-width="4"/>
      <ellipse cx="120" cy="82" rx="19" ry="5" fill="none" stroke="#CC1111" stroke-width="4"/>
      <circle cx="20" cy="18" r="5" fill="#1a1a1a"/>
      <circle cx="120" cy="18" r="5" fill="#1a1a1a"/>
      <circle cx="20" cy="82" r="5" fill="#1a1a1a"/>
      <circle cx="120" cy="82" r="5" fill="#1a1a1a"/>
      <rect x="48" y="38" width="44" height="24" rx="6" fill="#1a1a1a"/>
      <line x1="58" y1="62" x2="58" y2="74" stroke="#1a1a1a" stroke-width="4"/>
      <line x1="82" y1="62" x2="82" y2="74" stroke="#1a1a1a" stroke-width="4"/>
      <line x1="51" y1="74" x2="65" y2="74" stroke="#1a1a1a" stroke-width="4"/>
      <line x1="75" y1="74" x2="89" y2="74" stroke="#1a1a1a" stroke-width="4"/>
      <circle cx="70" cy="50" r="7" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
    </svg>`
  },
  {
    name: 'Fotografické služby',
    bg: 'assets/foto/bezmakleri-interier-01.webp',
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="24" width="90" height="50" rx="8" fill="none" stroke="#1a1a1a" stroke-width="5"/>
      <path d="M32 24 L38 12 L62 12 L68 24" fill="none" stroke="#1a1a1a" stroke-width="5" stroke-linejoin="round"/>
      <circle cx="50" cy="49" r="17" fill="none" stroke="#1a1a1a" stroke-width="5"/>
      <circle cx="50" cy="49" r="10" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
      <circle cx="50" cy="49" r="5" fill="#CC1111"/>
      <rect x="10" y="30" width="12" height="9" rx="2" fill="#1a1a1a"/>
    </svg>`
  },
  {
    name: 'Kampaně na sociálních sítích',
    bg: 'assets/drony/bezmakleri-dron-02.webp',
    svg: `<svg viewBox="0 0 110 90" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="10" width="38" height="66" rx="6" fill="none" stroke="#1a1a1a" stroke-width="4.5"/>
      <rect x="10" y="20" width="26" height="38" rx="2" fill="none" stroke="#1a1a1a" stroke-width="2"/>
      <circle cx="23" cy="68" r="3.5" fill="#1a1a1a"/>
      <rect x="48" y="6" width="58" height="34" rx="7" fill="none" stroke="#1a1a1a" stroke-width="4"/>
      <polygon points="69,16 69,30 83,23" fill="#CC1111"/>
      <rect x="56" y="48" width="50" height="30" rx="7" fill="none" stroke="#1a1a1a" stroke-width="4"/>
      <circle cx="70" cy="60" r="4" fill="#CC1111"/>
      <circle cx="82" cy="60" r="4" fill="#CC1111"/>
      <circle cx="94" cy="60" r="4" fill="#CC1111"/>
      <path d="M64 78 L56 88 L76 78" fill="none" stroke="#1a1a1a" stroke-width="3.5" stroke-linejoin="round"/>
    </svg>`
  },
  {
    name: 'Vlastní web prodávané nemovitosti',
    bg: 'assets/foto/bezmakleri-interier-02.webp',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="44" fill="none" stroke="#1a1a1a" stroke-width="4.5"/>
      <ellipse cx="50" cy="50" rx="44" ry="18" fill="none" stroke="#1a1a1a" stroke-width="3"/>
      <line x1="6" y1="50" x2="94" y2="50" stroke="#1a1a1a" stroke-width="3"/>
      <path d="M50 6 Q72 50 50 94" fill="none" stroke="#1a1a1a" stroke-width="3"/>
      <path d="M50 6 Q28 50 50 94" fill="none" stroke="#1a1a1a" stroke-width="3"/>
      <text x="50" y="57" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-size="15" font-weight="900" fill="#CC1111">WWW</text>
    </svg>`
  },
  {
    name: 'Vizualizace 2D a 3D půdorysů',
    bg: 'assets/drony/bezmakleri-dron-03.webp',
    svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
      <text x="26" y="60" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-size="40" font-weight="900" fill="#1a1a1a">2D</text>
      <line x1="58" y1="6" x2="64" y2="74" stroke="#CC1111" stroke-width="6" stroke-linecap="round"/>
      <rect x="66" y="18" width="48" height="44" rx="5" fill="#CC1111"/>
      <text x="90" y="52" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-size="28" font-weight="900" fill="#fff">3D</text>
    </svg>`
  },
  {
    name: 'Virtuální homestaging',
    bg: 'assets/foto/bezmakleri-interier-03.webp',
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="46" width="92" height="26" rx="7" fill="none" stroke="#1a1a1a" stroke-width="4.5"/>
      <rect x="20" y="28" width="80" height="22" rx="7" fill="none" stroke="#1a1a1a" stroke-width="4.5"/>
      <rect x="8" y="34" width="16" height="38" rx="7" fill="none" stroke="#1a1a1a" stroke-width="4.5"/>
      <rect x="96" y="34" width="16" height="38" rx="7" fill="none" stroke="#1a1a1a" stroke-width="4.5"/>
      <rect x="30" y="31" width="22" height="16" rx="4" fill="#CC1111"/>
      <rect x="68" y="31" width="22" height="16" rx="4" fill="#CC1111"/>
      <line x1="26" y1="72" x2="26" y2="82" stroke="#1a1a1a" stroke-width="4" stroke-linecap="round"/>
      <line x1="94" y1="72" x2="94" y2="82" stroke="#1a1a1a" stroke-width="4" stroke-linecap="round"/>
      <line x1="40" y1="72" x2="40" y2="82" stroke="#1a1a1a" stroke-width="4" stroke-linecap="round"/>
      <line x1="80" y1="72" x2="80" y2="82" stroke="#1a1a1a" stroke-width="4" stroke-linecap="round"/>
    </svg>`
  },
  {
    name: 'Matterport prohlídky',
    bg: 'assets/drony/bezmakleri-dron-04.webp',
    svg: `<svg viewBox="0 0 130 90" xmlns="http://www.w3.org/2000/svg">
      <text x="65" y="52" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-size="40" font-weight="900" fill="#CC1111">360°</text>
      <path d="M18 72 Q65 48 112 72" fill="none" stroke="#1a1a1a" stroke-width="4.5" stroke-linecap="round"/>
      <polygon points="105,64 114,73 106,79" fill="#1a1a1a"/>
    </svg>`
  },
  {
    name: 'Právní a smluvní servis',
    bg: 'assets/drony/bezmakleri-dron-05.webp',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="12" width="46" height="28" rx="6" fill="none" stroke="#1a1a1a" stroke-width="5" transform="rotate(-35 37 26)"/>
      <rect x="28" y="8" width="10" height="28" rx="3" fill="none" stroke="#1a1a1a" stroke-width="4" transform="rotate(-35 33 22)"/>
      <line x1="46" y1="54" x2="74" y2="86" stroke="#1a1a1a" stroke-width="7" stroke-linecap="round"/>
      <rect x="18" y="84" width="64" height="11" rx="4" fill="#CC1111"/>
    </svg>`
  },
  {
    name: 'Stanovení ceny nemovitosti',
    bg: 'assets/drony/bezmakleri-dron-06.webp',
    svg: `<svg viewBox="0 0 110 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="14" r="10" fill="#CC1111"/>
      <circle cx="55" cy="6" r="10" fill="#CC1111"/>
      <circle cx="80" cy="14" r="10" fill="#CC1111"/>
      <ellipse cx="55" cy="62" rx="42" ry="30" fill="none" stroke="#1a1a1a" stroke-width="4.5"/>
      <path d="M13 62 Q13 90 55 90 Q97 90 97 62" fill="none" stroke="#1a1a1a" stroke-width="4.5"/>
      <ellipse cx="55" cy="62" rx="42" ry="12" fill="none" stroke="#1a1a1a" stroke-width="3"/>
      <circle cx="42" cy="70" r="5" fill="#1a1a1a"/>
      <line x1="55" y1="46" x2="55" y2="34" stroke="#1a1a1a" stroke-width="4" stroke-linecap="round"/>
      <path d="M48 34 Q55 28 62 34" fill="none" stroke="#1a1a1a" stroke-width="3.5" stroke-linecap="round"/>
    </svg>`
  },
];

const references = [
  { name: 'Lenka Nováková', city: 'Vizovice', rating: 5, text: 'Jsem alergický na realitní makléře a jejich praktiky. Proto jsem hledal alternativu a díky bohu našel Bezmakléře. Budu je doporučovat dál.' },
  { name: 'Petr Juráň', city: 'Brno', rating: 5, text: 'Spolupráce mi ušetřila hodiny práce. Nemusel jsem nijak řešit focení, video ani ladění prezentace. Radši dám někomu 70 000 Kč za veškerý servis, než po prodeji proplácet statisícové provize realitce.' },
  { name: 'Luboš Hladílek', city: 'Mikulov', rating: 4, text: 'Hledali jsme partnera, který pochopí náš projekt a umí ho vizuálně odprezentovat tak, aby zaujal koncové zákazníky i investory. Dostali jsme nejen krásné vizualizace a videa, ale i nápady, jak celkově zlepšit promo. Spolupráce byla profesionální, rychlá a přínosná. Rádi se vrátíme znovu.' },
  { name: 'Michaela Králová', city: 'Břeclav', rating: 5, text: 'Nevěděla jsem, jak svůj byt nejlépe nafotit a odprezentovat. Díky pomoci Bezmakléřů jsem měla během pár dní stylové fotky, krátké video i 3D prohlídku. O byt byl zájem hned od začátku a nakonec se prodal za cenu, kterou jsem si přála.' },
  { name: 'Patrik Šustr', city: 'Hodonín', rating: 5, text: 'Prodej domu byl pro nás velký krok. Oceňujeme, že nám kluci zajistili právní servis včetně kontroly smluv. Celý proces byl přehledný, rychlý a bezpečný.' },
  { name: 'Berenika Matějovská', city: 'Vsetín', rating: 5, text: 'Prodávala jsem na Vsetínsku starší chalupu na samotě a bála se, že to bude běh na dlouhou trať. Vše se ale obrátilo – ukázalo se, jak krásné a klidné místo to je. Díky reklamním kampaním na sociálních sítích.' },
  { name: 'Martina Dukovanská', city: 'Ostrava', rating: 5, text: 'Věřil jsem jedné nejmenované realitce, že se o prodej mého domu postará, ale měsíce ubíhaly a zájemci se nechytali. Zkusil jsem oslovit Bezmakléře a teprve na základě jejich práce se ledy hnuly.' },
  { name: 'Petr Prokop', city: 'Bruntál', rating: 5, text: 'Musím pochválit přístup a nápaditost. Bezmakléři založili mému bytu vlastní webovky, přilákali tam návštěvníky a tím pádem i zájemce. Jeden z nich si nakonec byt koupil.' },
  { name: 'Martina Dvořáková', city: 'Kuřim', rating: 5, text: 'Nejsem zastáncem realitních makléřů, svou nemovitost jsem si chtěl prodat sám. Ale musím uznat, že bez Bezmakléřů by to asi neklaplo.' },
  { name: 'Roman Buczek', city: 'Mohelnice', rating: 5, text: 'Prodával jsem krásnou chatu v Mohelnici. Myslel jsem si, že to půjde samo, ale realita mě nemile překvapila. Zabraly až reklamní kampaně, do kterých nevidím a pomohli mi Bezmakléři.' },
  { name: 'Marie Kvapilová', city: 'Podivín', rating: 5, text: 'Nejdřív jsem počítal s tím, že odevzdám 200 000 Kč provizi realitce. Nakonec jsem se obrátil na Bezmakléře a za měsíc bylo prodáno. S mou investicí 50 000 Kč. Děkuju za to.' },
  { name: 'Marek Vyrůbalík', city: 'Rajhrad', rating: 5, text: 'Fajn domluva. Fajn realizace. Co slíbili, to splnili.' },
];

const galleryImages = [
  { src: 'assets/foto/bezmakleri-interier-01.webp', alt: 'Profesionální fotografie interiéru nemovitosti' },
  { src: 'assets/foto/bezmakleri-interier-02.webp', alt: 'Profesionální fotografie obývacího pokoje' },
  { src: 'assets/foto/bezmakleri-interier-03.webp', alt: 'Foto interiéru nemovitosti' },
  { src: 'assets/foto/bezmakleri-interier-04.webp', alt: 'Foto nemovitosti' },
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

const pudorysyImages = [
  { src: 'assets/pudorysy/hod_pud-reaqp8sionlnvqr9r2pakkiwmvv9qt3rq6g2fom91c.png', alt: 'Vizualizace 2D půdorysu nemovitosti' },
  { src: 'assets/pudorysy/hod_pud-reaqp8sionlnvqr9r2pakkiwmvv9qt3rq6g2fom91c-2.png', alt: 'Vizualizace 3D půdorysu nemovitosti' },
  { src: 'assets/pudorysy/RADEGAST_INDEX_1080x1350-1-re7jpd8882f7n25qq39dbr4p6esldn2wvow7k4urls.png', alt: 'Půdorys nemovitosti – 2D plán' },
  { src: 'assets/pudorysy/RADEGAST_INDEX_1080x1350-1-re7jpd8882f7n25qq39dbr4p6esldn2wvow7k4urls-2.png', alt: 'Půdorys nemovitosti – alternativní pohled' },
  { src: 'assets/pudorysy/RADEGAST_INDEX_1080x1350-1-re7jpd8882f7n25qq39dbr4p6esldn2wvow7k4urls-3.png', alt: 'Půdorys nemovitosti – 3D vizualizace' },
  { src: 'assets/pudorysy/s-nabytkem-otoceno-reaqq0zodoo9k1mb6ew3ndeqgg0a5q7pu20mtzgfuo.png', alt: 'Půdorys s rozmístěným nábytkem' },
  { src: 'assets/pudorysy/Screenshot-2025-10-29-155607-1-re7jodid0d2bdvlmintjp056lron95542s3rbmbq68.png', alt: 'Půdorys nemovitosti' },
  { src: 'assets/pudorysy/Screenshot-2025-10-29-155708-1-re7jndshsnpf4p1ib8dq295o14kp4n7b9vbb33soqo.png', alt: 'Dispozice nemovitosti – půdorys' },
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
    const item = document.createElement('div');
    item.className = 'service-item fade-in';
    item.innerHTML = `
      <div class="service-tile">
        <div class="service-tile-bg" style="background-image:url('${s.bg}')"></div>
        <div class="service-tile-icon">${s.svg}</div>
      </div>
      <h3>${s.name}</h3>`;
    grid.appendChild(item);
  });
}

/* ── Photo slider ── */
function createSlider({ trackId, prevId, nextId, dotsId, images, lightbox = true }) {
  const track = document.getElementById(trackId);
  const dotsEl = document.getElementById(dotsId);
  if (!track || !dotsEl) return;
  const startIdx = allImages.length;
  const GAP = 16;
  let offset = 0;

  images.forEach((img, i) => {
    if (lightbox) allImages.push(img);
    const slide = document.createElement('div');
    slide.className = 'slider-slide';
    slide.innerHTML = `<img src="${img.src}" alt="${img.alt}" loading="lazy" />`;
    if (lightbox) slide.addEventListener('click', () => openLightbox(startIdx + i));
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

/* ── Before/After slider ── */
function initBeforeAfter(containerId, beforeSrc, afterSrc, beforeAlt, afterAlt) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="ba-inner">
      <img class="ba-after" src="${afterSrc}" alt="${afterAlt}" />
      <div class="ba-before-wrap">
        <img class="ba-before" src="${beforeSrc}" alt="${beforeAlt}" />
      </div>
      <div class="ba-handle">
        <div class="ba-handle-btn">&#8249;&#8250;</div>
      </div>
    </div>`;

  const handle = container.querySelector('.ba-handle');
  const beforeWrap = container.querySelector('.ba-before-wrap');
  const inner = container.querySelector('.ba-inner');
  let dragging = false;

  function setPos(x) {
    const rect = inner.getBoundingClientRect();
    const pct = Math.max(2, Math.min(98, ((x - rect.left) / rect.width) * 100));
    handle.style.left = pct + '%';
    beforeWrap.style.width = pct + '%';
  }

  handle.addEventListener('mousedown', e => { dragging = true; e.preventDefault(); });
  handle.addEventListener('touchstart', () => { dragging = true; }, { passive: true });
  document.addEventListener('mouseup', () => { dragging = false; });
  document.addEventListener('touchend', () => { dragging = false; });
  document.addEventListener('mousemove', e => { if (dragging) setPos(e.clientX); });
  document.addEventListener('touchmove', e => { if (dragging) setPos(e.touches[0].clientX); }, { passive: true });

  setPos(inner.getBoundingClientRect().left + inner.getBoundingClientRect().width / 2);
  window.addEventListener('load', () => setPos(inner.getBoundingClientRect().left + inner.getBoundingClientRect().width / 2), { once: true });
}

/* ── Reviews carousel ── */
let reviewsOffset = 0;

function getCardWidth() {
  const card = document.querySelector('.review-card');
  if (!card) return 344;
  return card.offsetWidth + 24;
}

function renderReviews() {
  const track = document.getElementById('reviews-track');
  const dots = document.getElementById('reviews-dots');
  references.forEach((r, i) => {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
      <div class="review-author">${r.name}</div>
      <div class="review-stars">${'★'.repeat(r.rating)}</div>
      <div class="review-city">${r.city}</div>
      <p class="review-text">„${r.text}"</p>`;
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

/* ── Navbar ── */
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
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
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
  createSlider({ trackId: 'pudorysy-track', prevId: 'pudorysy-prev', nextId: 'pudorysy-next', dotsId: 'pudorysy-dots', images: pudorysyImages, lightbox: false });

  initBeforeAfter(
    'homestaging-1',
    'assets/foto/bezmakleri-interier-04.webp',
    'assets/foto/bezmakleri-interier-01.webp',
    'Před homestagingem',
    'Po homestagingu'
  );
  initBeforeAfter(
    'homestaging-2',
    'assets/foto/bezmakleri-interier-08.webp',
    'assets/foto/bezmakleri-interier-02.webp',
    'Před homestagingem',
    'Po homestagingu'
  );

  renderReviews();

  initNavbar();
  initHamburger();
  initScrollSpy();
  initScrollAnimations();
  initContactForm();

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

  document.getElementById('reviews-prev').addEventListener('click', () => goToReview(reviewsOffset - 1));
  document.getElementById('reviews-next').addEventListener('click', () => goToReview(reviewsOffset + 1));
  goToReview(0);

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.fade-in').forEach(el => {
    if (!el.classList.contains('visible')) obs.observe(el);
  });
});
