import Head from 'next/head';

type MetaProps = {
  title: string;
  description: string;
};
export default function Meta(props: MetaProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <meta name="Description" content={props.description} />
      </Head>
    </>
  );
}
