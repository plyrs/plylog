import Link from 'next/link';
import { styled } from 'styles/config';
import config from 'data/config.json';

interface Props {
  isHome: boolean;
}
export default function HeaderComponent({ isHome }: Props) {
  return (
    <Header role="banner" isHome={isHome}>
      <Logo>
        <MainHeadline isHome={isHome}>
          <Link href="/">
            <a>{config.title}</a>
          </Link>
        </MainHeadline>
      </Logo>
    </Header>
  );
}

const Header = styled('header', {
  variants: {
    isHome: {
      true: {
        borderWidth: '4px',
        padding: '5rem 1rem',
      },
      false: {
        borderTop: '1px solid $primary',
        padding: '2.5rem 1rem',
      },
    },
  },
  position: 'relative',
  maxWidth: '660px',
  margin: 'auto',
  borderTop: '4px solid $primary',
  boxSizing: 'border-box',
  '@sm': {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingRight: 0,
    paddingLeft: 0,
  },
});

const Logo = styled('div', {
  '& a:hover': {
    textDecoration: 'none',
  },
  '@sm': {
    marginRight: 'auto',
  },
});

const MainHeadline = styled('h1', {
  variants: {
    isHome: {
      true: {
        fontSize: '2.6em',
      },
      false: {
        fontSize: '2.3em',
      },
    },
  },
  fontWeight: 500,
  display: 'inline-block',
  margin: '0',
});
