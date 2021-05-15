import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { styled } from 'styles/config';

function toDoubleDigits(num: number): string {
  let numStr = num.toString();
  numStr += '';
  if (numStr.length === 1) {
    numStr = '0' + num;
  }
  return numStr;
}
/**
 * 日付をフォーマット
 * @param fullDate - フォーマット対象の日付
 * @returns YYYY-MM-DD へフォーマットした日付
 */
function reformatDate(fullDate: string): string {
  const date = new Date(fullDate);
  const yyyy = date.getFullYear();
  const mm = toDoubleDigits(date.getMonth() + 1);
  const dd = toDoubleDigits(date.getDate());
  return `${yyyy}-${mm}-${dd}`;
}

export type Post = {
  year: string;
  month: string;
  day: string;
  slug: string;
  document: {
    data: {
      date: string;
      title: string;
    };
    content: string;
  };
};

type ArticleProps = {
  post: Post;
};

/**
 * 記事一覧
 *
 * @param props - props
 */
function ArticleComponent({ post }: ArticleProps): JSX.Element {
  const { year, month, day, slug } = post;
  const path = `/${year}/${month}/${day}/${slug}`;

  return (
    <Article>
      <header>
        <ArticleMeta>
          <ArticleMetaTime>
            {reformatDate(post.document.data.date)}
          </ArticleMetaTime>
        </ArticleMeta>
        <ArticleTitle>
          <Link href={path}>
            <a>{post.document.data.title}</a>
          </Link>
        </ArticleTitle>
      </header>

      <ArticleEntry>
        <ReactMarkdown children={post.document.content} />
      </ArticleEntry>
    </Article>
  );
}

export default ArticleComponent;

const Article = styled('section', {
  marginBottom: '6rem',
  fontSize: '1.7rem',
  borderBottom: '1px solid $primary',
});

const ArticleMeta = styled('div', {
  overflow: 'hidden',
  height: '20px',
});

const ArticleMetaTime = styled('div', {
  fontSize: '1.3rem',
  fontWeight: '700',
  textDecoration: 'none',
  color: '#aaa',
});

const ArticleTitle = styled('h1', {
  fontFeatureSettings: '"palt"',
  fontSize: '2.6rem',
  fontWeight: '500',
  margin: '0.4em 0 0',
  '& a': {
    color: 'inherit',
    '&:hover': {
      textDecoration: 'none',
    },
  },
});

const ArticleEntry = styled('div', {
  paddingTop: '1rem',
  marginBottom: '15px',
  lineHeight: '1.85',
  'p, blockquote, ul, ol, dl, table, iframe, h3, h4, h5, h6, .video-container':
    {
      marginTop: '15px',
    },
  blockquote: {
    margin: '3rem 0.5rem',
    padding: '0 20px',
    borderLeft: '1px solid $primary',
    fontFamily: '$mono',
    '& footer': {
      margin: '20px 0 0',
      paddingTop: '0',
      borderTop: 'none',
      fontSize: '0.8em',
      lineHeight: '1',
      color: '#4e5359',
      '& cite': {
        '&::before': {
          padding: '0 0.5em',
          color: '#ccc',
          content: '—',
        },
      },
    },
  },
  'code, pre': {
    fontFamily: '$mono',
  },
  code: {
    margin: '0 2px',
    padding: '0 5px',
    border: '1px solid #7c848c',
    borderRadius: '3px',
    background: '#f9f9f9',
    color: '#666',
    fontSize: '0.9em',
  },
  pre: {
    overflow: 'auto',
    padding: '7px 15px',
    border: '1px solid color(border)',
    code: {
      margin: '0',
      padding: '0',
      border: 'none',
      borderRadius: '0',
      background: 'none',
    },
  },
  'ul,ol,dl': {
    marginLeft: '20px',
    padding: '0',
    'ul, ol, dl': { marginTop: '0' },
  },
  'h1,h2': {
    marginTop: '1.5em',
    fontWeight: 'normal',
    lineHeight: 1,
    fontSize: '2.4rem',
  },
  'h3,h4,h5,h6': { fontWeight: 'normal', lineHeight: 1 },
  'img,video': { maxWidth: '100%', height: 'auto', border: 'none' },
  "amp-img[role='button'] > img": {
    cursor: 'pointer',
    '&:hover': { opacity: 0.9 },
  },
  iframe: { border: 'none' },
  '.caption': {
    position: 'relative',
    display: 'block',
    marginTop: '5px',
    paddingLeft: '25px',
    color: 'color(sub)',
    fontSize: '0.9em',
  },
  '.video-container': {
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '30px',
    paddingBottom: '56.25%',
    height: '0',
    'iframe, object, embed': {
      position: 'absolute',
      top: '0',
      left: '0',
      marginTop: '0',
      width: '100%',
      height: '100%',
    },
  },
  '.pullquote': {
    margin: '0',
    padding: '0',
    width: '45%',
    border: 'none',
    textAlign: 'left',
    fontSize: '1.5em',
    '&.left': { marginLeft: '0.5em', marginRight: '1em' },
    '&.right': { marginRight: '0.5em', marginLeft: '1em' },
  },
  table: {
    borderCollapse: 'collapse',
    td: { padding: '2px 10px', border: '1px solid color(border)' },
  },
  '.left,.alignleft': { cssFloat: 'left' },
  '.right,.alignright': { cssFloat: 'right' },
  '.clear': { clear: 'both' },
});
