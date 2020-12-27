import { FC, ReactNode } from 'react';
import NextLink, { LinkProps } from 'next/link';
import { Button } from '@components/ui';

interface Props extends LinkProps {
  title: string;
  href: string;
  className: string;
  children: ReactNode;
}

const Link: FC<Props> = (props) => {
  const { children, className, href, title, ...rest } = props;
  return (
    <NextLink href={href} {...rest} passHref>
      <Button title={title} Component={'a'} className={className}>
        {children}
      </Button>
    </NextLink>
  );
};

export default Link;
