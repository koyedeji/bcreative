import {
  ButtonHTMLAttributes,
  forwardRef,
  JSXElementConstructor,
  SyntheticEvent,
} from 'react';
import cn from 'classnames';
import s from './Button.module.css';

type Variant = 'primary' | 'secondary';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  title?: string;
  variant?: Variant;
  Component?: JSXElementConstructor<Record<string, unknown>> | string;
  onClick?: (e: SyntheticEvent<EventTarget>) => void;
}

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    Component = 'button',
    children,
    title,
    className,
    variant,
    onClick,
    href,
    ...remaining
  } = props;

  const rootClassNames = cn(
    s.root,
    {
      [s.primary]: variant === 'primary',
      [s.secondary]: variant === 'secondary',
    },
    className
  );

  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(rootClassNames)}
      ref={ref}
      title={title}
      {...remaining}
    >
      {children}
    </Component>
  );
});

export default Button;
