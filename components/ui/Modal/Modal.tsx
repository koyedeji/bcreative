import { FC, useEffect, useCallback } from 'react';
import s from './Modal.module.css';
import { Container, Icon, Button } from '@components/ui';
import { usePreventScroll } from '@components/hooks';
import Portal from './Portal';
import cn from 'classnames';

interface Props {
  isOpen: boolean;
  onClose?(): void;
}

const Modal: FC<Props> = (props) => {
  const { isOpen, onClose, children } = props;

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const keyMap = new Map([[27, handleClose]]);

  const handleKeyDown = useCallback(
    (e) => {
      const listener = keyMap.get(e.keyCode || e.which);
      if (listener) listener();
      return null;
    },
    [isOpen]
  );

  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  usePreventScroll({ disable: isOpen });

  return isOpen ? (
    <Portal selector={'#modal'}>
      <div
        tabIndex={0}
        onClick={handleClose}
        className={cn(s.root)}
        role={'dialog'}
        aria-modal={true}
      >
        <Container size={'xl'}>
          <div className={cn(s.header)}>
            <Button onClick={handleClose}>
              <Icon color={'white'} variant={'cancel'} />
            </Button>
          </div>
          <div className={cn(s.content)}>
            <Container>{children}</Container>
          </div>
        </Container>
      </div>
    </Portal>
  ) : null;
};

export default Modal;
