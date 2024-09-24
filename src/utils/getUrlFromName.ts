// Normalize name for URL: María Álvarez -> maria-alvarez
export const getUrlFromName = (name: string) =>
  name
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/\s/g, "-")
    .toLowerCase();
