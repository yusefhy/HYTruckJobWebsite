import fs from 'node:fs';
import path from 'node:path';

const origin = 'https://hytruckjob.com';
const pages = {
  es: { path: '/', title: 'H&Y Truck Job — Trabajo de camionero en Alemania', description: 'Conductores C+E para Alemania. Contrato indefinido, hasta 3.500€ netos/mes, camiones nuevos Mercedes e Iveco.' },
  en: { path: '/en', title: 'H&Y Truck Job — Truck driver jobs in Germany', description: 'C+E drivers wanted for Germany. Permanent contract, up to €3,500 net/month, brand-new Mercedes & Iveco trucks.' },
  de: { path: '/de', title: 'H&Y Truck Job — LKW-Fahrer Jobs in Deutschland', description: 'C+E-Fahrer gesucht für Deutschland. Unbefristeter Vertrag, bis zu 3.500€ netto/Monat, neue Mercedes & Iveco LKW.' },
  pl: { path: '/pl', title: 'H&Y Truck Job — Praca kierowcy ciężarówki w Niemczech', description: 'Szukamy kierowców C+E do Niemiec. Umowa na czas nieokreślony, do 3.500€ netto/miesiąc, nowe ciężarówki Mercedes i Iveco.' },
  uk: { path: '/uk', title: 'H&Y Truck Job — Робота водія вантажівки в Німеччині', description: 'Шукаємо водіїв C+E для Німеччини. Безстроковий контракт, до 3.500€ нетто/місяць.' },
  sq: { path: '/sq', title: 'H&Y Truck Job — Punë shofer kamioni në Gjermani', description: 'Kërkojmë shoferë C+E për Gjermani. Kontratë e pakufizuar, deri në 3.500€ neto/muaj.' },
  ro: { path: '/ro', title: 'H&Y Truck Job — Loc de muncă șofer camion în Germania', description: 'Căutăm șoferi C+E pentru Germania. Contract pe termen nedeterminat, până la 3.500€ net/lună.' },
  el: { path: '/el', title: 'H&Y Truck Job — Δουλειά οδηγού φορτηγού στη Γερμανία', description: 'Ζητούνται οδηγοί C+E για Γερμανία. Αόριστη σύμβαση, έως 3.500€ καθαρά/μήνα.' },
  ru: { path: '/ru', title: 'H&Y Truck Job — Работа водителя грузовика в Германии', description: 'Ищем водителей C+E для Германии. Бессрочный контракт, до 3.500€ нетто/месяц.' },
  sr: { path: '/sr', title: 'H&Y Truck Job — Posao vozača kamiona u Nemačkoj', description: 'Tražimo vozače C+E za Nemačku. Ugovor na neodređeno, do 3.500€ neto/mesečno.' },
  ar: { path: '/ar', title: 'H&Y Truck Job — وظيفة سائق شاحنة في ألمانيا', description: 'نبحث عن سائقين C+E لألمانيا. عقد دائم، حتى 3.500€ صافٍ/شهر.' }
};
const esc = s => s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const alternates = Object.entries(pages).map(([lang,p]) => `    <link rel="alternate" hreflang="${lang}" href="${origin}${p.path}" />`).join('\n') +
  `\n    <link rel="alternate" hreflang="x-default" href="${origin}/" />`;
const base = fs.readFileSync('dist/index.html','utf8');

for (const [lang,p] of Object.entries(pages)) {
  let html = base;
  html = html.replace(/<html[^>]*>/i, `<html lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">`);
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${esc(p.title)}</title>`);
  html = html.replace(/<meta name="description"[^>]*>/i, `<meta name="description" content="${esc(p.description)}" />`);
  html = html.replace(/<meta property="og:title"[^>]*>/i, `<meta property="og:title" content="${esc(p.title)}" />`);
  html = html.replace(/<meta property="og:description"[^>]*>/i, `<meta property="og:description" content="${esc(p.description)}" />`);
  html = html.replace(/<\/head>/i, `    <link rel="canonical" href="${origin}${p.path}" />\n${alternates}\n    <meta property="og:url" content="${origin}${p.path}" />\n  </head>`);
  const out = p.path === '/' ? 'dist/index.html' : path.join('dist', p.path.slice(1), 'index.html');
  fs.mkdirSync(path.dirname(out), {recursive:true});
  fs.writeFileSync(out, html);
}

const hreflangs = Object.entries(pages).map(([lang,p]) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${origin}${p.path}"/>`).join('\n') +
  `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${origin}/"/>`;
const today = new Date().toISOString().slice(0,10);
const urls = Object.values(pages).map(p => `  <url>\n    <loc>${origin}${p.path}</loc>\n${hreflangs}\n    <lastmod>${today}</lastmod>\n  </url>`).join('\n');
fs.writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`);
fs.writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);
