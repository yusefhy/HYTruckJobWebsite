import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import logoImg from '../assets/logo-original.png';

const BenefitIcons: Record<string, JSX.Element> = {
  salary: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v2m0 8v2M9.5 9.5A2.5 2.5 0 0 1 12 8a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 2.5-1.5"/>
    </svg>
  ),
  truck: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 3h15v13H1zM16 8h4l3 4v5h-7V8z"/>
      <circle cx="5.5" cy="18.5" r="2.5"/>
      <circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  ),
  calendar: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
    </svg>
  ),
  contract: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="9" y1="13" x2="15" y2="13"/>
      <line x1="9" y1="17" x2="15" y2="17"/>
    </svg>
  ),
  support: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z"/>
    </svg>
  ),
  equipment: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18"/>
      <path d="M9 6h6M9 10h4"/>
    </svg>
  ),
};

const BENEFIT_ICON_KEYS = ['salary', 'truck', 'calendar', 'contract', 'support', 'equipment'] as const;
import type { Translation, Lang } from '../translations';
import translations, { langPaths, langOrder } from '../translations';
import { useNavigate } from 'react-router-dom';

const GERMAN_CITIES = [
  'Aachen','Augsburg','Bergisch Gladbach','Berlin','Bielefeld','Bochum','Bonn','Bottrop',
  'Braunschweig','Bremen','Bremerhaven','Chemnitz','Darmstadt','Dortmund','Dresden',
  'Duisburg','Düsseldorf','Erfurt','Erlangen','Essen','Frankfurt am Main','Freiburg im Breisgau',
  'Fürth','Gelsenkirchen','Göttingen','Hagen','Halle (Saale)','Hamburg','Hamm','Hannover',
  'Heidelberg','Heilbronn','Hildesheim','Ingolstadt','Jena','Kassel','Kiel','Koblenz','Köln',
  'Krefeld','Leipzig','Leverkusen','Lübeck','Ludwigshafen am Rhein','Magdeburg','Mainz',
  'Mannheim','Moers','Mönchengladbach','Mülheim an der Ruhr','München','Münster','Nürnberg',
  'Oberhausen','Offenbach am Main','Oldenburg','Osnabrück','Paderborn','Pforzheim','Potsdam',
  'Regensburg','Remscheid','Reutlingen','Rostock','Saarbrücken','Salzgitter','Siegen',
  'Solingen','Stuttgart','Ulm','Wiesbaden','Wolfsburg','Wuppertal','Würzburg',
];

interface FormState {
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
  cap: '' | 'yes' | 'no';
  experience: '' | 'yes' | 'no';
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  phone?: string;
  city?: string;
  cap?: string;
  experience?: string;
}

