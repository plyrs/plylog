import Link from 'next/link';
import { styled } from 'styles/config';

interface Props {
  siteTitle: string;
  isHome: boolean;
}
export default function HeaderComponent(props: Props) {
  const { siteTitle, isHome } = props;

  return (
    <Header role="banner" isHome={isHome}>
      <Logo>
        <MainHeadline isHome={isHome}>
          <Link href="/">
            <a>{siteTitle}</a>
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
        padding: '2rem 1rem',
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
  textAlign: 'center',
  '& a:hover': {
    textDecoration: 'none',
  },
  '@sm': {
    textAlign: 'left',
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
