import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang={'en'}>
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id="modal" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
