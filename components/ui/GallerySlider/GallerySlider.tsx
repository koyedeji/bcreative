import { useState } from 'react';
import cn from 'classnames';
import { useKeenSlider } from 'keen-slider/react';
import { Icon, Button } from '@components/ui';
import { useGallery } from '@components/ui/galleryContext';
import s from './GabllerySlide.module.css';

const GallerySlider = (): JSX.Element => {
  const { gallery, selectedId } = useGallery();
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  const handleNext = (e) => {
    e.stopPropagation();
    slider.next();
  };

  const handlePrevious = (e) => {
    e.stopPropagation();
    slider.prev();
  };

  const images = gallery[selectedId];

  return (
    <div className={cn(s.root)}>
      {
        <span className={cn(s.text)}>
          {currentSlide + 1} / {images.length}
        </span>
      }
      <div ref={sliderRef} className={cn('keen-slider', s.keenSlider)}>
        {images.map((item, i) => {
          return (
            <div key={i} className={cn('keen-slider__slide', s.slide)}>
              <img src={`/img/${item.url}.jpg`} alt="simple auth" />
            </div>
          );
        })}
      </div>
      {<span className={cn(s.text)}>{images[currentSlide]?.caption}</span>}
      {slider && (
        <>
          {currentSlide > 0 && (
            <Button
              className={cn(s.prevBtn)}
              onClick={handlePrevious}
              disabled={currentSlide === 0}
            >
              <Icon variant={'arrow'} color={'white'} size={'md'} />
            </Button>
          )}
          {!(currentSlide === slider.details().size - 1) && (
            <Button
              className={cn(s.nextBtn)}
              onClick={handleNext}
              disabled={currentSlide === slider.details().size - 1}
            >
              <Icon variant={'arrow'} color={'white'} size={'md'} />
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default GallerySlider;
