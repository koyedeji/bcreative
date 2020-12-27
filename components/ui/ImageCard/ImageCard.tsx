import { FC } from 'react';
import cn from 'classnames';
import s from './ImageCard.module.css';

interface Props {
  className?: string;
  title: string;
  imgUrl: string;
  showCaption?: boolean;
}

const ImageCard: FC<Props> = (props) => {
  const { className, imgUrl, title, showCaption = false } = props;
  const rootClassNames = cn(s.root, className);
  return (
    <div className={rootClassNames}>
      <img className={cn(s.img)} src={imgUrl} alt={title} />
      {showCaption && (
        <div className={cn(s.container)}>
          <p className={cn(s.desc)}>{title}</p>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
