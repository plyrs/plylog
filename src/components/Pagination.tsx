import Link from 'next/link';
import { styled } from 'styles/config';

interface Props {
  prev: string | null;
  next: string | null;
}

export default function Pagination(props: Props) {
  const { prev, next } = props;

  return (
    <Wrapper>
      {prev ? (
        <Link href={prev} passHref>
          <PaginationPrev>Prev</PaginationPrev>
        </Link>
      ) : null}

      {next && (
        <Link href={next} passHref>
          <PaginationNext className="pagination__next">Next</PaginationNext>
        </Link>
      )}
    </Wrapper>
  );
}

const Wrapper = styled('nav', {
  fontSize: '1.4rem',
  display: 'flex',
  margin: '3rem 0',
  justifyContent: 'space-between',

  '& a': {
    fontWeight: '700',
    display: 'inline-block',
    padding: '1rem 1.1rem',
    border: '1px solid $primary',
    '&:hover': {
      textDecoration: 'none',
      color: '#fff',
      backgroundColor: '$primary',
    },
  },
});

const PaginationPrev = styled('a', {
  marginRight: 'auto',
  '&::before': {
    display: 'inline-block',
    marginRight: '0.5rem',
    content: '«',
    textAlign: 'center',
  },
});

const PaginationNext = styled('a', {
  marginLeft: 'auto',
  '&::after': {
    display: 'inline-block',
    marginRight: '0.5rem',
    content: '»',
    textAlign: 'center',
  },
});
