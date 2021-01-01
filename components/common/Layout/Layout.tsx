import { FC, ReactNode, useState, createRef } from 'react';
import cn from 'classnames';
import dynamic from 'next/dynamic';
import { NavBar, Footer } from '@components/common';
import { Button, Icon, Modal } from '@components/ui';
import { useUI } from '@components/ui/context';
import { useScroll } from '@components/hooks';
import s from './Layout.module.css';

export const mainLayout = createRef<HTMLDivElement>();

const DynamicGallerySlider = dynamic(
  () => import('@components/ui/GallerySlider'),
  { loading: () => <p>Page loading...</p>, ssr: false }
);

interface Props {
  children: ReactNode;
  title?: string;
}

const Layout: FC<Props> = (props) => {
  const { children } = props;
  const { scrollToTop, isModalOpen, closeModal, modalView } = useUI();

  const [isMainContent, setMainContent] = useState(false);

  const setVisible = () => {
    if (mainLayout.current) {
      setMainContent(window.pageYOffset > mainLayout.current.offsetTop);
    }
    return null;
  };

  useScroll(setVisible);
  return (
    <div className={cn(s.root)}>
      <NavBar />
      <main>{children}</main>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalView === 'GALLERY_VIEW' && <DynamicGallerySlider />}
      </Modal>
      <Button
        title={'go to top'}
        variant={'primary'}
        className={cn(s.btnScroll, { [s.visible]: isMainContent })}
        onClick={scrollToTop}
      >
        <Icon color={'white'} variant={'arrow'} className={cn(s.arrowIcon)} />
      </Button>
      <Footer />
    </div>
  );
};

export default Layout;
