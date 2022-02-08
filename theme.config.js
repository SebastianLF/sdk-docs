export default {
  github: 'https://github.com/Azuro-protocol/sdk-docs',
  docsRepositoryBase: 'https://github.com/Azuro-protocol/sdk-docs/blob/master',
  titleSuffix: ' – Azuro',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Azuro</span>
      <span className="text-gray-600 font-normal hidden md:inline">Global Decentralized Betting Protocol</span>
    </>
  ),
  head: (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © Azuro.</>,
}
