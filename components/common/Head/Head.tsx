import NextHead from 'next/head';

interface Props {
  title: string;
  description?: string;
}

function Head({
  title,
  description = 'Tailoring training courses',
}: Props): JSX.Element {
  return (
    <NextHead>
      <meta name="description" content={description} />
      <meta name="keywords" content="Sewing, Tailoring, African Fabrics" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <title>Bcreative Design | {title}</title>
    </NextHead>
  );
}

export default Head;
