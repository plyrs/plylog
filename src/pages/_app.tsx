import type { AppProps } from 'next/app';
import Head from 'next/head';
import { globalCss } from '../styles/config';

const globalStyles = globalCss({
  html: {
    fontSize: '62.5%',
    color: '#2c2c2c',
    fontFamily: '$untitled',
    fontWeight: 500,
    background: '#fff',
  },
  body: {
    backgroundColor: '#fcfcfc',
  },
  a: {
    '&:any-link': {
      color: '$primary',
      textDecoration: 'none',
    },
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
