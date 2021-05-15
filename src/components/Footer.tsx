import { styled } from 'styles/config';

export default function FooterComponent() {
  return <Footer role="contentinfo">© 2019 Hirofumii.</Footer>;
}

const Footer = styled('footer', {
  fontSize: '1.2rem',
  maxWidth: '660px',
  margin: '3rem auto auto',
  padding: '3rem 1rem 2rem',
  color: '#999',
  boxSizing: 'border-box',
  '& small': {
    fontSize: 'inherit',
    display: 'inline-block',
  },
});
