import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-FR">
      <head>
        <title>Portfolio - Martin Rigaux</title>
        <meta name="theme-color" content="#ffffff" />
        <meta name="background-color" content="#004fe1" />
        <meta name="short_name" content="Portfolio MR" />
        <meta name="start_url" content="/" />
        <meta name="display" content="standalone" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
        <meta
          name="description"
          content="Je suis passionné par l'intersection de la technologie et de l'entreprise et je crois au pouvoir de la technologie pour transformer notre façon de vivre et de travailler. Si vous souhaitez entrer en contact avec moi ou en savoir plus sur mon travail, n'hésitez pas à me contacter !"
        />
        <meta name="generator" content="Next.js" />
        <meta name="application-name" content="Portfolio Nebula" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta
          name="keywords"
          content="Portfolio,
            Windows 11,
            Windows,
            11,
            Microsoft,
            UI,
            Design,
            Web,
            Development,
            Frontend,
            Backend,
            Fullstack,
            Software,
            Engineering,
            Nebula.li,
            IT,
            Information Technology,
            Computer Science,
            Next.js,
            React,
            JavaScript"
        />
        <meta name="author" content="Martin" />
        <meta name="creator" content="Martin" />
        <meta name="publisher" content="Nebula" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="email=no" />
        <meta name="format-detection" content="address=no" />
      </head>
      <body>{children}</body>
    </html>
  );
}
