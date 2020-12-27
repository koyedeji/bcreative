import { useEffect } from 'react';

interface Props {
  disable: boolean;
}

const usePreventScroll = ({ disable }: Props): void => {
  useEffect(() => {
    if (disable) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [disable]);
};

export default usePreventScroll;
