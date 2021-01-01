import cn from 'classnames';
import { GetStaticPropsResult } from 'next';
import { Layout, mainLayout } from '@components/common';
import { useUI } from '@components/ui/context';
import { useGallery } from '@components/ui/galleryContext';
import { Hero, Container, Text, Button, Grid, ImageCard } from '@components/ui';

interface Props {
  title: 'Home';
}

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  return {
    props: {
      title: 'Home',
    },
  };
};

function HomePage(): JSX.Element {
  const { openModal } = useUI();
  const { gallery, selectGallery } = useGallery();

  const handleSelected = (e) => {
    e.preventDefault();
    const key = e.target.getAttribute('data-id');
    openModal();
    selectGallery(key);
  };

  return (
    <>
      <Hero
        heading={'Tailoring'}
        subHeading={'crafting since 1986'}
        description={
          'Our overall goal is to positively empower young people and adults'
        }
      />

      <div ref={mainLayout}>
        <section id={'about'} className={'ptb8 bgLightGrey' + ' mainContent'}>
          <Container>
            <div className="heading">
              <span className="heading__main">About</span>
              <Text variant={'sectionHeading'}>Our Journey</Text>
              <Grid container>
                <Grid col={'col-sm-12 col-md-4'} className="order2">
                  <ImageCard
                    showCaption
                    title="Bolanle Ogunleye"
                    imgUrl="/img/headshot.jpg"
                  />
                </Grid>
                <Grid col={'col-sm-12 col-md-7'}>
                  <Text>
                    My passion for fashion started more than three decades ago,
                    and within this period of time, I have gained experience in
                    working with all kinds of fabrics and textiles to produce
                    high-end garments for occasional and everyday life.
                  </Text>
                  <Text>
                    I have designed and created a collection of clothing to meet
                    the requirement of people from different backgrounds and
                    cultures for weddings, charity events, birthday parties,
                    etc.
                  </Text>
                  <Text>
                    I am passionate about what I do, and also excited to share
                    my knowledge with young people and adults that will love to
                    learn how to design, style, and sew garments to get a job in
                    the fashion industry or for recreational purposes.
                  </Text>
                  <Button
                    className="mt30"
                    href={'#courses'}
                    variant={'primary'}
                    Component={'a'}
                  >
                    Courses
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </section>
        <section id={'courses'} className={'ptb8'}>
          <Container>
            <Grid className="alignCenter pb3 separator" container>
              <Grid col="col-md-12" className="heading">
                <span className="heading__main">Trainings</span>
                <Text variant={'sectionHeading'}>
                  Sewing trainings for professionals and beginners
                </Text>
              </Grid>
            </Grid>
            <div className="separator ptb3">
              <Text variant="sectionHeading" className="bold500">
                Beginners Class
              </Text>
              <Text>
                The class is suitable for individuals that has no sewing
                experience. The aim of this class is to show you you all the
                tools needed to start sewing and how to use them.
              </Text>
              <Text>
                In this class, you will learn how to tread needles, hemming,
                tacking buttons, sketch drawing, embellishments, beading, hand
                cutting and hand sewing
              </Text>
            </div>
            <div className="separator ptb3">
              <Text variant="sectionHeading" className="bold500">
                Basic sewing class
              </Text>
              <Text>
                The aim of this class is to introduce students to sewing
                equipments, narrate the quality and skill needed to become a
                seamstress, learn all related career opportunities available
                besides that of dressmaking & design,
              </Text>
            </div>
            <div className="ptb3 separator">
              <Text variant="sectionHeading" className="bold500">
                Refreshers Class
              </Text>
              <Text>
                {' '}
                This class focus on how to cut fabrics to make dress of all
                kinds and how to use different kind of sewing machines.
              </Text>
            </div>
            <div className={'ptb3'}>
              <Text>Have interest in any our classes?</Text>
              <Text>
                you can contact us to find out more or enrol on any of our
                classes
              </Text>
              <Button
                className="mt30"
                Component={'a'}
                href={'#contact'}
                variant={'primary'}
              >
                Get in touch
              </Button>
            </div>
          </Container>
        </section>
        <section id={'gallery'} className={'ptb8 bgLightGrey'}>
          <Container>
            <div className="heading">
              <span className="heading__main">Gallery</span>
              <Text variant={'sectionHeading'}>
                View some of our traditional african wears
              </Text>
            </div>
            <Grid className="flexStart" Component={'ul'} container>
              {Object.keys(gallery).map((key) => {
                const img = gallery[key][0];
                return (
                  <Grid
                    className={cn('pr15')}
                    key={key}
                    Component={'li'}
                    col={'col-sm-12 col-md-12 col-lg-4'}
                  >
                    <ImageCard
                      showCaption
                      imgHeight={350}
                      imgUrl={`/img/${img.url}.jpg`}
                      title={`${img.category} collections`}
                    >
                      <Button
                        data-id={key}
                        onClick={handleSelected}
                        variant={'primary'}
                      >
                        View More
                      </Button>
                    </ImageCard>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </section>
      </div>
    </>
  );
}

HomePage.Layout = Layout;

export default HomePage;
