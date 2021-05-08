import Link from 'next/link';

interface Props {
  prev: string | null;
  next: string | null;
}

export default function Pagination(props: Props) {
  const { prev, next } = props;

  return (
    <nav className="pagination">
      {prev ? (
        <Link href={prev}>
          <a className="pagination__prev">Prev</a>
        </Link>
      ) : null}

      {next && (
        <Link href={next}>
          <a className="pagination__next">Next</a>
        </Link>
      )}
    </nav>
  );
}
