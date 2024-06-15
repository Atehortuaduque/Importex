const languages = [
  { icon: '🇺🇸 ', label: 'English', value: 'en_us' },
  { icon: '🇪🇸 ', label: 'Spanish', value: 'es_es' },
];

export const langCode = () => {
  const lang = Intl.DateTimeFormat().resolvedOptions().locale;
  const value = languages.find((l) => l.value.slice(0, 2) === lang.slice(0, 2))?.value || 'en_us';
  return value;
};

export default languages;
