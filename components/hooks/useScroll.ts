import { useEffect } from 'react';

const usePreventScroll = (cb?: () => void): void => {
  const scrollCb = () => {
    if (cb) {
      cb();
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollCb);

    return () => {
      document.removeEventListener('scroll', scrollCb);
    };
  });
};

export default usePreventScroll;
