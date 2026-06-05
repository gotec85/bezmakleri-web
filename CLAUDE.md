# Bezmakléři – Web Project Brief

## Stack
HTML, CSS, JavaScript — čistý kód bez frameworků
Single page website
Git → GitHub → Vercel (auto-deploy)
Git author email: gottvald.martin@gmail.com

## Struktura souborů
```
bezmakleri-web/
├── index.html
├── style.css
├── script.js
├── favicon.ico
├── favicon.png
├── robots.txt
├── sitemap.xml
└── assets/
    ├── logo/
    │   └── logo.webp
    ├── og-image.jpg
    ├── foto/          ← interiérové fotky
    ├── drony/         ← dronové snímky
    ├── pудorysy/      ← 2D/3D půdorysy
    └── homestaging/   ← before/after páry
```

---

## Projekt
Firma **Bezmakléři s.r.o.** prodává marketingové služby pro prodej nemovitostí.
Místo provize realitnímu makléři (3–6 %) zaplatí klient fixní cenu za profesionální prezentaci.

**Doména:** bezmakleri.cz
**Kontakt:** martin.gottvald@bezmakleri.cz | +420 602 516 031

---

## Barevná paleta

```css
:root {
  --color-bg:       #FFFFFF;
  --color-bg-soft:  #F7F5F2;   /* teplá krémová – střídání sekcí */
  --color-bg-dark:  #1B2B3A;   /* navy – hero, footer, CTA sekce */
  --color-primary:  #1B2B3A;   /* navy – hlavní akcent */
  --color-gold:     #C9A96E;   /* zlatá – dekorativní akcent */
  --color-text:     #1A1A2E;   /* hlavní text */
  --color-muted:    #6B7280;   /* meta text, subtitulky */
  --color-border:   #E5E0D8;   /* bordery, oddělovače */
}
```

## Typografie
Google Fonts – přidat do `<head>` s `font-display: swap`:
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```
- **Nadpisy (h1–h3):** `Cormorant Garamond`, serif
- **Tělo + UI:** `DM Sans`, sans-serif
- h1: 72–96px, weight 600, letter-spacing -0.02em
- h2: 42–56px, weight 500
- Perex/lead: 18–20px, DM Sans, color: var(--color-muted)

---

## SEO – povinné pro tento web

### Meta tagy
```html
<title>Bezmakléři — Prodejte nemovitost bez provizí</title>
<meta name="description" content="Profesionální marketing nemovitosti bez provize realitnímu makléři. Foto, video, 3D prohlídky, kampaně. Od 40 000 Kč." />
<link rel="canonical" href="https://www.bezmakleri.cz/" />
```

### Open Graph
```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.bezmakleri.cz/" />
<meta property="og:title" content="Bezmakléři — Prodejte nemovitost bez provizí" />
<meta property="og:description" content="Profesionální marketing nemovitosti bez provize. Foto, video, 3D prohlídky, kampaně na soc. sítích." />
<meta property="og:image" content="https://www.bezmakleri.cz/assets/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:site_name" content="Bezmakléři" />
<meta property="og:locale" content="cs_CZ" />
```

### Twitter Card
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Bezmakléři — Prodejte nemovitost bez provizí" />
<meta name="twitter:description" content="Profesionální marketing nemovitosti bez provize." />
<meta name="twitter:image" content="https://www.bezmakleri.cz/assets/og-image.jpg" />
```

### Favicon
```html
<link rel="icon" type="image/x-icon" href="favicon.ico" />
<link rel="icon" type="image/png" sizes="512x512" href="favicon.png" />
<link rel="apple-touch-icon" sizes="180x180" href="favicon.png" />
```

