import { FC } from 'react';
import { Container, Text } from '@components/ui';
import cn from 'classnames';
import s from './Hero.module.css';

interface Props {
  heading?: string;
  subHeading?: string;
  description?: string;
}

const Hero: FC<Props> = (props): JSX.Element => {
  const { heading, subHeading, description } = props;

  return (
    <div className={cn(s.root)}>
      <Container size={'sm'}>
        <div className={cn(s.content)}>
          <Text className={cn(s.heading)}>{heading}</Text>
          <Text variant={'subHeading'} className={cn(s.subHeading)}>
            {subHeading}
          </Text>
          <Text className={cn(s.text, s.textCenter)}>{description}</Text>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
