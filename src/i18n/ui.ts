export const languages = {
  en: "🇬🇧",
  es: "🇪🇸",
};

export const defaultLang = "en";

export const ui = {
  en: {
    nav: [
      {
        title: "home",
        url: "/",
      },
      {
        title: "blog",
        url: "/blog",
      },
    ],
    mainPageTitle: "Home | The Ultimate Astro Template",
    mainTitle: "Welcome to the ultimate Astro starter template",
    mainBlogTitle: "Blog | The Ultimate Astro Template",
    blogTitle: "The Blog Page",
  },
  es: {
    nav: [
      {
        title: "inicio",
        url: "/",
      },
      {
        title: "blog",
        url: "/blog",
      },
    ],
    mainPageTitle: "Inicio | Plantilla definitiva de Astro",
    mainTitle: "Bievenidos a la plantilla definitiva para proyectos en Astro",
    mainBlogTitle: "Blog | Plantilla definitiva de Astro",
    blogTitle: "El Blog",
  },
} as const;
