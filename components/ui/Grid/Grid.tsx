import {
  CSSProperties,
  forwardRef,
  JSXElementConstructor,
  ReactNode,
} from 'react';
import cn from 'classnames';
import s from './Grid.module.css';

interface Props {
  style?: CSSProperties;
  container?: boolean;
  Component?: JSXElementConstructor<Record<string, unknown>> | string;
  className?: string;
  children: ReactNode;
  col?: string;
}

const genColClassNames = (cols: string[]) => {
  return cols.map((item) => s[item]).join(' ');
};

const Grid = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    col = '',
    Component = 'div',
    container = false,
    style,
    children,
    className,
  } = props;

  const colClassNames = genColClassNames(col.split(' '));

  const rootClassNames = cn(
    {
      [s.row]: container,
      [colClassNames]: !container,
    },
    className
  );

  return (
    <Component ref={ref} style={style} className={rootClassNames}>
      {children}
    </Component>
  );
});

export default Grid;