import 'server-only';

const dictionaries = {
  ja: () => import('@/dictionaries/ja.json').then((module) => module.default),
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  if (locale === 'en') {
    return dictionaries.en();
  }
  return dictionaries.ja();
};
