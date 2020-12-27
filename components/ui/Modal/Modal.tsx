import { FC } from 'react';
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

  usePreventScroll({ disable: isOpen });

  return isOpen ? (
    <Portal selector={'#modal'}>
      <div className={cn(s.root)}>
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
