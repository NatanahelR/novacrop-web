import es from './es.json';
import en from './en.json';

export type Lang = 'es' | 'en';

const translations = { es, en };

export function t(lang: Lang) {
  return translations[lang];
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'es';
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}

export function getAlternatePath(url: URL): string {
  const lang = getLangFromUrl(url);
  if (lang === 'es') {
    return url.pathname.replace(/^\/es/, '/en') || '/en';
  }
  return url.pathname.replace(/^\/en/, '/es') || '/es';
}
