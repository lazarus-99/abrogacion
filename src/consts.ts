import RAW_DEPUTIES from "./data/deputies.json";

// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const SITE_TITLE = "Incendios Bolivia";
export const SITE_DESCRIPTION = "An Astro Theme for Visual Storytelling";

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  { href: "/posicion/a-favor", title: "A favor" },
  { href: "/posicion/en-contra", title: "En contra" },
];

interface Deputy {
  url: string;
  name: string;
  uri: string;
  email?: string;
  img: string;
  party: string;
  isSupportive?: boolean;
}

export const DEPUTIES: Array<Deputy> = RAW_DEPUTIES;
