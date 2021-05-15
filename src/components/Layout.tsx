import { styled } from 'styles/config';

import Header from './Header';
import Footer from './Footer';
import Meta from './Meta';

export default function Layout(props) {
  return (
    <>
      <Meta
        siteTitle={props.siteTitle}
        siteDescription={props.siteDescription}
      />
      <Header isHome={props.pathname === '/'} />
      <Content>{props.children}</Content>
      <Footer />
    </>
  );
}

const Content = styled('div', {
  maxWidth: '660px',
  margin: 'auto',
  padding: '0 1rem',
  boxSizing: 'border-box',
});
