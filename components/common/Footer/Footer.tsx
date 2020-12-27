import { Grid, Container, Text, Button, Icon } from '@components/ui';
import cn from 'classnames';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer id={'contact'} className={cn(s.root)}>
      <Container size="xl">
        <div className="top">
          <Text variant="sectionHeading" className={cn(s.largeText)}>
            Get In touch
          </Text>
          <Button
            className={cn(s.contactLink)}
            title={'call us'}
            Component={'a'}
            href="tel:447951309120"
          >
            <Icon color={'white'} variant={'phone'} className={cn(s.icon)} />
            <span>07951309120</span>
          </Button>
          <Button
            className={cn(s.contactLink)}
            title={'email us'}
            Component={'a'}
            href="mailto:bolaopypeckham@gmail.com"
          >
            <Icon color={'white'} variant={'mail'} className={cn(s.icon)} />
            <span>bolaopypeckham@gmail.com</span>
          </Button>
        </div>

        <Grid container className={cn(s.top)}>
          <Grid col={'col-md-12 col-lg-8'} className="mb30">
            <Text className={cn(s.headingText)}>Address</Text>
            <Grid container>
              <Grid col={'col-md-12 col-lg-4'} className={cn('mb30')}>
                <span className={cn(s.addressText)}>
                  Unit 109, The Mall, Peckham, London, SE15 5EW
                </span>
              </Grid>
              <Grid col={'col-md-12 col-lg-7'} className={cn('mb10')}>
                <iframe
                  title={'Company address'}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.224842603014!2d-0.07190438391412055!3d51.47238707962944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876039c458e57e3%3A0x4e02d34baf275886!2sThe%20Mall%20Peckham!5e0!3m2!1sen!2suk!4v1608742207872!5m2!1sen!2suk"
                  width="100%"
                  height="500px"
                  frameBorder="0"
                  allowFullScreen={true}
                  aria-hidden="false"
                  tabIndex={0}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid col={'col-md-12 col-lg-4'} className={cn(s.rightPanel, 'mb30')}>
            <Text className={cn(s.headingText)}>Follow us</Text>
            <div className={cn(s.rightPanelInner)}>
              <Button
                variant={'primary'}
                className={cn(s.linkCircle, s.mr20, 'shadow-w-sm')}
                Component={'a'}
              >
                <Icon
                  color={'white'}
                  variant={'facebook'}
                  className={cn(s.icon)}
                />
              </Button>
              <Button
                variant={'primary'}
                className={cn(s.linkCircle, s.mr20, 'shadow-w-sm')}
                Component={'a'}
              >
                <Icon
                  color={'white'}
                  variant={'instagram'}
                  className={cn(s.icon)}
                />
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container size="xl">
        <div className={cn(s.bottom)}>
          <p className={cn('mb0')}>&copy; bcreative & design 2020</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
