import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import matter from 'gray-matter';

import Layout from 'components/Layout';
import BlogList from 'components/BlogList';
import Pagination from 'components/Pagination';
import SEO from 'components/Seo';

export const getStaticPaths: GetStaticPaths = async () => {
  const { perPage } = await import(`data/config.json`);
  const _context = (require as any).context('posts', true, /\.md$/);
  const fileLength = _context.keys().length;
  const lastPage =
    Math.floor(fileLength / perPage) + (fileLength % perPage > 0 ? 1 : 0);

  const paths: string[] = ['/'];

  for (let number = 2; number <= lastPage; number++) {
    paths.push(`/page/${number}`);
  }

  return {
    paths,
    fallback: false,
  };
};

type Post = {
  document: matter.GrayMatterFile<any>;
  year: string;
  month: string;
  day: string;
  slug: string;
};

type PageProps = {
  allBlogs: Post[];
  pagination: {
    prev: string | null;
    next: string | null;
  };
  default: {
    title: string;
    description: string;
    repositoryUrl: string;
  };
  title: string;
  description: string;
  repositoryUrl: string;
};
export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const siteConfig = await import(`data/config.json`);
  const { perPage } = siteConfig;

  const pageNumber = !params.pageNumber
    ? 1
    : parseInt(params.pageNumber[1], 10);

  const start = (pageNumber - 1) * perPage;
  const end = perPage * pageNumber;

  const _context = (require as any).context('posts', true, /\.md$/);

  // get posts & context from folder
  const posts = ((context) => {
    // context より post データを取り出し、逆順 (最新順) へ並び替え 5 件を切り出し
    const keys = [...context.keys()].reverse().slice(start, end);

    const values = keys.map<any>(context);
    const data = keys.map((key, index) => {
      // Create slug from filename
      const fileName = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.');
      const value = values[index];

      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default);

      document.data.date = document.data.date.toString();
      delete document.orig;

      const year = fileName.substr(0, 4);
      const month = fileName.substr(4, 2);
      const day = fileName.substr(6, 2);
      const slug = fileName.substr(8);

      return {
        document,
        year,
        month,
        day,
        slug,
      };
    });

    return data;
  })(_context);

  const fileLength = _context.keys().length;
  const lastPage =
    Math.floor(fileLength / perPage) + (fileLength % perPage > 0 ? 1 : 0);

  const isFirstPage = pageNumber === 1;
  const isLastPage = pageNumber === lastPage;

  const pagination = {
    total: lastPage,
    current: pageNumber,
    prev: isFirstPage
      ? null
      : pageNumber === 2
      ? '/'
      : `/page/${pageNumber - 1}`,
    next: isLastPage ? null : `/page/${pageNumber + 1}`,
  };

  return {
    props: {
      allBlogs: posts,
      pagination,
      ...siteConfig,
    },
  };
};

/**
 * トップページ
 * @param props
 */
function Page(
  props: InferGetStaticPropsType<typeof getStaticProps>,
): JSX.Element {
  return (
    <Layout pathname="/">
      <SEO />
      <BlogList allBlogs={props.allBlogs} />
      <Pagination {...props.pagination} />
    </Layout>
  );
}

export default Page;
