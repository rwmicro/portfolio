import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio - Martin Rigaux",
  description:
    "Je suis passionné par l'intersection de la technologie et de l'entreprise et je crois au pouvoir de la technologie pour transformer notre façon de vivre et de travailler. Si vous souhaitez entrer en contact avec moi ou en savoir plus sur mon travail, n'hésitez pas à me contacter !",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-FR">
      <body>{children}</body>
    </html>
  );
}
