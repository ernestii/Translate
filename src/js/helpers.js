export function getLangDirection(text) {
  const cyrillicPattern = /[\u0400-\u04FF]/;
  return cyrillicPattern.test(text) ? "ru-en" : "en-ru";
}