export function getCurrentTime() {
  return new Date().toISOString().substring(11, 16)
}

export function getDate() {
  const userLocale = 'ru-RU';

  const dateFormatter = new Intl.DateTimeFormat(userLocale, {
    day: 'numeric',
    month: 'numeric',
    year: '2-digit',
    formatMatcher: "basic"
  });

  return dateFormatter.format(new Date())
}