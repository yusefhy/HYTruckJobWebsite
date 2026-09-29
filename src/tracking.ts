const adsId = 'AW-18417322228';
const conversionDestination = 'AW-18417322228/JIxBCPLgt4odEPSRiM5E';
const storageKey = 'hytruckjob_ads_consent';

type TrackingWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

export function getTrackingConsent(): boolean | null {
  try {
    const choice = localStorage.getItem(storageKey);
    return choice === 'yes' ? true : choice === 'no' ? false : null;
  } catch {
    return null;
  }
}

export function enableAdsTracking() {
  const w = window as TrackingWindow;
  if (w.gtag) return;
  w.dataLayer = w.dataLayer || [];
  w.gtag = (...args: unknown[]) => { w.dataLayer!.push(args); };
  w.gtag('js', new Date());
  w.gtag('config', adsId);
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${adsId}`;
  document.head.appendChild(script);
}

export function saveTrackingConsent(accepted: boolean) {
  try { localStorage.setItem(storageKey, accepted ? 'yes' : 'no'); } catch { /* private mode */ }
  if (accepted) {
    enableAdsTracking();
  } else if ((window as TrackingWindow).gtag) {
    for (const cookie of document.cookie.split(';')) {
      const name = cookie.split('=')[0].trim();
      if (!name.startsWith('_gcl_')) continue;
      document.cookie = `${name}=; Max-Age=0; path=/`;
      document.cookie = `${name}=; Max-Age=0; path=/; domain=hytruckjob.com`;
    }
    window.location.reload();
  }
}

export function trackApplication(lang: string) {
  const w = window as TrackingWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: 'hytruckjob_application_sent', language: lang });
  if (getTrackingConsent() === true) {
    enableAdsTracking();
    w.gtag?.('event', 'conversion', {
      send_to: conversionDestination,
      value: 1,
      currency: 'EUR',
    });
  }
}
