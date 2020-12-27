import { FC } from 'react';
import { IconProps } from './Icon';

export const Cancel: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496.096 496.096"
    >
      <path d="M259.41 247.998L493.754 13.654a8 8 0 000-11.312 8 8 0 00-11.312 0L248.098 236.686 13.754 2.342A8 8 0 002.442 13.654l234.344 234.344L2.442 482.342a8 8 0 00-.196 11.312 8 8 0 0011.508 0L248.098 259.31l234.344 234.344a8 8 0 0011.312-.196 8 8 0 000-11.116L259.41 247.998z" />
    </svg>
  );
};

export default Cancel;
