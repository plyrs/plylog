import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import glob from 'glob';

import Layout from 'components/Layout';
import Pagination from 'components/Pagination';

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
  siteTitle: string;
  content: any;
  data: any;
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
  const config = await import(`data/config.json`);
  const data = matter(content.default);

  data.data.date = data.data.date.toString();
  delete data.orig;

  return {
    props: {
      siteTitle: config.title,
      ...data,
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
  function reformatDate(fullDate) {
    console.log({ fullDate });
    const date = new Date(fullDate);
    console.log({ date });
    return date.toDateString().slice(4);
  }

  const markdownBody = props.content;
  const frontmatter = props.data;

  return (
    <Layout siteTitle={props.siteTitle}>
      <article className="blog">
        {frontmatter.hero_image && (
          <figure className="blog__hero">
            <img
              src={frontmatter.hero_image}
              alt={`blog_hero_${frontmatter.title}`}
            />
          </figure>
        )}
        <div className="blog__info">
          <h1>{frontmatter.title}</h1>
          <h3>{reformatDate(frontmatter.date)}</h3>
        </div>
        <div className="blog__body">
          <ReactMarkdown source={markdownBody} />
        </div>
        <h2 className="blog__footer">Written By: {frontmatter.author}</h2>
      </article>
      <Pagination {...props.pagination} />
      <style jsx>
        {`
          .blog h1 {
            margin-bottom: 0.7rem;
          }

          .blog__hero {
            min-height: 300px;
            height: 60vh;
            width: 100%;
            margin: 0;
            overflow: hidden;
          }
          .blog__hero img {
            margin-bottom: 0;
            object-fit: cover;
            min-height: 100%;
            min-width: 100%;
            object-position: center;
          }

          .blog__info {
            padding: 1.5rem 1.25rem;
            width: 100%;
            max-width: 768px;
            margin: 0 auto;
          }
          .blog__info h1 {
            margin-bottom: 0.66rem;
          }
          .blog__info h3 {
            margin-bottom: 0;
          }

          .blog__body {
            width: 100%;
            padding: 0 1.25rem;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .blog__body a {
            padding-bottom: 1.5rem;
          }
          .blog__body:last-child {
            margin-bottom: 0;
          }
          .blog__body h1 h2 h3 h4 h5 h6 p {
            font-weight: normal;
          }
          .blog__body p {
            color: inherit;
          }
          .blog__body ul {
            list-style: initial;
          }
          .blog__body ul ol {
            margin-left: 1.25rem;
            margin-bottom: 1.25rem;
            padding-left: 1.45rem;
          }

          .blog__footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem 1.25rem;
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
          }
          .blog__footer h2 {
            margin-bottom: 0;
          }
          .blog__footer a {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .blog__footer a svg {
            width: 20px;
          }

          @media (min-width: 768px) {
            .blog {
              display: flex;
              flex-direction: column;
            }
            .blog__body {
              max-width: 800px;
              padding: 0 2rem;
            }
            .blog__body span {
              width: 100%;
              margin: 1.5rem auto;
            }
            .blog__body ul ol {
              margin-left: 1.5rem;
              margin-bottom: 1.5rem;
            }
            .blog__hero {
              min-height: 600px;
              height: 75vh;
            }
            .blog__info {
              text-align: center;
              padding: 2rem 0;
            }
            .blog__info h1 {
              max-width: 500px;
              margin: 0 auto 0.66rem auto;
            }
            .blog__footer {
              padding: 2.25rem;
            }
          }

          @media (min-width: 1440px) {
            .blog__hero {
              height: 70vh;
            }
            .blog__info {
              padding: 3rem 0;
            }
            .blog__footer {
              padding: 2rem 2rem 3rem 2rem;
            }
          }
        `}
      </style>
    </Layout>
  );
}
