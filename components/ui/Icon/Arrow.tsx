import { FC } from 'react';
import { IconProps } from './Icon';

const Arrow: FC<IconProps> = (props): JSX.Element => {
  const { className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 511.998 511.998"
      className={className}
    >
      <path d="M509.04 131.296c-4.063-4.24-10.802-4.406-15.083-.333L255.999 358.577 18.04 130.962a10.646 10.646 0 00-15.083.333c-4.073 4.26-3.917 11.01.333 15.083l245.333 234.667c2.063 1.969 4.719 2.958 7.375 2.958s5.313-.99 7.375-2.958l245.333-234.667c4.251-4.072 4.407-10.822.334-15.082z" />
    </svg>
  );
};

export default Arrow;
