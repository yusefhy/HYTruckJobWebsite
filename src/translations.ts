export type Lang = 'es' | 'en' | 'de' | 'pl' | 'uk' | 'sq' | 'ro' | 'el' | 'ru' | 'sr' | 'ar';

export interface Translation {
  langName: string;
  flag: string;
  dir: 'ltr' | 'rtl';
  nav: {
    apply: string;
  };
  pageTitle: string;
  pageDescription: string;
  germanyBanner: string;
  driveOnly: { title: string; subtitle: string };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    location: string;
  };
  benefits: {
    title: string;
    items: { icon: string; title: string; desc: string }[];
  };
  form: {
    title: string;
    subtitle: string;
    firstName: string;
    lastName: string;
    phone: string;
    phoneHelp: string;
    city: string;
    cityPlaceholder: string;
    capLabel: string;
    capHelp: string;
    yes: string;
    no: string;
    experience: string;
    experienceHelp: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successMsg: string;
    required: string;
    selectOption: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
}

const translations: Record<Lang, Translation> = {
  es: {
    langName: 'Español',
    flag: '🇪🇸',
    dir: 'ltr',
    nav: { apply: 'Solicitar Empleo' },
    pageTitle: 'H&Y Truck Job — Trabajo de camionero en Alemania',
    pageDescription: 'Conductores C+E para Alemania. Contrato indefinido, hasta 3.500€ netos/mes, camiones nuevos Mercedes e Iveco.',
    germanyBanner: '🇩🇪 EMPLEO EXCLUSIVO EN ALEMANIA — No se trabaja en ningún otro país',
    driveOnly: { title: 'Solo conduces. Nada más.', subtitle: 'No cargas, no descargas, no manipulas mercancía. Tu única responsabilidad es llevar el camión del punto A al punto B.' },
    hero: {
      badge: 'Empleo Estable',
      title: 'CONDUCE TU\nFUTURO',
      subtitle: 'Buscamos conductores profesionales con carnet C+E para trabajar en Alemania. Contrato indefinido, camiones nuevos y hasta 3.500€ netos al mes.',
      location: 'Solo en Alemania',
    },
    benefits: {
      title: 'LO QUE OFRECEMOS',
      items: [
        { icon: '💶', title: 'Hasta 3.500€ netos/mes', desc: 'Salario competitivo con pagos puntuales garantizados' },
        { icon: '🚛', title: 'Flota Mercedes & Iveco', desc: 'Camiones totalmente nuevos de última generación' },
        { icon: '📅', title: '5 días semanales', desc: 'Horario estable. La ruta comienza y termina en el mismo punto' },
        { icon: '📝', title: 'Contrato indefinido', desc: 'Empleo estable con las mejores empresas del sector' },
        { icon: '🌍', title: 'Asistencia 24h', desc: 'Soporte en carretera en todos los idiomas, los 7 días' },
        { icon: '📱', title: 'Equipamiento completo', desc: 'Móvil de última generación, GPS y todo el material necesario' },
      ],
    },
    form: {
      title: '¡ÚNETE AL EQUIPO!',
      subtitle: 'Rellena el formulario y te contactamos en menos de 2 horas',
      firstName: 'Nombre',
      lastName: 'Apellidos',
      phone: 'Teléfono de contacto',
      phoneHelp: 'Incluye el prefijo de tu país (ej. +34, +49, +48…)',
      city: '¿Qué ciudad de Alemania prefieres?',
      cityPlaceholder: 'Selecciona una ciudad',
      capLabel: '¿Tienes el CAP en vigor?',
      capHelp: 'Certificado de Aptitud Profesional para conductores',
      yes: 'Sí',
      no: 'No',
      experience: '¿Tienes experiencia conduciendo camiones de larga distancia?',
      experienceHelp: 'Camión articulado, tráiler, convoy, etc.',
      submit: 'ENVIAR SOLICITUD',
      submitting: 'ENVIANDO...',
      successTitle: '¡Solicitud enviada!',
      successMsg: 'Hemos recibido tus datos. Nuestro equipo se pondrá en contacto contigo en menos de 2 horas.',
      required: 'Este campo es obligatorio',
      selectOption: 'Selecciona una opción',
    },
    footer: {
      tagline: 'Conectando conductores profesionales con las mejores empresas de Alemania.',
      rights: '© 2026 H&Y Truck Job. Todos los derechos reservados.',
    },
  },

  en: {
    langName: 'English',
    flag: '🇬🇧',
    dir: 'ltr',
    nav: { apply: 'Apply Now' },
    pageTitle: 'H&Y Truck Job — Truck driver jobs in Germany',
    pageDescription: 'C+E drivers wanted for Germany. Permanent contract, up to €3,500 net/month, brand-new Mercedes & Iveco trucks.',
    germanyBanner: '🇩🇪 GERMANY ONLY — This position is exclusively based in Germany',
    driveOnly: { title: 'You drive. Nothing else.', subtitle: 'No loading, no unloading, no handling freight. Your only responsibility is to take the truck from point A to point B.' },
    hero: {
      badge: 'Stable Employment',
      title: 'DRIVE TOWARD\nYOUR FUTURE',
      subtitle: 'We are looking for professional drivers with a C+E licence to work in Germany. Permanent contract, brand-new trucks and up to €3,500 net per month.',
      location: 'Germany only',
    },
    benefits: {
      title: 'WHAT WE OFFER',
      items: [
        { icon: '💶', title: 'Up to €3,500 net/month', desc: 'Competitive salary with guaranteed on-time payments' },
        { icon: '🚛', title: 'Mercedes & Iveco fleet', desc: 'Brand-new vehicles of the latest generation' },
        { icon: '📅', title: '5 days per week', desc: 'Stable schedule. Route starts and ends at the same location' },
        { icon: '📝', title: 'Permanent contract', desc: 'Stable employment with the best companies in the sector' },
        { icon: '🌍', title: '24/7 roadside assistance', desc: 'Support in all languages, 7 days a week' },
        { icon: '📱', title: 'Full equipment', desc: 'Latest-generation smartphone, GPS and all necessary materials' },
      ],
    },
    form: {
      title: 'JOIN THE TEAM!',
      subtitle: 'Fill in the form and we will contact you in less than 2 hours',
      firstName: 'First name',
      lastName: 'Last name',
      phone: 'Contact phone number',
      phoneHelp: 'Include your country code (e.g. +44, +49, +48…)',
      city: 'Which German city do you prefer?',
      cityPlaceholder: 'Select a city',
      capLabel: 'Do you hold a valid Code 95 (CPC)?',
      capHelp: 'Certificate of Professional Competence for professional drivers',
      yes: 'Yes',
      no: 'No',
      experience: 'Do you have experience driving long-distance trucks?',
      experienceHelp: 'Articulated lorry, trailer, heavy transport, etc.',
      submit: 'SEND APPLICATION',
      submitting: 'SENDING...',
      successTitle: 'Application sent!',
      successMsg: 'We have received your details. Our team will contact you in less than 2 hours.',
      required: 'This field is required',
      selectOption: 'Select an option',
    },
    footer: {
      tagline: 'Connecting professional drivers with the best companies in Germany.',
      rights: '© 2026 H&Y Truck Job. All rights reserved.',
    },
  },

  de: {
    langName: 'Deutsch',
    flag: '🇩🇪',
    dir: 'ltr',
    nav: { apply: 'Jetzt bewerben' },
    pageTitle: 'H&Y Truck Job — LKW-Fahrer Jobs in Deutschland',
    pageDescription: 'C+E-Fahrer gesucht für Deutschland. Unbefristeter Vertrag, bis zu 3.500€ netto/Monat, neue Mercedes & Iveco LKW.',
    germanyBanner: '🇩🇪 NUR IN DEUTSCHLAND — Diese Stelle ist ausschließlich in Deutschland',
    driveOnly: { title: 'Du fährst. Sonst nichts.', subtitle: 'Kein Laden, kein Entladen, keine Frachthandhabung. Deine einzige Aufgabe ist es, den LKW von A nach B zu bringen.' },
    hero: {
      badge: 'Stabile Arbeit',
      title: 'FAHRE IN\nDEINE ZUKUNFT',
      subtitle: 'Wir suchen professionelle Fahrer mit C+E-Führerschein für Arbeit in Deutschland. Unbefristeter Vertrag, neue LKW und bis zu 3.500€ netto im Monat.',
      location: 'Nur in Deutschland',
    },
    benefits: {
      title: 'WAS WIR BIETEN',
      items: [
        { icon: '💶', title: 'Bis zu 3.500€ netto/Monat', desc: 'Wettbewerbsfähiges Gehalt mit garantierten pünktlichen Zahlungen' },
        { icon: '🚛', title: 'Mercedes & Iveco Flotte', desc: 'Brandneue Fahrzeuge der neuesten Generation' },
        { icon: '📅', title: '5 Tage pro Woche', desc: 'Stabiler Zeitplan. Route beginnt und endet am gleichen Ort' },
        { icon: '📝', title: 'Unbefristeter Vertrag', desc: 'Stabile Beschäftigung bei den besten Unternehmen der Branche' },
        { icon: '🌍', title: '24h Pannenhilfe', desc: 'Straßenunterstützung in allen Sprachen, 7 Tage die Woche' },
        { icon: '📱', title: 'Komplette Ausrüstung', desc: 'Neuestes Smartphone, GPS und alle notwendigen Materialien' },
      ],
    },
    form: {
      title: 'JETZT BEWERBEN!',
      subtitle: 'Füllen Sie das Formular aus und wir melden uns innerhalb von 2 Stunden',
      firstName: 'Vorname',
      lastName: 'Nachname',
      phone: 'Telefonnummer',
      phoneHelp: 'Bitte mit Ländervorwahl angeben (z.B. +49, +48, +34…)',
      city: 'Welche deutsche Stadt bevorzugst du?',
      cityPlaceholder: 'Stadt auswählen',
      capLabel: 'Haben Sie den Schlüssel 95 (Code 95)?',
      capHelp: 'Berufliche Qualifikation für Berufskraftfahrer',
      yes: 'Ja',
      no: 'Nein',
      experience: 'Haben Sie Erfahrung als Fernfahrer?',
      experienceHelp: 'Sattelzug, Trailer, Schwertransport usw.',
      submit: 'BEWERBUNG SENDEN',
      submitting: 'WIRD GESENDET...',
      successTitle: 'Bewerbung eingegangen!',
      successMsg: 'Wir haben Ihre Daten erhalten. Unser Team wird sich innerhalb von 2 Stunden bei Ihnen melden.',
      required: 'Dieses Feld ist erforderlich',
      selectOption: 'Option auswählen',
    },
    footer: {
      tagline: 'Professionelle Fahrer mit den besten deutschen Unternehmen verbinden.',
      rights: '© 2026 H&Y Truck Job. Alle Rechte vorbehalten.',
    },
  },

  pl: {
    langName: 'Polski',
    flag: '🇵🇱',
    dir: 'ltr',
    nav: { apply: 'Aplikuj teraz' },
    pageTitle: 'H&Y Truck Job — Praca kierowcy ciężarówki w Niemczech',
    pageDescription: 'Szukamy kierowców C+E do Niemiec. Umowa na czas nieokreślony, do 3.500€ netto/miesiąc, nowe ciężarówki Mercedes i Iveco.',
    germanyBanner: '🇩🇪 TYLKO W NIEMCZECH — To stanowisko jest wyłącznie w Niemczech',
    driveOnly: { title: 'Tylko prowadzisz. Nic więcej.', subtitle: 'Bez załadunku, bez rozładunku, bez obsługi towaru. Twój jedyny obowiązek to prowadzenie ciężarówki z punktu A do punktu B.' },
    hero: {
      badge: 'Stabilna praca',
      title: 'JEDŹ PO\nSWOJĄ PRZYSZŁOŚĆ',
      subtitle: 'Szukamy zawodowych kierowców z prawem jazdy C+E do pracy w Niemczech. Umowa na czas nieokreślony, nowe ciężarówki i do 3.500€ netto miesięcznie.',
      location: 'Tylko w Niemczech',
    },
    benefits: {
      title: 'CO OFERUJEMY',
      items: [
        { icon: '💶', title: 'Do 3.500€ netto/miesiąc', desc: 'Konkurencyjne wynagrodzenie z gwarantowanymi terminowymi płatnościami' },
        { icon: '🚛', title: 'Flota Mercedes & Iveco', desc: 'Całkowicie nowe pojazdy najnowszej generacji' },
        { icon: '📅', title: '5 dni w tygodniu', desc: 'Stabilny harmonogram. Trasa zaczyna i kończy się w tym samym miejscu' },
        { icon: '📝', title: 'Umowa na czas nieokreślony', desc: 'Stabilne zatrudnienie w najlepszych firmach branży' },
        { icon: '🌍', title: 'Pomoc 24h', desc: 'Wsparcie drogowe we wszystkich językach, 7 dni w tygodniu' },
        { icon: '📱', title: 'Pełne wyposażenie', desc: 'Najnowszy smartfon, GPS i wszystkie niezbędne materiały' },
      ],
    },
    form: {
      title: 'DOŁĄCZ DO ZESPOŁU!',
      subtitle: 'Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 2 godzin',
      firstName: 'Imię',
      lastName: 'Nazwisko',
      phone: 'Numer telefonu',
      phoneHelp: 'Podaj numer kierunkowy kraju (np. +48, +49, +34…)',
      city: 'Które niemieckie miasto preferujesz?',
      cityPlaceholder: 'Wybierz miasto',
      capLabel: 'Czy posiadasz Kod 95 (Kwalifikacja wstępna)?',
      capHelp: 'Kwalifikacja zawodowa dla kierowców zawodowych',
      yes: 'Tak',
      no: 'Nie',
      experience: 'Czy masz doświadczenie w prowadzeniu ciężarówek dalekobieżnych?',
      experienceHelp: 'Naczepa, ciągnik siodłowy, transport ciężki itp.',
      submit: 'WYŚLIJ ZGŁOSZENIE',
      submitting: 'WYSYŁANIE...',
      successTitle: 'Zgłoszenie wysłane!',
      successMsg: 'Otrzymaliśmy Twoje dane. Nasz zespół skontaktuje się z Tobą w ciągu 2 godzin.',
      required: 'To pole jest wymagane',
      selectOption: 'Wybierz opcję',
    },
    footer: {
      tagline: 'Łączymy zawodowych kierowców z najlepszymi firmami w Niemczech.',
      rights: '© 2026 H&Y Truck Job. Wszelkie prawa zastrzeżone.',
    },
  },

  uk: {
    langName: 'Українська',
    flag: '🇺🇦',
    dir: 'ltr',
    nav: { apply: 'Подати заявку' },
    pageTitle: 'H&Y Truck Job — Робота водія вантажівки в Німеччині',
    pageDescription: 'Шукаємо водіїв C+E для Німеччини. Безстроковий контракт, до 3.500€ нетто/місяць, нові Mercedes та Iveco.',
    germanyBanner: '🇩🇪 ТІЛЬКИ В НІМЕЧЧИНІ — Ця вакансія виключно в Німеччині',
    driveOnly: { title: 'Тільки керуєш. Більше нічого.', subtitle: 'Без завантаження, без розвантаження, без обробки вантажу. Твій єдиний обов\'язок — везти вантажівку з точки А в точку Б.' },
    hero: {
      badge: 'Стабільна робота',
      title: 'КЕРМУЙ ДО\nСВОГО МАЙБУТНЬОГО',
      subtitle: 'Шукаємо професійних водіїв з правами C+E для роботи в Німеччині. Безстроковий контракт, нові вантажівки та до 3.500€ нетто на місяць.',
      location: 'Тільки в Німеччині',
    },
    benefits: {
      title: 'ЩО МИ ПРОПОНУЄМО',
      items: [
        { icon: '💶', title: 'До 3.500€ нетто/місяць', desc: 'Конкурентна заробітна плата з гарантованими своєчасними виплатами' },
        { icon: '🚛', title: 'Флот Mercedes & Iveco', desc: 'Абсолютно нові автомобілі останнього покоління' },
        { icon: '📅', title: '5 днів на тиждень', desc: 'Стабільний графік. Маршрут починається і закінчується в одному місці' },
        { icon: '📝', title: 'Безстроковий контракт', desc: 'Стабільна зайнятість у найкращих компаніях галузі' },
        { icon: '🌍', title: 'Допомога 24/7', desc: 'Дорожня підтримка всіма мовами, 7 днів на тиждень' },
        { icon: '📱', title: 'Повне оснащення', desc: 'Новітній смартфон, GPS та всі необхідні матеріали' },
      ],
    },
    form: {
      title: 'ПРИЄДНУЙСЯ ДО КОМАНДИ!',
      subtitle: 'Заповніть форму і ми зв\'яжемося з вами протягом 2 годин',
      firstName: 'Ім\'я',
      lastName: 'Прізвище',
      phone: 'Контактний телефон',
      phoneHelp: 'Вкажіть код країни (напр. +380, +49, +48…)',
      city: 'Яке німецьке місто ви надаєте перевагу?',
      cityPlaceholder: 'Оберіть місто',
      capLabel: 'Чи є у вас Код 95 (КВД)?',
      capHelp: 'Кваліфікаційне посвідчення водія для професійних водіїв',
      yes: 'Так',
      no: 'Ні',
      experience: 'Чи є у вас досвід керування вантажівками на далекі відстані?',
      experienceHelp: 'Сідельний тягач, причіп, важкий транспорт тощо',
      submit: 'НАДІСЛАТИ ЗАЯВКУ',
      submitting: 'НАДСИЛАННЯ...',
      successTitle: 'Заявку надіслано!',
      successMsg: 'Ми отримали ваші дані. Наша команда зв\'яжеться з вами протягом 2 годин.',
      required: 'Це поле є обов\'язковим',
      selectOption: 'Виберіть варіант',
    },
    footer: {
      tagline: 'З\'єднуємо професійних водіїв з найкращими компаніями Німеччини.',
      rights: '© 2026 H&Y Truck Job. Всі права захищені.',
    },
  },

  sq: {
    langName: 'Shqip',
    flag: '🇦🇱',
    dir: 'ltr',
    nav: { apply: 'Apliko tani' },
    pageTitle: 'H&Y Truck Job — Punë shofer kamioni në Gjermani',
    pageDescription: 'Kërkojmë shoferë C+E për Gjermani. Kontratë e pakufizuar, deri në 3.500€ neto/muaj, kamionë të rinj Mercedes dhe Iveco.',
    germanyBanner: '🇩🇪 VETËM NË GJERMANI — Ky pozicion është ekskluzivisht në Gjermani',
    driveOnly: { title: 'Vetëm drejtoni. Asgjë tjetër.', subtitle: 'Pa ngarkim, pa shkarkim, pa trajtim të ngarkesës. Përgjegjësia juaj e vetme është të çoni kamionin nga pika A në pikën B.' },
    hero: {
      badge: 'Punë e qëndrueshme',
      title: 'DREJTO DREJT\nSË ARDHMES TËNDE',
      subtitle: 'Kërkojmë shoferë profesionistë me patentë C+E për të punuar në Gjermani. Kontratë e pakufizuar, kamionë të rinj dhe deri në 3.500€ neto në muaj.',
      location: 'Vetëm në Gjermani',
    },
    benefits: {
      title: 'ÇKA OFROJMË',
      items: [
        { icon: '💶', title: 'Deri në 3.500€ neto/muaj', desc: 'Pagë konkurruese me pagesa të garantuara në kohë' },
        { icon: '🚛', title: 'Flotë Mercedes & Iveco', desc: 'Automjete krejtësisht të reja të gjeneratës së fundit' },
        { icon: '📅', title: '5 ditë në javë', desc: 'Orar i qëndrueshëm. Rruga fillon dhe mbaron në të njëjtin vend' },
        { icon: '📝', title: 'Kontratë e pakufizuar', desc: 'Punësim i qëndrueshëm me kompanitë më të mira të sektorit' },
        { icon: '🌍', title: 'Ndihmë 24 orë', desc: 'Mbështetje rrugore në të gjitha gjuhët, 7 ditë në javë' },
        { icon: '📱', title: 'Pajisje të plota', desc: 'Smartphone i fundit, GPS dhe të gjitha materialet e nevojshme' },
      ],
    },
    form: {
      title: 'BASHKOHU ME EKIPIN!',
      subtitle: 'Plotëso formularin dhe do të kontaktohemi brenda 2 orëve',
      firstName: 'Emri',
      lastName: 'Mbiemri',
      phone: 'Numri i telefonit',
      phoneHelp: 'Shto prefiksin e vendit tënd (p.sh. +355, +49, +34…)',
      city: 'Cilën qytet gjerman preferoni?',
      cityPlaceholder: 'Zgjidhni një qytet',
      capLabel: 'A keni Kodin 95 (CPC)?',
      capHelp: 'Certifikata e kualifikimit profesional për shoferët',
      yes: 'Po',
      no: 'Jo',
      experience: 'A keni përvojë në drejtimin e kamionëve të distancës së gjatë?',
      experienceHelp: 'Gjysmërimorkiator, rimorkio, transport i rëndë etj.',
      submit: 'DËRGO APLIKIMIN',
      submitting: 'DUKE DËRGUAR...',
      successTitle: 'Aplikimi u dërgua!',
      successMsg: 'Kemi marrë të dhënat tuaja. Ekipi ynë do të kontaktojë me ju brenda 2 orëve.',
      required: 'Ky fushë është e detyrueshme',
      selectOption: 'Zgjidhni një opsion',
    },
    footer: {
      tagline: 'Lidhim shoferët profesionistë me kompanitë më të mira të Gjermanisë.',
      rights: '© 2026 H&Y Truck Job. Të gjitha të drejtat të rezervuara.',
    },
  },

  ro: {
    langName: 'Română',
    flag: '🇷🇴',
    dir: 'ltr',
    nav: { apply: 'Aplică acum' },
    pageTitle: 'H&Y Truck Job — Loc de muncă șofer camion în Germania',
    pageDescription: 'Căutăm șoferi C+E pentru Germania. Contract pe termen nedeterminat, până la 3.500€ net/lună, camioane noi Mercedes și Iveco.',
    germanyBanner: '🇩🇪 DOAR ÎN GERMANIA — Această poziție este exclusiv în Germania',
    driveOnly: { title: 'Doar conduci. Nimic altceva.', subtitle: 'Fără încărcare, fără descărcare, fără manipularea mărfii. Singura ta responsabilitate este să duci camionul din punctul A în punctul B.' },
    hero: {
      badge: 'Loc de muncă stabil',
      title: 'CONDUCE SPRE\nVIITORUL TĂU',
      subtitle: 'Căutăm șoferi profesioniști cu permis C+E pentru a lucra în Germania. Contract pe perioadă nedeterminată, camioane noi și până la 3.500€ net pe lună.',
      location: 'Doar în Germania',
    },
    benefits: {
      title: 'CE OFERIM',
      items: [
        { icon: '💶', title: 'Până la 3.500€ net/lună', desc: 'Salariu competitiv cu plăți garantate la timp' },
        { icon: '🚛', title: 'Flotă Mercedes & Iveco', desc: 'Vehicule complet noi din ultima generație' },
        { icon: '📅', title: '5 zile pe săptămână', desc: 'Program stabil. Ruta începe și se termină în același loc' },
        { icon: '📝', title: 'Contract pe termen nedeterminat', desc: 'Angajare stabilă cu cele mai bune companii din sector' },
        { icon: '🌍', title: 'Asistență 24h', desc: 'Suport rutier în toate limbile, 7 zile pe săptămână' },
        { icon: '📱', title: 'Echipament complet', desc: 'Smartphone de ultimă generație, GPS și toate materialele necesare' },
      ],
    },
    form: {
      title: 'ALĂTURĂ-TE ECHIPEI!',
      subtitle: 'Completează formularul și te contactăm în mai puțin de 2 ore',
      firstName: 'Prenume',
      lastName: 'Nume',
      phone: 'Telefon de contact',
      phoneHelp: 'Includeți prefixul de țară (ex. +40, +49, +34…)',
      city: 'Ce oraș german preferi?',
      cityPlaceholder: 'Selectează un oraș',
      capLabel: 'Aveți Codul 95 (CPC) valabil?',
      capHelp: 'Certificat de calificare profesională pentru șoferi',
      yes: 'Da',
      no: 'Nu',
      experience: 'Aveți experiență în conducerea camioanelor de lungă distanță?',
      experienceHelp: 'Camion articulat, trailer, transport greu etc.',
      submit: 'TRIMITE APLICAȚIA',
      submitting: 'SE TRIMITE...',
      successTitle: 'Aplicație trimisă!',
      successMsg: 'Am primit datele dvs. Echipa noastră vă va contacta în mai puțin de 2 ore.',
      required: 'Acest câmp este obligatoriu',
      selectOption: 'Selectați o opțiune',
    },
    footer: {
      tagline: 'Conectăm șoferi profesioniști cu cele mai bune companii din Germania.',
      rights: '© 2026 H&Y Truck Job. Toate drepturile rezervate.',
    },
  },

  el: {
    langName: 'Ελληνικά',
    flag: '🇬🇷',
    dir: 'ltr',
    nav: { apply: 'Κάντε αίτηση' },
    pageTitle: 'H&Y Truck Job — Δουλειά οδηγού φορτηγού στη Γερμανία',
    pageDescription: 'Ζητούνται οδηγοί C+E για Γερμανία. Αόριστη σύμβαση, έως 3.500€ καθαρά/μήνα, νέα φορτηγά Mercedes και Iveco.',
    germanyBanner: '🇩🇪 ΜΟΝΟ ΣΤΗ ΓΕΡΜΑΝΙΑ — Αυτή η θέση είναι αποκλειστικά στη Γερμανία',
    driveOnly: { title: 'Μόνο οδηγείς. Τίποτα άλλο.', subtitle: 'Χωρίς φόρτωση, χωρίς εκφόρτωση, χωρίς χειρισμό φορτίου. Η μοναδική σου ευθύνη είναι να οδηγείς το φορτηγό από το σημείο Α στο σημείο Β.' },
    hero: {
      badge: 'Σταθερή εργασία',
      title: 'ΟΔΗΓΗΣΕ ΠΡΟΣ\nΤΟ ΜΕΛΛΟΝ ΣΟΥ',
      subtitle: 'Αναζητάμε επαγγελματίες οδηγούς με δίπλωμα C+E για εργασία στη Γερμανία. Αόριστη σύμβαση, νέα φορτηγά και έως 3.500€ καθαρά το μήνα.',
      location: 'Μόνο στη Γερμανία',
    },
    benefits: {
      title: 'ΤΙ ΠΡΟΣΦΕΡΟΥΜΕ',
      items: [
        { icon: '💶', title: 'Έως 3.500€ καθαρά/μήνα', desc: 'Ανταγωνιστικός μισθός με εγγυημένες έγκαιρες πληρωμές' },
        { icon: '🚛', title: 'Στόλος Mercedes & Iveco', desc: 'Ολοκαίνουρια οχήματα τελευταίας γενιάς' },
        { icon: '📅', title: '5 ημέρες την εβδομάδα', desc: 'Σταθερό πρόγραμμα. Η διαδρομή αρχίζει και τελειώνει στο ίδιο σημείο' },
        { icon: '📝', title: 'Αόριστη σύμβαση', desc: 'Σταθερή απασχόληση με τις καλύτερες εταιρείες του κλάδου' },
        { icon: '🌍', title: 'Βοήθεια 24/7', desc: 'Οδική υποστήριξη σε όλες τις γλώσσες, 7 ημέρες την εβδομάδα' },
        { icon: '📱', title: 'Πλήρης εξοπλισμός', desc: 'Τελευταίας τεχνολογίας smartphone, GPS και όλα τα απαραίτητα υλικά' },
      ],
    },
    form: {
      title: 'ΓΙΝΕ ΜΕΛΟΣ ΤΗΣ ΟΜΑΔΑΣ!',
      subtitle: 'Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας σε λιγότερο από 2 ώρες',
      firstName: 'Όνομα',
      lastName: 'Επώνυμο',
      phone: 'Τηλέφωνο επικοινωνίας',
      phoneHelp: 'Συμπεριλάβετε τον κωδικό χώρας (π.χ. +30, +49, +34…)',
      city: 'Ποια γερμανική πόλη προτιμάτε;',
      cityPlaceholder: 'Επιλέξτε πόλη',
      capLabel: 'Έχετε το Κωδικό 95 (ΠΕΙ) σε ισχύ;',
      capHelp: 'Πιστοποιητικό επαγγελματικής επάρκειας για οδηγούς',
      yes: 'Ναι',
      no: 'Όχι',
      experience: 'Έχετε εμπειρία στην οδήγηση φορτηγών μεγάλων αποστάσεων;',
      experienceHelp: 'Αρθρωτό όχημα, ρυμουλκούμενο, βαρύ μεταφορικό κ.λπ.',
      submit: 'ΥΠΟΒΟΛΗ ΑΙΤΗΣΗΣ',
      submitting: 'ΑΠΟΣΤΟΛΗ...',
      successTitle: 'Η αίτηση στάλθηκε!',
      successMsg: 'Λάβαμε τα στοιχεία σας. Η ομάδα μας θα επικοινωνήσει μαζί σας σε λιγότερο από 2 ώρες.',
      required: 'Αυτό το πεδίο είναι υποχρεωτικό',
      selectOption: 'Επιλέξτε μια επιλογή',
    },
    footer: {
      tagline: 'Συνδέουμε επαγγελματίες οδηγούς με τις καλύτερες εταιρείες της Γερμανίας.',
      rights: '© 2026 H&Y Truck Job. Όλα τα δικαιώματα κατοχυρωμένα.',
    },
  },

  ru: {
    langName: 'Русский',
    flag: '🇷🇺',
    dir: 'ltr',
    nav: { apply: 'Подать заявку' },
    pageTitle: 'H&Y Truck Job — Работа водителя грузовика в Германии',
    pageDescription: 'Ищем водителей C+E для Германии. Бессрочный контракт, до 3.500€ нетто/месяц, новые Mercedes и Iveco.',
    germanyBanner: '🇩🇪 ТОЛЬКО В ГЕРМАНИИ — Эта вакансия исключительно в Германии',
    driveOnly: { title: 'Только едешь. Ничего больше.', subtitle: 'Без погрузки, без разгрузки, без работы с грузом. Твоя единственная задача — везти грузовик из точки А в точку Б.' },
    hero: {
      badge: 'Стабильная работа',
      title: 'ВЕДИ К СВОЕМУ\nБУДУЩЕМУ',
      subtitle: 'Ищем профессиональных водителей с правами C+E для работы в Германии. Бессрочный контракт, новые грузовики и до 3.500€ нетто в месяц.',
      location: 'Только в Германии',
    },
    benefits: {
      title: 'ЧТО МЫ ПРЕДЛАГАЕМ',
      items: [
        { icon: '💶', title: 'До 3.500€ нетто/месяц', desc: 'Конкурентная зарплата с гарантированными своевременными выплатами' },
        { icon: '🚛', title: 'Автопарк Mercedes & Iveco', desc: 'Абсолютно новые автомобили последнего поколения' },
        { icon: '📅', title: '5 дней в неделю', desc: 'Стабильный график. Маршрут начинается и заканчивается в одном месте' },
        { icon: '📝', title: 'Бессрочный контракт', desc: 'Стабильная занятость в лучших компаниях отрасли' },
        { icon: '🌍', title: 'Помощь 24/7', desc: 'Дорожная поддержка на всех языках, 7 дней в неделю' },
        { icon: '📱', title: 'Полное оснащение', desc: 'Новейший смартфон, GPS и все необходимые материалы' },
      ],
    },
    form: {
      title: 'ПРИСОЕДИНЯЙСЯ К КОМАНДЕ!',
      subtitle: 'Заполните форму и мы свяжемся с вами в течение 2 часов',
      firstName: 'Имя',
      lastName: 'Фамилия',
      phone: 'Контактный телефон',
      phoneHelp: 'Укажите код страны (напр. +7, +49, +34…)',
      city: 'Какой немецкий город вы предпочитаете?',
      cityPlaceholder: 'Выберите город',
      capLabel: 'Есть ли у вас Код 95 (КВД)?',
      capHelp: 'Квалификационное удостоверение водителя для профессиональных водителей',
      yes: 'Да',
      no: 'Нет',
      experience: 'Есть ли у вас опыт управления дальнобойными грузовиками?',
      experienceHelp: 'Седельный тягач, полуприцеп, тяжёлый транспорт и т.д.',
      submit: 'ОТПРАВИТЬ ЗАЯВКУ',
      submitting: 'ОТПРАВКА...',
      successTitle: 'Заявка отправлена!',
      successMsg: 'Мы получили ваши данные. Наша команда свяжется с вами в течение 2 часов.',
      required: 'Это поле обязательно для заполнения',
      selectOption: 'Выберите вариант',
    },
    footer: {
      tagline: 'Соединяем профессиональных водителей с лучшими компаниями Германии.',
      rights: '© 2026 H&Y Truck Job. Все права защищены.',
    },
  },

  sr: {
    langName: 'Srpski',
    flag: '🇷🇸',
    dir: 'ltr',
    nav: { apply: 'Prijavi se' },
    pageTitle: 'H&Y Truck Job — Posao vozača kamiona u Nemačkoj',
    pageDescription: 'Tražimo vozače C+E za Nemačku. Ugovor na neodređeno, do 3.500€ neto/mesečno, novi Mercedes i Iveco kamioni.',
    germanyBanner: '🇩🇪 SAMO U NEMAČKOJ — Ova pozicija je isključivo u Nemačkoj',
    driveOnly: { title: 'Samo voziš. Ništa drugo.', subtitle: 'Bez utovara, bez istovara, bez rukovanja teretom. Tvoja jedina odgovornost je da voziš kamion od tačke A do tačke B.' },
    hero: {
      badge: 'Stabilno zaposlenje',
      title: 'VOZI KA\nSVOJOJ BUDUĆNOSTI',
      subtitle: 'Tražimo profesionalne vozače sa C+E vozačkom dozvolom za rad u Nemačkoj. Ugovor na neodređeno vreme, novi kamioni i do 3.500€ neto mesečno.',
      location: 'Samo u Nemačkoj',
    },
    benefits: {
      title: 'ŠTA NUDIMO',
      items: [
        { icon: '💶', title: 'Do 3.500€ neto/mesečno', desc: 'Konkurentna plata sa garantovanim blagovremenim isplatama' },
        { icon: '🚛', title: 'Vozni park Mercedes & Iveco', desc: 'Potpuno nova vozila najnovije generacije' },
        { icon: '📅', title: '5 dana nedeljno', desc: 'Stabilan raspored. Ruta počinje i završava na istom mestu' },
        { icon: '📝', title: 'Ugovor na neodređeno', desc: 'Stabilno zaposlenje u najboljim kompanijama sektora' },
        { icon: '🌍', title: 'Pomoć 24h', desc: 'Podrška na putu na svim jezicima, 7 dana nedeljno' },
        { icon: '📱', title: 'Kompletna oprema', desc: 'Najnoviji smartphone, GPS i svi potrebni materijali' },
      ],
    },
    form: {
      title: 'PRIDRUŽI SE TIMU!',
      subtitle: 'Popuni formular i kontaktiraćemo te u roku od 2 sata',
      firstName: 'Ime',
      lastName: 'Prezime',
      phone: 'Kontakt telefon',
      phoneHelp: 'Uključi pozivni broj države (npr. +381, +49, +34…)',
      city: 'Koji njemački grad preferiraš?',
      cityPlaceholder: 'Izaberi grad',
      capLabel: 'Imaš li Kod 95 (CPC) na snazi?',
      capHelp: 'Sertifikat o profesionalnoj kompetentnosti za vozače',
      yes: 'Da',
      no: 'Ne',
      experience: 'Imaš li iskustvo u vožnji kamiona na dugim relacijama?',
      experienceHelp: 'Zglobni kamion, prikolica, teški transport itd.',
      submit: 'POŠALJI PRIJAVU',
      submitting: 'SLANJE...',
      successTitle: 'Prijava je poslata!',
      successMsg: 'Primili smo tvoje podatke. Naš tim će te kontaktirati u roku od 2 sata.',
      required: 'Ovo polje je obavezno',
      selectOption: 'Izaberi opciju',
    },
    footer: {
      tagline: 'Povezujemo profesionalne vozače sa najboljim kompanijama u Nemačkoj.',
      rights: '© 2026 H&Y Truck Job. Sva prava zadržana.',
    },
  },

  ar: {
    langName: 'العربية',
    flag: '🇸🇦',
    dir: 'rtl',
    nav: { apply: 'قدّم الآن' },
    pageTitle: 'H&Y Truck Job — وظيفة سائق شاحنة في ألمانيا',
    pageDescription: 'نبحث عن سائقين C+E لألمانيا. عقد دائم، حتى 3.500€ صافٍ/شهر، شاحنات Mercedes وIveco جديدة.',
    germanyBanner: '🇩🇪 في ألمانيا حصراً — هذا المنصب مخصص لألمانيا فقط',
    driveOnly: { title: 'فقط تقود. لا شيء آخر.', subtitle: 'لا تحميل، لا تفريغ، لا تعامل مع البضائع. مسؤوليتك الوحيدة هي قيادة الشاحنة من النقطة أ إلى النقطة ب.' },
    hero: {
      badge: 'عمل مستقر',
      title: 'قُد نحو\nمستقبلك',
      subtitle: 'نبحث عن سائقين محترفين بتصريح قيادة C+E للعمل في ألمانيا. عقد دائم، شاحنات جديدة وحتى 3.500€ صافٍ شهرياً.',
      location: 'في ألمانيا فقط',
    },
    benefits: {
      title: 'ما نقدمه',
      items: [
        { icon: '💶', title: 'حتى 3.500€ صافٍ/شهر', desc: 'راتب تنافسي مع ضمان الدفع في الموعد المحدد' },
        { icon: '🚛', title: 'أسطول Mercedes & Iveco', desc: 'مركبات جديدة كلياً من أحدث جيل' },
        { icon: '📅', title: '5 أيام أسبوعياً', desc: 'جدول مستقر. يبدأ الطريق وينتهي في نفس المكان' },
        { icon: '📝', title: 'عقد دائم', desc: 'توظيف مستقر مع أفضل شركات القطاع' },
        { icon: '🌍', title: 'مساعدة 24/7', desc: 'دعم على الطريق بجميع اللغات، 7 أيام في الأسبوع' },
        { icon: '📱', title: 'معدات كاملة', desc: 'هاتف ذكي من أحدث جيل، GPS وجميع المواد اللازمة' },
      ],
    },
    form: {
      title: 'انضم إلى الفريق!',
      subtitle: 'أكمل النموذج وسنتصل بك خلال ساعتين',
      firstName: 'الاسم',
      lastName: 'اللقب',
      phone: 'رقم الهاتف',
      phoneHelp: 'أضف مفتاح الدولة (مثل +966، +49، +34…)',
      city: 'أي مدينة ألمانية تفضل؟',
      cityPlaceholder: 'اختر مدينة',
      capLabel: 'هل لديك الرمز 95 (CPC) ساري المفعول؟',
      capHelp: 'شهادة الكفاءة المهنية للسائقين المحترفين',
      yes: 'نعم',
      no: 'لا',
      experience: 'هل لديك خبرة في قيادة شاحنات الرحلات الطويلة؟',
      experienceHelp: 'شاحنة مفصلية، مقطورة، نقل ثقيل إلخ.',
      submit: 'إرسال الطلب',
      submitting: 'جارٍ الإرسال...',
      successTitle: 'تم إرسال الطلب!',
      successMsg: 'استلمنا بياناتك. سيتصل بك فريقنا خلال ساعتين.',
      required: 'هذا الحقل مطلوب',
      selectOption: 'اختر خياراً',
    },
    footer: {
      tagline: 'نربط السائقين المحترفين بأفضل الشركات في ألمانيا.',
      rights: '© 2026 H&Y Truck Job. جميع الحقوق محفوظة.',
    },
  },
};

export const langPaths: Record<Lang, string> = {
  es: '/',
  en: '/en',
  de: '/de',
  pl: '/pl',
  uk: '/uk',
  sq: '/sq',
  ro: '/ro',
  el: '/el',
  ru: '/ru',
  sr: '/sr',
  ar: '/ar',
};

export const langOrder: Lang[] = ['es', 'en', 'de', 'pl', 'uk', 'sq', 'ro', 'el', 'ru', 'sr', 'ar'];

export default translations;
