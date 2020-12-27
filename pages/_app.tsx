import { AppProps } from 'next/app';
import { Head } from '@components/common';
import { UIProvider } from '@components/ui/context';
import { GalleryProvider } from '@components/ui/galleryContext';
import 'keen-slider/keen-slider.min.css';
import '@assets/main.css';

const Noop = ({ children }) => {
  return <div>{children}</div>;
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const Layout = (Component as any).Layout || Noop;
  return (
    <>
      <Head title={pageProps.title} />
      <UIProvider>
        <GalleryProvider>
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </GalleryProvider>
      </UIProvider>
    </>
  );
}

export default MyApp;
