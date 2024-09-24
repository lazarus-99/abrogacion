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