export default function JobPage({ lang }: { lang: Lang }) {
  const t: Translation = translations[lang];
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState<FormState>({ firstName: '', lastName: '', phone: '', city: '', cap: '', experience: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const EMAILJS_SERVICE_ID  = 'service_qd2ofde';
  const EMAILJS_TEMPLATE_ID = 'template_aeuy6zo';
  const EMAILJS_PUBLIC_KEY  = '0m0yftVMYPZbX8Hnz';

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.firstName.trim()) e.firstName = t.form.required;
    if (!form.lastName.trim()) e.lastName = t.form.required;
    if (!form.phone.trim()) e.phone = t.form.required;
    if (!form.city) e.city = t.form.required;
    if (!form.cap) e.cap = t.form.required;
    if (!form.experience) e.experience = t.form.required;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  `${form.firstName} ${form.lastName}`,
          phone:       form.phone,
          city:        form.city,
          cap:         form.cap === 'yes' ? 'Sí' : 'No',
          experience:  form.experience === 'yes' ? 'Sí' : 'No',
          language:    lang.toUpperCase(),
          to_email:    'n.hadouchi@avanti-dl.com',
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setSubmitted(true);
    } catch (err: any) {
      console.error('EmailJS error:', err);
      alert(`Error: ${JSON.stringify(err?.text || err?.message || err)}`);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    document.title = t.pageTitle;
    const setMeta = (prop: string, val: string, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${prop}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, prop); document.head.appendChild(el); }
      el.content = val;
    };
    setMeta('description', t.pageDescription);
    setMeta('og:title', t.pageTitle, 'property');
    setMeta('og:description', t.pageDescription, 'property');
    setMeta('twitter:title', t.pageTitle);
    setMeta('twitter:description', t.pageDescription);
    document.documentElement.lang = lang;
  }, [lang, t]);

  const isRtl = t.dir === 'rtl';

  return (
    <div dir={t.dir} className="min-h-screen" style={{ background: '#0C0C0C', color: '#F0F0F0' }}>
      {/* NAV */}
      <nav style={{ background: '#0C0C0C', borderBottom: '1px solid #2A2A2A' }} className="sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={logoImg}
              alt="H&Y Truck Job logo"
              className="w-10 h-10 object-contain"
              style={{ mixBlendMode: 'screen' }}
            />
            <span className="font-bold text-lg tracking-tight" style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.02em', color: '#F0F0F0' }}>
              H&amp;Y <span style={{ color: '#00A8E1' }}>TRUCK JOB</span>
            </span>
          </div>

          {/* Desktop lang switcher */}
          <div className="hidden md:flex items-center gap-1">
            {langOrder.map((l) => (
              <button
                key={l}
                onClick={() => navigate(langPaths[l])}
                className="px-2 py-1 rounded text-xs font-medium transition-all"
                style={{
                  background: l === lang ? '#00A8E1' : 'transparent',
                  color: l === lang ? '#fff' : '#8A8A8A',
                  fontFamily: 'Barlow, sans-serif',
                }}
              >
                {translations[l].flag} {translations[l].langName}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: '#F0F0F0' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen
                ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4" style={{ background: '#1A1A1A' }}>
            <div className="flex flex-wrap gap-2 pt-3">
              {langOrder.map((l) => (
                <button
                  key={l}
                  onClick={() => { navigate(langPaths[l]); setMenuOpen(false); }}
                  className="px-3 py-1.5 rounded text-xs font-medium"
                  style={{
                    background: l === lang ? '#00A8E1' : '#2A2A2A',
                    color: l === lang ? '#fff' : '#F0F0F0',
                    fontFamily: 'Barlow, sans-serif',
                  }}
                >
                  {translations[l].flag} {translations[l].langName}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background truck image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1592805144716-feeccccef5ac?w=1600&h=700&fit=crop&auto=format"
            alt="Modern long-distance truck on highway"
            className="w-full h-full object-cover"
            style={{ opacity: 0.25 }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(12,12,12,0.3) 0%, rgba(12,12,12,0.95) 100%)' }} />
          {/* Logo centrado sobre la imagen */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <img
              src={logoImg}
              alt="H&Y Truck Job"
              style={{ width: 220, height: 220, objectFit: 'contain', mixBlendMode: 'screen', opacity: 0.18 }}
            />
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold tracking-widest uppercase"
                style={{ background: '#00A8E1', color: '#fff', fontFamily: 'Barlow, sans-serif' }}>
                {t.hero.badge}
              </div>
              {/* German flag pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold tracking-widest uppercase"
                style={{ background: '#1A1A1A', border: '1px solid #2A2A2A', color: '#B0B0B0', fontFamily: 'Barlow, sans-serif' }}>
                {/* SVG German flag */}
                <span className="inline-flex rounded-sm overflow-hidden flex-shrink-0" style={{ width: 22, height: 14 }}>
                  <svg viewBox="0 0 5 3" width="22" height="14" xmlns="http://www.w3.org/2000/svg">
                    <rect width="5" height="1" y="0" fill="#000"/>
                    <rect width="5" height="1" y="1" fill="#D00"/>
                    <rect width="5" height="1" y="2" fill="#FFCE00"/>
                  </svg>
                </span>
                {t.hero.location}
              </div>
            </div>
            <h1 className="font-black uppercase leading-none mb-6"
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: 'clamp(3rem, 10vw, 7rem)',
                letterSpacing: '-0.01em',
                color: '#F0F0F0',
                whiteSpace: 'pre-line',
              }}>
              {t.hero.title}
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl" style={{ color: '#B0B0B0', fontFamily: 'Barlow, sans-serif' }}>
              {t.hero.subtitle}
            </p>
            <a href="#apply" className="inline-flex items-center gap-2 mt-8 px-6 py-3 font-bold text-sm tracking-widest uppercase transition-all hover:brightness-110 active:scale-95"
              style={{ background: '#00A8E1', color: '#fff', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.1em' }}>
              {t.nav.apply}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <div style={{ background: '#00A8E1' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { n: '3.500€', label: lang === 'ar' ? 'صافٍ/شهر' : lang === 'el' ? 'καθαρά/μήνα' : lang === 'ru' ? 'нетто/мес.' : lang === 'uk' ? 'нетто/міс.' : lang === 'de' ? 'netto/Monat' : lang === 'pl' ? 'netto/miesiąc' : lang === 'en' ? 'net/month' : 'neto/mes' },
              { n: '5', label: lang === 'ar' ? 'أيام/أسبوع' : lang === 'el' ? 'μέρες/εβδ.' : lang === 'ru' ? 'дней/нед.' : lang === 'uk' ? 'днів/тиж.' : lang === 'de' ? 'Tage/Woche' : lang === 'en' ? 'days/week' : 'días/sem.' },
              { n: '24h', label: lang === 'ar' ? 'دعم' : lang === 'el' ? 'υποστήριξη' : lang === 'ru' ? 'поддержка' : lang === 'uk' ? 'підтримка' : lang === 'de' ? 'Support' : lang === 'en' ? 'support' : 'soporte' },
              { n: '∞', label: lang === 'ar' ? 'عقد دائم' : lang === 'el' ? 'αόριστη σύμβ.' : lang === 'ru' ? 'бессрочный' : lang === 'uk' ? 'безстроковий' : lang === 'de' ? 'unbefristet' : lang === 'en' ? 'permanent' : 'indefinido' },
            ].map((s) => (
              <div key={s.n} className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-black" style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#0C0C0C' }}>{s.n}</span>
                <span className="text-xs uppercase tracking-widest mt-0.5" style={{ color: 'rgba(0,0,0,0.65)', fontFamily: 'Barlow, sans-serif' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BENEFITS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-5xl font-black uppercase mb-12 text-center"
          style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#F0F0F0', letterSpacing: '-0.01em' }}>
          {t.benefits.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.benefits.items.map((item, i) => (
            <div key={item.title}
              className="p-6 transition-all hover:translate-y-[-2px]"
              style={{ background: '#1A1A1A', border: '1px solid #2A2A2A' }}>
              <div className="mb-4 opacity-80">{BenefitIcons[BENEFIT_ICON_KEYS[i]]}</div>
              <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#00A8E1', letterSpacing: '0.01em' }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#8A8A8A', fontFamily: 'Barlow, sans-serif' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DRIVE ONLY STRIP */}
      <div className="relative overflow-hidden mb-16 mx-4 sm:mx-6 max-w-6xl lg:mx-auto">
        <div className="relative flex flex-col md:flex-row items-center gap-8 px-8 py-10"
          style={{ background: '#1A1A1A', border: '1px solid #2A2A2A' }}>
          {/* Road icon */}
          <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full"
            style={{ background: '#00A8E1' }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v10a2 2 0 0 1-2 2h-2"/>
              <circle cx="12" cy="17" r="3"/>
              <circle cx="5" cy="17" r="3"/>
            </svg>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-black uppercase mb-2"
              style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#F0F0F0', letterSpacing: '-0.01em' }}>
              {t.driveOnly.title}
            </h3>
            <p className="text-sm leading-relaxed max-w-xl" style={{ color: '#8A8A8A', fontFamily: 'Barlow, sans-serif' }}>
              {t.driveOnly.subtitle}
            </p>
          </div>
          {/* Decorative line */}
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-1"
            style={{ background: '#00A8E1' }} />
        </div>
      </div>

      {/* FORM */}
      <section id="apply" className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left info */}
          <div>
            <div className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-widest"
              style={{ background: '#00A8E1', color: '#fff', fontFamily: 'Barlow, sans-serif' }}>
              {t.hero.location}
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-none"
              style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#F0F0F0' }}>
              {t.form.title}
            </h2>
            <p className="text-base mb-8 leading-relaxed" style={{ color: '#8A8A8A', fontFamily: 'Barlow, sans-serif' }}>
              {t.form.subtitle}
            </p>

            {/* Requirements checklist */}
            <div className="space-y-3">
              {[
                { icon: '✓', text: lang === 'ar' ? 'رخصة قيادة C+E (مقطورة)' : lang === 'el' ? 'Δίπλωμα C+E (αρθρωτό)' : lang === 'ru' ? 'Права C+E (сочленённый)' : lang === 'uk' ? 'Права C+E (зчленований)' : 'Carnet C+E (articulado)' },
                { icon: '✓', text: lang === 'ar' ? 'الرمز 95 / CAP ساري المفعول' : lang === 'el' ? 'Κωδικός 95 / CAP σε ισχύ' : lang === 'ru' ? 'Код 95 / CAP (действителен)' : lang === 'uk' ? 'Код 95 / CAP (дійсний)' : 'CAP / Código 95 en vigor' },
                { icon: '✓', text: lang === 'ar' ? 'تصريح عمل في الاتحاد الأوروبي' : lang === 'el' ? 'Άδεια εργασίας ΕΕ' : lang === 'ru' ? 'Разрешение на работу в ЕС' : lang === 'uk' ? 'Дозвіл на роботу в ЄС' : 'Permiso de trabajo en la UE' },
              ].map((req) => (
                <div key={req.text} className="flex items-center gap-3">
                  <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-sm"
                    style={{ background: '#00A8E1' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="text-sm" style={{ color: '#B0B0B0', fontFamily: 'Barlow, sans-serif' }}>{req.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form card */}
          <div className="p-8" style={{ background: '#1A1A1A', border: '1px solid #2A2A2A' }}>
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full"
                  style={{ background: '#00A8E1' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-black mb-3 uppercase" style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#F0F0F0' }}>
                  {t.form.successTitle}
                </h3>
                <p style={{ color: '#8A8A8A', fontFamily: 'Barlow, sans-serif' }}>{t.form.successMsg}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* First name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#8A8A8A', fontFamily: 'Barlow, sans-serif' }}>
                    {t.form.firstName} *
                  </label>
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="w-full px-4 py-3 text-sm outline-none transition-all"
                    style={{
                      background: '#0C0C0C',
                      border: `1px solid ${errors.firstName ? '#00A8E1' : '#2A2A2A'}`,
                      color: '#F0F0F0',
                      fontFamily: 'Barlow, sans-serif',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#00A8E1')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = errors.firstName ? '#00A8E1' : '#2A2A2A')}
                  />
                  {errors.firstName && <p className="text-xs mt-1" style={{ color: '#00A8E1', fontFamily: 'Barlow, sans-serif' }}>{errors.firstName}</p>}
                </div>

                {/* Last name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#8A8A8A', fontFamily: 'Barlow, sans-serif' }}>
                    {t.form.lastName} *
                  </label>
                  <input
                    type="text"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full px-4 py-3 text-sm outline-none transition-all"
                    style={{
                      background: '#0C0C0C',
                      border: `1px solid ${errors.lastName ? '#00A8E1' : '#2A2A2A'}`,
                      color: '#F0F0F0',
                      fontFamily: 'Barlow, sans-serif',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#00A8E1')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = errors.lastName ? '#00A8E1' : '#2A2A2A')}
                  />
                  {errors.lastName && <p className="text-xs mt-1" style={{ color: '#00A8E1', fontFamily: 'Barlow, sans-serif' }}>{errors.lastName}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#8A8A8A', fontFamily: 'Barlow, sans-serif' }}>
                    {t.form.phone} *
                  </label>
                  <p className="text-xs mb-2" style={{ color: '#5A5A5A', fontFamily: 'Barlow, sans-serif' }}>{t.form.phoneHelp}</p>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 text-sm outline-none transition-all"
                    style={{
                      background: '#0C0C0C',
                      border: `1px solid ${errors.phone ? '#00A8E1' : '#2A2A2A'}`,
                      color: '#F0F0F0',
                      fontFamily: 'Barlow, sans-serif',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#00A8E1')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = errors.phone ? '#00A8E1' : '#2A2A2A')}
                  />
                  {errors.phone && <p className="text-xs mt-1" style={{ color: '#00A8E1', fontFamily: 'Barlow, sans-serif' }}>{errors.phone}</p>}
                </div>

                {/* City */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#8A8A8A', fontFamily: 'Barlow, sans-serif' }}>
                    {t.form.city} *
                  </label>
                  <div className="relative">
                    <select
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      className="w-full px-4 py-3 text-sm outline-none appearance-none transition-all"
                      style={{
                        background: '#0C0C0C',
                        border: `1px solid ${errors.city ? '#00A8E1' : '#2A2A2A'}`,
                        color: form.city ? '#F0F0F0' : '#5A5A5A',
                        fontFamily: 'Barlow, sans-serif',
                        cursor: 'pointer',
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = '#00A8E1')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = errors.city ? '#00A8E1' : '#2A2A2A')}
                    >
                      <option value="" disabled style={{ color: '#5A5A5A' }}>{t.form.cityPlaceholder}</option>
                      {GERMAN_CITIES.map((city) => (
                        <option key={city} value={city} style={{ background: '#1A1A1A', color: '#F0F0F0' }}>{city}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5A5A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </div>
                  </div>
                  {errors.city && <p className="text-xs mt-1" style={{ color: '#00A8E1', fontFamily: 'Barlow, sans-serif' }}>{errors.city}</p>}
                </div>

                {/* CAP / Code 95 */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#8A8A8A', fontFamily: 'Barlow, sans-serif' }}>
                    {t.form.capLabel} *
                  </label>
                  <p className="text-xs mb-3" style={{ color: '#5A5A5A', fontFamily: 'Barlow, sans-serif' }}>{t.form.capHelp}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {(['yes', 'no'] as const).map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setForm({ ...form, cap: val })}
                        className="py-3 text-sm font-bold uppercase tracking-widest transition-all"
                        style={{
                          background: form.cap === val ? '#00A8E1' : '#0C0C0C',
                          border: `1px solid ${form.cap === val ? '#00A8E1' : '#2A2A2A'}`,
                          color: form.cap === val ? '#fff' : '#8A8A8A',
                          fontFamily: 'Barlow Condensed, sans-serif',
                          letterSpacing: '0.1em',
                        }}
                      >
                        {val === 'yes' ? t.form.yes : t.form.no}
                      </button>
                    ))}
                  </div>
                  {errors.cap && <p className="text-xs mt-1" style={{ color: '#00A8E1', fontFamily: 'Barlow, sans-serif' }}>{errors.cap}</p>}
                </div>

                {/* Experience */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#8A8A8A', fontFamily: 'Barlow, sans-serif' }}>
                    {t.form.experience} *
                  </label>
                  <p className="text-xs mb-3" style={{ color: '#5A5A5A', fontFamily: 'Barlow, sans-serif' }}>{t.form.experienceHelp}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {(['yes', 'no'] as const).map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setForm({ ...form, experience: val })}
                        className="py-3 text-sm font-bold uppercase tracking-widest transition-all"
                        style={{
                          background: form.experience === val ? '#00A8E1' : '#0C0C0C',
                          border: `1px solid ${form.experience === val ? '#00A8E1' : '#2A2A2A'}`,
                          color: form.experience === val ? '#fff' : '#8A8A8A',
                          fontFamily: 'Barlow Condensed, sans-serif',
                          letterSpacing: '0.1em',
                        }}
                      >
                        {val === 'yes' ? t.form.yes : t.form.no}
                      </button>
                    ))}
                  </div>
                  {errors.experience && <p className="text-xs mt-1" style={{ color: '#00A8E1', fontFamily: 'Barlow, sans-serif' }}>{errors.experience}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 font-black text-sm uppercase tracking-widest transition-all hover:brightness-110 active:scale-95 disabled:opacity-60"
                  style={{
                    background: '#00A8E1',
                    color: '#fff',
                    fontFamily: 'Barlow Condensed, sans-serif',
                    letterSpacing: '0.12em',
                  }}
                >
                  {submitting ? t.form.submitting : t.form.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0A0A0A', borderTop: '1px solid #1A1A1A' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-bold text-lg mb-1" style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#F0F0F0' }}>
                H&amp;Y <span style={{ color: '#00A8E1' }}>TRUCK JOB</span>
              </div>
              <p className="text-xs" style={{ color: '#5A5A5A', fontFamily: 'Barlow, sans-serif' }}>{t.footer.tagline}</p>
            </div>
            <p className="text-xs" style={{ color: '#3A3A3A', fontFamily: 'Barlow, sans-serif' }}>{t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
