import { FC } from 'react';
import cn from 'classnames';
import s from './LoadingIndicator.module.css';

interface Props {
  isLoading: boolean;
}
const LoadingIndicator: FC<Props> = ({ isLoading }) => {
  return <div className={cn(s.root, { [s.spin]: isLoading })} />;
};

export default LoadingIndicator;
