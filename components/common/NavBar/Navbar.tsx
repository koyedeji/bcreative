import { FC, forwardRef } from 'react';
import { Container, Button, Icon } from '@components/ui';
import { Link } from '@components/common';
import { useUI } from '@components/ui/context';
import { usePreventScroll } from '@components/hooks';
import cn from 'classnames';
import s from './NavBar.module.css';

interface Props {
  className?: string;
}

const Navbar = forwardRef<HTMLHeadElement, Props>((props, ref) => {
  const { className } = props;
  const { toggleNavbar, isNavOpen } = useUI();

  usePreventScroll({ disable: isNavOpen });

  const rootClassName = cn(s.root, className);
  return (
    <header ref={ref} className={cn(rootClassName, 'shadow-sm')}>
      <Container size={'xl'}>
        <div className={cn(s.wrapper, { [s.expand]: isNavOpen })}>
          <Link title="home" href={'/'} className="logoText">
            Bcreative & design
          </Link>
          <nav className={cn(s.nav)}>
            <Container className={cn(s.navContainer)} size={'xl'}>
              <ul className={cn(s.navList)}>
                <li className={cn(s.navItem)}>
                  <Button
                    href={'#about'}
                    title={'about'}
                    className={cn(s.navLink)}
                    Component={'a'}
                  >
                    About
                  </Button>
                </li>
                <li className={cn(s.navItem)}>
                  <Button
                    title={'courses'}
                    href={'#courses'}
                    className={cn(s.navLink)}
                    Component={'a'}
                  >
                    Courses
                  </Button>
                </li>
                <li className={cn(s.navItem)}>
                  <Button
                    href={'#gallery'}
                    title={'gallery'}
                    className={cn(s.navLink)}
                    Component={'a'}
                  >
                    gallery
                  </Button>
                </li>
                <li className={cn(s.navItem)}>
                  <Button
                    href={'#contact'}
                    title={'contact'}
                    className={cn(s.navLink)}
                    Component={'a'}
                  >
                    Contact
                  </Button>
                </li>
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

export default Navbar;
