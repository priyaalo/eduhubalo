import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* font cdn */}
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          {/* manifest import */}
           <link rel="manifest" href="/manifest.json" />
           {/* favicon */}
           <link rel="icon" href="/favicon1.png" sizes="192x192" />
           <link rel="icon" href="/favicon2.png" sizes="512x512" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
