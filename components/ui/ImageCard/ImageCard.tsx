import { FC, ReactNode } from 'react';
import cn from 'classnames';
import s from './ImageCard.module.css';

interface Props {
  className?: string;
  title: string;
  imgUrl: string;
  showCaption?: boolean;
  imgHeight?: number | string;
  children?: ReactNode;
}

const ImageCard: FC<Props> = (props) => {
  const {
    className,
    imgUrl,
    title,
    imgHeight = 'auto',
    children,
    showCaption = false,
  } = props;
  const rootClassNames = cn(s.root, className);
  return (
    <div className={rootClassNames}>
      <img
        style={{ height: imgHeight }}
        className={cn(s.img)}
        src={imgUrl}
        alt={title}
      />
      {showCaption && (
        <div className={cn(s.container)}>
          <p className={cn(s.desc)}>{title}</p>
          {children}
        </div>
      )}
    </div>
  );
};

export default ImageCard;
