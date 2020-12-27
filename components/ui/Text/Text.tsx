import { FC, JSXElementConstructor, ReactNode, CSSProperties } from 'react';
import cn from 'classnames';
import s from './Text.module.css';

type Variant = 'heading' | 'body' | 'subHeading' | 'sectionHeading';

interface Props {
  variant?: Variant;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

const TextMap: { [P in Variant]: JSXElementConstructor<any> | string } = {
  heading: 'h1',
  subHeading: 'h2',
  sectionHeading: 'h2',
  body: 'p',
};

const Text: FC<Props> = (props) => {
  const { variant = 'body', className, style, children } = props;
  const Component = TextMap[variant];
  const rootClassNames = cn(
    s.root,
    {
      [s.heading]: variant === 'heading',
      [s.subHeading]: variant === 'subHeading',
      [s.sectionHeading]: variant === 'sectionHeading',
      [s.body]: variant === 'body',
    },
    className
  );

  return (
    <Component style={style} className={rootClassNames}>
      {children}
    </Component>
  );
};

export default Text;
