import { useRef, useState, useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactNode;
  selector: string;
}

const Portal = ({ selector, children }: Props): JSX.Element => {
  const [mounted, setMounted] = useState(false);
  const ref = useRef();

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);

    return () => {
      ref.current = null;
    };
  }, [selector]);

  return mounted ? createPortal(children, ref.current) : null;
};

export default Portal;
