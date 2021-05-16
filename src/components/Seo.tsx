import Head from 'next/head';
import config from 'data/config.json';

type Props = {
  title?: string;
  description?: string;
};
export default function SEO({ title, description }: Props): JSX.Element {
  const siteTitle = config.title;
  const siteDescription = config.description;
  const _title = title ? `${title} - ${siteTitle}` : siteTitle;
  const _description = description || siteDescription;

  return (
    <Head>
      <title>{_title}</title>
      <meta name="description" content={_description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={_title} />
      <meta property="og:description" content={_description} />
      <meta property="og:site_name" content={siteTitle} />
    </Head>
  );
}
