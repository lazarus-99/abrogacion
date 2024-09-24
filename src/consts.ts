// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const SITE_TITLE = "Abrogación";
export const SITE_DESCRIPTION = "An Astro Theme for Visual Storytelling";

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  { href: "/posicion/a-favor", title: "A favor" },
  { href: "/posicion/en-contra", title: "En contra" },
];

interface Deputy {
  name: string;
  party: string;
  img: string;
  isSupportive: boolean;
}

export const DEPUTIES: Array<Deputy> = [
  {
    name: "Verónica Challco Tapia",
    party: "MAS",
    img: "https://diputados.gob.bo/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/01/02-Veronica-Challco-Tapia-Primera-Viceprecidencia-e1724947461210.jpg.webp",
    isSupportive: false,
  },
  {
    name: "Laura Luisa Nayar Sosa",
    party: "CC",
    img: "https://diputados.gob.bo/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/01/03-Laura-Luisa-Nayar-Sosa-Segunda-Viceprecidencia-e1724947569329.jpg.webp",
    isSupportive: true,
  },
  {
    name: "Rosario García Onofre",
    party: "MAS",
    img: "https://diputados.gob.bo/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/01/04-Rosario-Garcia-Onofre-Primera-Secretaria-e1724947642630.jpg.webp",
    isSupportive: true,
  },
  {
    name: "María René Álvarez Camacho",
    party: "CREEMOS",
    img: "https://diputados.gob.bo/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/01/07-Maria-Rene-Alvarez-Camacho-Cuarta-Secretaria-e1724948019386.jpg.webp",
    isSupportive: true,
  },
  {
    name: "Alba Moira Osinaga Rivero",
    party: "MAS",
    img: "https://diputados.gob.bo/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/01/78-Alba-Moira-Osinaga-Rivero-SANTA-CRUZ-2-e1724965456691.jpg.webp",
    isSupportive: false,
  },
];
