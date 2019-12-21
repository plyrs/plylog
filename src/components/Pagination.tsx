import Link from 'next/link';

interface Props {
  prev: number;
  next: number;
  current: number;
  total: number;
}

export default function Pagination(props: Props) {
  const { prev, next, current, total } = props;

  const Prev = () => {
    return prev > 1 ? (
      <Link
        href={{
          pathname: '/page/[number]',
          query: {
            prev: `${prev - 1}`,
            next: current,
          },
        }}
        as={`/page/${prev}`}
      >
        <a className="pagination__prev">Prev</a>
      </Link>
    ) : (
      <Link href="/">
        <a className="pagination__prev">Prev</a>
      </Link>
    );
  };
  return (
    <nav className="pagination">
      {prev > 0 && <Prev />}

      {next <= total && (
        <Link
          href={{
            pathname: '/page/[number]',
            query: {
              prev: current,
              next: `${next + 1}`,
            },
          }}
          as={`/page/${next}`}
        >
          <a className="pagination__next">Next</a>
        </Link>
      )}
    </nav>
  );
}
