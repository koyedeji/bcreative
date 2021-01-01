import { forwardRef } from 'react';
import { Container, Button, Icon } from '@components/ui';
import { Link } from '@components/common';
import { useUI } from '@components/ui/context';
import { usePreventScroll } from '@components/hooks';
import cn from 'classnames';
import s from './NavBar.module.css';

interface Props {
  className?: string;
  navigations?: { name: string; href: string }[];
}

const Navbar = forwardRef<HTMLHeadElement, Props>((props, ref) => {
  const { className, navigations } = props;
  const { toggleNavbar, isNavOpen, setCurrentHash, hash } = useUI();

  usePreventScroll({ disable: isNavOpen });

  const rootClassName = cn(s.root, className);

  return (
    <header ref={ref} className={cn(rootClassName, 'shadow-sm')}>
      <Container size={'xl'}>
        <div className={cn(s.wrapper, { [s.expand]: isNavOpen })}>
          <Link
            onClick={setCurrentHash}
            title="home"
            href={'/'}
            className="logoText"
          >
            Bcreative & design
          </Link>
          <nav className={cn(s.nav)}>
            <Container className={cn(s.navContainer)} size={'xl'}>
              <ul className={cn(s.navList)}>
                {navigations.map((node) => {
                  return (
                    <li key={node.name} className={cn(s.navItem)}>
                      <Button
                        onClick={setCurrentHash}
                        Component={'a'}
                        title={'about'}
                        className={cn(s.navLink, {
                          [s.active]: hash === node.name,
                        })}
                        data-hash={node.name}
                        href={node.href}
                      >
                        {node.name}
                      </Button>
                    </li>
                  );
                })}
                <li className={cn(s.socialGroup)}>
                  <span className={cn(s.spanText)}>Follow us</span>
                  <Button className={cn(s.socialLink)} Component={'a'}>
                    <Icon color={'white'} variant={'facebook'} />
                  </Button>
                  <Button className={cn(s.socialLink)} Component={'a'}>
                    <Icon color={'white'} variant={'instagram'} />
                  </Button>
                </li>
              </ul>
            </Container>
          </nav>
          <Button onClick={toggleNavbar} className={cn(s.bar)}>
            <div className={cn(s.line)} />
            <div className={cn(s.line)} />
            <div className={cn(s.line)} />
          </Button>
        </div>
      </Container>
    </header>
  );
});

Navbar.defaultProps = {
  navigations: [
    { name: 'about', href: '#about' },
    { name: 'courses', href: '#courses' },
    { name: 'gallery', href: '#gallery' },
    { name: 'contact', href: '#contact' },
  ],
};

export default Navbar;