### JSON-LD strukturovaná data
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Bezmakléři s.r.o.",
  "url": "https://www.bezmakleri.cz",
  "logo": "https://www.bezmakleri.cz/assets/logo/logo.webp",
  "email": "martin.gottvald@bezmakleri.cz",
  "telephone": "+420602516031",
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61579084846986",
    "https://instagram.com/realpromo.cz",
    "https://www.youtube.com/channel/UCAn0D2KPFFOLC_MJQJZw8Ww"
  ]
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Marketing nemovitosti bez provize",
  "description": "Profesionální prezentace nemovitostí – foto, video, 3D prohlídky, reklamní kampaně, právní servis.",
  "url": "https://www.bezmakleri.cz",
  "areaServed": { "@type": "Country", "name": "Česká republika" },
  "offers": [{ "@type": "Offer", "name": "Standardní balíček", "price": "40000", "priceCurrency": "CZK" }]
}
```

### robots.txt
```
User-agent: *
Allow: /
Sitemap: https://www.bezmakleri.cz/sitemap.xml
```

### sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.bezmakleri.cz/</loc>
    <lastmod>2026-05-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## Navigace
- Desktop: logo vlevo + nav-links + CTA tlačítko vpravo
- Mobile: logo + CTA (nav-links skryté ≤768px, hamburger menu)
- Nav-links: font-weight 600, barva var(--color-primary), hover = zlatá
- Sticky navbar, průhledný → bílý s backdrop-blur při scrollu

---

## Struktura stránky (sekce v pořadí)

### 1. NAVBAR
- Logo vlevo: text „BEZMAKLÉŘI" Cormorant Garamond, barva var(--color-gold)
- Podtext: „bez provizí" DM Sans 12px, muted
- Menu: Úvod · Služby · Výhody · Reference · Kontakt
- CTA tlačítko: „Nezávazná poptávka" — background var(--color-primary), bílý text

### 2. HERO
- Background: var(--color-bg-dark)
- Velký headline (bílý): „Prodejte nemovitost.<br>Bez provizí."
- Podtitulek (zlatý): „Profesionální marketing místo statisícových odměn makléřům"
- Perex (bílý, muted):
  > „Pomáháme prodávat nemovitosti bez provizí realitním makléřům. Silný online marketing a atraktivní vizuální obsah jsou klíčem k výhodnějšímu prodeji."
- CTA primární: „Nezávazná poptávka" — zlaté pozadí, navy text
- CTA sekundární: „Prohlédnout služby ↓" — outline bílý
- Hero image: placeholder (assets/foto/hero.webp) — velká fotka nemovitosti vpravo

### 3. PROČ BEZMAKLÉŘI
- Background: var(--color-bg-soft)
- H2: „Proměníme vaši nemovitost v příběh, který zaujme"
- Perex: „Vyhněte se vysoké provizi (obvykle 3–6 %), která je skrytě zahrnuta v ceně. Podstatou našich služeb je zvýšit hodnotu vaší nemovitosti tak, aby vydělané peníze skončily u vás, ne v provizích."
- 3 ikony s textem:
  - 💰 „Ušetříte statisíce" – žádné provize 3–6 %
  - 📈 „Vyšší cena nemovitosti" – profesionální prezentace přiláká vážné zájemce
  - ⚡ „Rychlejší prodej" – cílené kampaně zkrátí dobu prodeje

### 4. SLUŽBY
- Background: var(--color-bg)
- H2: „Co pro vás uděláme"
- 9 karet v gridu (3×3 desktop, 2 col tablet, 1 col mobil)
- Každá karta: ikona (unicode emoji nebo SVG), název, popis, zlatá linka dole při hoveru

**Data služeb:**
```javascript
const services = [
  { icon: "🎬", name: "Videa interiéru a exteriéru", desc: "Profesionální video prezentace, která ukáže vaši nemovitost v tom nejlepším světle." },
  { icon: "📷", name: "Fotografické služby", desc: "Špičkové snímky pořízené nejlepšími technologiemi s dokonalým barevným rozsahem." },
  { icon: "📱", name: "Kampaně na sociálních sítích", desc: "Cílená reklama na Facebooku, Instagramu a YouTube – oslovíme správné kupce." },
  { icon: "🌐", name: "Vlastní web nemovitosti", desc: "Unikátní landing page s kompletní prezentací vaší nemovitosti." },
  { icon: "📐", name: "Vizualizace 2D a 3D půdorysů", desc: "Přehledné půdorysy, které zájemcům usnadní orientaci a rozhodování." },
  { icon: "🛋️", name: "Virtuální homestaging", desc: "Digitálně zariadíme prázdné místnosti – bez fyzického stěhování nábytku." },
  { icon: "🔮", name: "Matterport prohlídky", desc: "Interaktivní 3D prohlídka z pohodlí domova zájemce." },
  { icon: "⚖️", name: "Právní a smluvní servis", desc: "Kompletní právní pokrytí celého procesu prodeje." },
  { icon: "💎", name: "Stanovení ceny nemovitosti", desc: "Odborné ocenění, které maximalizuje výtěžek z prodeje." }
]
```

### 5. FOTOGALERIE
- Background: var(--color-bg-dark)
- H2 bílý: „Poutavý vizuální obsah"
- Perex bílý muted: „Špičková videa a fotografie jsou předpokladem každé úspěšné inzerce."
- Masonry grid 4 sloupce desktop / 2 mobil
- Obrázky: načíst z assets/foto/ (placeholder dokud nejsou reálné)
- loading="lazy" na všech obrázcích
- Lightbox při kliku
- CTA: „Chci objednat" (zlaté tlačítko)

### 6. DRONOVÉ SNÍMKY
- Background: var(--color-bg-soft)
- H2: „Dronem pořízené letecké snímky"
- Perex: „Ptačí perspektiva ukáže víc než jen dům – přibližuje celý příběh místa."
- Grid 3 sloupce (placeholder fotky)

### 7. ONLINE MARKETING
- Background: var(--color-bg)
- H2: „Online marketing na míru"
- Text: „Nabízíme správu a optimalizaci reklamních kampaní na Facebooku, Instagramu, Youtube a dalších sociálních sítích. Díky přesnému cílení oslovíme potenciální kupce přímo podle jejich zájmů a lokality."
- Highlight box (navy pozadí, zlatý text): „Vlastní Facebookové skupiny s více než 300 000 uživatelů"
- 3 ikony: Facebook · Instagram · YouTube

### 8. REFERENCE
- Background: var(--color-bg-soft)
- H2: „Co říkají naši klienti"
- Horizontálně scrollovatelný carousel (šipky vlevo/vpravo)
- 12 karet recenzí

```javascript
const references = [
  { name: "Petr Juráň", city: "Brno", rating: 5, text: "Spolupráce mi ušetřila hodiny práce. Nemusel jsem nijak řešit focení, video ani ladění prezentace. Radši dám někomu 70 000 Kč za veškerý servis, než po prodeji proplácet statisícové provize realitce." },
  { name: "Luboš Hladílek", city: "Mikulov", rating: 5, text: "Hledali jsme partnera, který pochopí náš projekt a umí ho vizuálně odprezentovat. Dostali jsme nejen krásné vizualizace a videa, ale i nápady, jak celkově zlepšit promo. Spolupráce byla profesionální, rychlá a přínosná." },
  { name: "Michaela Králová", city: "Břeclav", rating: 5, text: "Nevěděla jsem, jak svůj byt nejlépe nafotit a odprezentovat. Díky pomoci Bezmakléřů jsem měla během pár dní stylové fotky, krátké video i 3D prohlídku. O byt byl zájem hned od začátku a nakonec se prodal za cenu, kterou jsem si přála." },
  { name: "Patrik Šustr", city: "Hodonín", rating: 5, text: "Prodej domu byl pro nás velký krok. Oceňujeme, že nám kluci zajistili právní servis včetně kontroly smluv. Celý proces byl přehledný, rychlý a bezpečný." },
  { name: "Berenika Matějovská", city: "Vsetín", rating: 5, text: "Prodávala jsem na Vsetínsku starší chalupu na samotě a bála se, že to bude běh na dlouhou trať. Vše se ale obrátilo – ukázalo se, jak krásné a klidné místo to je. Díky reklamním kampaním na sociálních sítích." },
  { name: "Martina Dukovanská", city: "Ostrava", rating: 5, text: "Věřil jsem jedné nejmenované realitce, že se o prodej mého domu postará, ale měsíce ubíhaly a zájemci se nechytali. Zkusil jsem oslovit Bezmakléře a teprve na základě jejich práce se ledy hnuly." },
  { name: "Petr Prokop", city: "Bruntál", rating: 5, text: "Musím pochválit přístup a nápaditost. Bezmakléři založili mému bytu vlastní webovky, přilákali tam návštěvníky a tím pádem i zájemce. Jeden z nich si nakonec byt koupil." },
  { name: "Martina Dvořáková", city: "Kuřim", rating: 5, text: "Nejsem zastáncem realitních makléřů, svou nemovitost jsem si chtěl prodat sám. Ale musím uznat, že bez Bezmakléřů by to asi neklaplo." },
  { name: "Roman Buczek", city: "Mohelnice", rating: 5, text: "Prodával jsem krásnou chatu v Mohelnici. Myslel jsem si, že to půjde samo, ale realita mě nemile překvapila. Zabraly až reklamní kampaně, do kterých nevidím a pomohli mi Bezmakléři." },
  { name: "Marie Kvapilová", city: "Podivín", rating: 5, text: "Nejdřív jsem počítal s tím, že odevzdám 200 000 Kč provizi realitce. Nakonec jsem se obrátil na Bezmakléře a za měsíc bylo prodáno. S mou investicí 50 000 Kč. Děkuju za to." },
  { name: "Marek Vyrůbalík", city: "Rajhrad", rating: 5, text: "Fajn domluva. Fajn realizace. Co slíbili, to splnili." },
  { name: "Lenka Nováková", city: "Vizovice", rating: 5, text: "Jsem alergický na realitní makléře a jejich praktiky. Proto jsem hledal alternativu a díky bohu našel Bezmakléře. Budu je doporučovat dál." }
]
```

### 9. CENA
- Background: var(--color-bg-dark)
- H2 bílý: „Jak je to s cenou?"
- Perex bílý: „My se vám za desetitisíce postaráme o atraktivní prezentaci nemovitosti, a vy nemusíte kalkulovat se statisícovou provizí."
- Velká cenová karta (bílé pozadí, navy text):
  - Název: „Standardní balíček"
  - Zahrnuje: Video · Foto · Vlastní web nemovitosti · Reklamní kampaně
  - Cena: **od 40 000 Kč** — velký zlatý text
  - Podtext: „Finální kalkulace se vždy odvíjí od dispozic nemovitosti a individuálních potřeb"
  - CTA: „Nezávazná poptávka" (zlaté tlačítko)

### 10. KONTAKT
- Background: var(--color-bg-soft)
- H2: „Pojďme spolupracovat"
- 2 sloupce:
  - **Vlevo** – kontaktní info:
    - 📞 +420 602 516 031
    - ✉️ martin.gottvald@bezmakleri.cz
    - 🏢 BEZMAKLÉŘI s.r.o.
    - Sociální sítě (ikony s linky):
      - Facebook: https://www.facebook.com/profile.php?id=61579084846986
      - Instagram: https://instagram.com/realpromo.cz
      - YouTube: https://www.youtube.com/channel/UCAn0D2KPFFOLC_MJQJZw8Ww
      - TikTok: https://www.tiktok.com/@realpromocz
      - LinkedIn: https://www.linkedin.com/in/real-promo-98b99b388/
  - **Vpravo** – kontaktní formulář:
    - Pole: Jméno*, Telefon*, E-mail*, Zpráva (textarea)
    - Tlačítko: „Odeslat poptávku"
    - Validace povinných polí v JS
    - Po odeslání: zobrazit success zprávu (bez backendu zatím — console.log + vizuální potvrzení)
    - TODO: napojit na Formspree nebo Resend

### 11. FOOTER
- Background: var(--color-bg-dark)
- Logo + copyright: „© 2026 BEZMAKLÉŘI s.r.o."
- Linky: Ochrana osobních údajů · Zásady cookies
- Sociální sítě (ikony)

---

## Logo (dočasné)
Soubor logo zatím neexistuje. Použij textové logo v HTML:
```html
<div class="logo">
  <span class="logo-main">BEZMAKLÉŘI</span>
  <span class="logo-sub">bez provizí</span>
