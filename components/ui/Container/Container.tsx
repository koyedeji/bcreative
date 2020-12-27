import {
  JSXElementConstructor,
  ReactNode,
  forwardRef,
  CSSProperties,
} from 'react';
import cn from 'classnames';
import s from './Container.module.css';

type SizeVariant = 'sm' | 'md' | 'lg' | 'xl';

interface Props {
  el?: string;
  size?: SizeVariant;
  style?: CSSProperties;
  className?: string;
  children: ReactNode;
}

const Container = forwardRef<HTMLDivElement, Props>(
  (props, ref): JSX.Element => {
    const { size = 'lg', el = 'div', className, children, style } = props;

    const Component = el as
      | JSXElementConstructor<Record<any, unknown>>
      | string;

    const rootClassNames = cn(
      s.root,
      {
        [s.sm]: size === 'sm',
        [s.md]: size === 'md',
        [s.lg]: size === 'lg',
        [s.xl]: size === 'xl',
      },
      className
    );

    return (
      <Component style={style} ref={ref} className={rootClassNames}>
        {children}
      </Component>
    );
  }
);

export default Container;
