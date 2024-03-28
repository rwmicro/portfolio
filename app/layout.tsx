import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio - Martin Rigaux",
  description:
    "Je suis passionné par l'intersection de la technologie et de l'entreprise et je crois au pouvoir de la technologie pour transformer notre façon de vivre et de travailler. Si vous souhaitez entrer en contact avec moi ou en savoir plus sur mon travail, n'hésitez pas à me contacter !",
  generator: "Next.js",
  applicationName: "Nebula",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Portfolio",
    "Windows 11",
    "Windows",
    "11",
    "Microsoft",
    "UI",
    "Design",
    "Web",
    "Development",
    "Frontend",
    "Backend",
    "Fullstack",
    "Software",
    "Engineering",
    "Nebula.li",
    "IT",
    "Information Technology",
    "Computer Science",
    "Next.js",
    "React",
    "JavaScript",
  ],
  authors: [{ name: "Martin" }],
  creator: "Martin",
  publisher: "Nebula",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
