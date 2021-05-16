import { styled } from 'styles/config';

import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  pathname?: string;
  children: any;
};
export default function Layout(props: LayoutProps) {
  return (
    <>
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
