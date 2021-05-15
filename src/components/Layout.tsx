import { styled } from 'styles/config';

import Header from './Header';
import Footer from './Footer';
import Meta from './Meta';

type LayoutProps = {
  title: string;
  description?: string;
  pathname?: string;
  children: any;
};
export default function Layout(props: LayoutProps) {
  return (
    <>
      <Meta title={props.title} description={props.description} />
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
