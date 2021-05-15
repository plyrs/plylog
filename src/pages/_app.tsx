import type { AppProps } from 'next/app';
import '../public/css/normalize.css';
import { global } from '../styles/config';

const globalStyles = global({
  html: {
    fontSize: '62.5%',
    backgroundColor: '#fcfcfc',
    color: '#2c2c2c',
    fontFamily: '$untitled',
    fontWeight: 500,
    background: '#fff',
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
  return <Component {...pageProps} />;
}
