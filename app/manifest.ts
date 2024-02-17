import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Portfolio - Martin Rigaux",
    short_name: "Portfolio MR",
    description:
      "Je suis passionné par l'intersection de la technologie et de l'entreprise et je crois au pouvoir de la technologie pour transformer notre façon de vivre et de travailler. Si vous souhaitez entrer en contact avec moi ou en savoir plus sur mon travail, n'hésitez pas à me contacter !",
    start_url: "/",
    display: "standalone",
    background_color: "#000",
    theme_color: "#000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
