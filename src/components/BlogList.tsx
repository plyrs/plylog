import Article from 'components/Article';

/**
 * 記事一覧
 *
 * @param props - props
 */
function BlogList(props): JSX.Element {
  return (
    <>
      {props.allBlogs.length > 0 &&
        props.allBlogs.map((post) => {
          const { year, month, day, slug } = post;
          const path = `/${year}/${month}/${day}/${slug}`;
          return <Article post={post} key={path} />;
        })}
    </>
  );
}

export default BlogList;
