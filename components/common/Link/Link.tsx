import { FC, ReactNode, SyntheticEvent } from 'react';
import NextLink, { LinkProps } from 'next/link';
import { Button } from '@components/ui';

interface Props extends LinkProps {
  title: string;
  href: string;
  className: string;
  children: ReactNode;
  onClick?(e: SyntheticEvent<EventTarget>): void;
}

const Link: FC<Props> = (props) => {
  const { children, className, href, title, onClick, ...rest } = props;
  return (
    <NextLink href={href} {...rest} passHref>
      <Button
        onClick={onClick}
        title={title}
        Component={'a'}
        className={className}
      >
        {children}
      </Button>
    </NextLink>
  );
};

export default Link;
