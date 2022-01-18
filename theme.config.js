export default {
  github: 'https://github.com/sergiobarria',
  projectLink: '',
  docsRepositoryBase: 'https://github.com/sergiobarria/docs/blob/main',
  titleSuffix: ' - Nextra',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: (
    <>
      © {new Date().getFullYear()}{' '}
      <a
        href="https://sergiobarria.com?ref=docs"
        target="_blank"
        rel="noopener"
      >
        Sergio Barria.
      </a>
    </>
  ),
  footerEditLink: `Edit this page on Github`,
  // logo: (
  //   <></>
  // )
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Nextra: the next docs builder" />
      <meta name="og:title" content="Nextra: the next docs builder" />
    </>
  ),
};
