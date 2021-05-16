import Head from 'next/head';

type MetaProps = {
  title: string;
  description: string;
};
export default function Meta(props: MetaProps) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="Description" content={props.description} />
      </Head>
    </>
  );
}
