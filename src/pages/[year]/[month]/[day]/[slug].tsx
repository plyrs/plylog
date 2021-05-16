import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import matter from 'gray-matter';
import glob from 'glob';
import removeMd from 'remove-markdown';

import Layout from 'components/Layout';
import Article, { Post } from 'components/Article';
import Pagination from 'components/Pagination';
import SEO from 'components/Seo';

function getPaths() {
  // get all .md files in the posts dir
  const posts = glob.sync('source/_posts/*.md');

  return (
    posts
      // remove path and extension to leave filename only
      .map((file) => file.split('/')[2].replace(/ /g, '-').slice(0, -3).trim())
      // add each post to the routes obj
      .map((fileName) => {
        const year = fileName.substr(0, 4);
        const month = fileName.substr(4, 2);
        const day = fileName.substr(6, 2);
        const slug = fileName.substr(8);

        return `/${year}/${month}/${day}/${slug}`;
      })
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPaths();

  return {
    paths,
    fallback: false,
  };
};

type PageProps = {
  post: Post;
  title: string;
  description: string;
  pagination: {
    prev: string | null;
    next: string | null;
  };
};
export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const { year, month, day, slug } = params;
  const paths = getPaths();

  const currentPath = `/${year}/${month}/${day}/${slug}`;
  const index = paths.findIndex((path) => path === currentPath);

  const content = await import(`posts/${year}${month}${day}${slug}.md`);
  const document = matter(content.default);

  document.data.date = document.data.date.toString();
  delete document.orig;

  const post: Post = {
    year: year as string,
    month: month as string,
    day: day as string,
    slug: slug as string,
    document: document as any,
  };

  const title = document.data.title;
  const description = removeMd(document.content)
    .replace(/\r?\n/g, '')
    .substr(0, 160);

  return {
    props: {
      post,
      title,
      description,
      pagination: {
        prev: paths[index + 1] || null,
        next: paths[index - 1] || null,
      },
    },
  };
};

export default function Page(
  props: InferGetStaticPropsType<typeof getStaticProps>,
): JSX.Element {
  return (
    <Layout>
      <SEO title={props.title} description={props.description} />
      <Article post={props.post} />
      <Pagination {...props.pagination} />
    </Layout>
  );
}