</div>
```
CSS: logo-main = Cormorant Garamond, var(--color-gold), 24px
CSS: logo-sub = DM Sans, var(--color-muted), 11px, display block

Až bude dodán soubor assets/logo/logo.webp, nahradit za `<img>`.

---

## Animace (CSS only)
- Scroll reveal: třídy `.fade-in`, `.slide-up` přidávané přes IntersectionObserver
- Hover na kartách: `transform: translateY(-4px)`, zlatá linka spodní border
- Navbar: transition background a backdrop-filter při scrollu
- Carousel reference: smooth scroll, šipky + tečky

---

## Výkon
- PageSpeed cíl: 90+ výkon, 100 SEO, 100 Best Practices
- Všechny obrázky: WebP, `loading="lazy"`, popisné alt tagy
- Hero obrázek: max 150 KB, WebP
- Google Fonts: font-display: swap

---

## Automatická pravidla při přidání obrázku
1. Zkontroluj formát — pokud není WebP: `cwebp -q 85 input.jpg -o output.webp`
2. Pojmenuj srozumitelně (lowercase, pomlčky): `bezmakleri-interieur-obyvak.webp`
3. Napiš popisný alt tag
4. Aktualizuj sitemap.xml — změň `<lastmod>` na dnešní datum

---

## Postup stavby
1. Vytvoř `index.html` s kompletní HTML strukturou (všechny sekce najednou)
2. Vytvoř `style.css` — CSS proměnné, reset, komponenty, sekce, responzivita
3. Vytvoř `script.js` — hamburger menu, scroll efekty, carousel, formulář validace
4. Vytvoř `robots.txt` a `sitemap.xml`
5. Zkontroluj responzivitu (mobile 375px, tablet 768px, desktop 1440px)
6. Zkontroluj konzoli — žádné JS chyby
