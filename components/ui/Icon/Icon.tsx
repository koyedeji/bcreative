import { FC, FunctionComponent } from 'react';
import cn from 'classnames';
import { default as Instagram } from './Instagram';
import { default as Facebook } from './Facebook';
import { default as Mobile } from './Mobile';
import { default as Mail } from './Mail';
import { default as Arrow } from './Arrow';
import { default as Cancel } from './Cancel';
import { default as Phone } from './Phone';
import s from './Icon.module.css';

type IconVariant =
  | 'facebook'
  | 'instagram'
  | 'mobile'
  | 'mail'
  | 'arrow'
  | 'phone'
  | 'cancel';

interface Props {
  variant: IconVariant;
  className?: string;
  size?: string;
  color?: string;
}

export type IconProps = Pick<Props, 'className'>;

const Icon: FC<Props> = (props) => {
  const { variant, className, size = 'sm', color } = props;
  const componentMap: {
    [P in IconVariant]: FunctionComponent<IconProps>;
  } = {
    facebook: Facebook,
    instagram: Instagram,
    mobile: Mobile,
    mail: Mail,
    arrow: Arrow,
    phone: Phone,
    cancel: Cancel,
  };

  const Component = componentMap[variant];

  const rootClassNames = cn(
    s.root,
    {
      [s.md]: size === 'md',
      [s.sm]: size === 'sm',
      [s.white]: color === 'white',
    },
    className
  );

  return <Component className={rootClassNames} />;
};

export default Icon;
