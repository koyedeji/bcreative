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

  const handleSelected = (e, key) => {
    e.preventDefault();
    openModal();
    selectGallery(key);
  };

  return (
    <>
      <Hero
        heading={'Tailoring'}
        subHeading={'crafting since 1986'}
        description={
          'Our overall goal is to positively empower young people and' +
          ' adults alike'
        }
      />

      <div ref={mainLayout}>
        <section id={'about'} className={'ptb10 bgLightGrey' + ' mainContent'}>
          <Container>
            <div className="heading">
              <span className="heading__main">About</span>
              <Text variant={'sectionHeading'}>Our Journey</Text>
              <div>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium ad cum dicta eius, itaque minima nisi, nobis non
                  optio, quae quam quas reiciendis repudiandae sint vero
                  voluptatem voluptatibus. Ab, consequuntur?
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  aut ea eos esse excepturi iusto laboriosam officiis quam quia
                  veritatis! Accusantium commodi cupiditate dignissimos
                  explicabo iste, minima numquam recusandae soluta!
                </Text>
              </div>
            </div>
          </Container>
        </section>
        <section id={'courses'} className={'ptb10'}>
          <Container>
            <div className="heading">
              <span className="heading__main">Trainings</span>
              <Text variant={'sectionHeading'}>
                Sewing trainings for professionals and beginners
              </Text>
              <div className="content">
                <Text>
                  We specialize in training courses on sewing for young people
                  and adults. Our courses are designed to take you from a
                  complete beginner to an expert.
                </Text>
                <Text>
                  No prior knowledge of sewing is required to join our beginner
                  training course.
                </Text>
                <Text>Get in touch to find out more about our courses.</Text>
                <Button
                  title={'contact us'}
                  className={cn('mt50')}
                  href="#contact"
                  Component={'a'}
                  variant={'primary'}
                >
                  Get in touch
                </Button>
              </div>
            </div>
          </Container>
        </section>
        <section id={'gallery'} className={'ptb10 bgLightGrey'}>
          <Container>
            <div className="heading">
              <span className="heading__main">Gallery</span>
              <Text variant={'sectionHeading'}>
                View some of our traditional african wears
              </Text>
            </div>
            <Grid
              Component={'ul'}
              container
              style={{ justifyContent: 'flex-start' }}
            >
              {Object.keys(gallery).map((key) => {
                const img = gallery[key][0];
                return (
                  <Grid key={key} Component={'li'} col={'col-sm-12 col-md-4'}>
                    <Button
                      className="w100"
                      onClick={(e) => handleSelected(e, key)}
                    >
                      <ImageCard
                        showCaption
                        imgUrl={`/img/${img.url}.jpg`}
                        title={`${img.category} collections`}
                      />
                    </Button>
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
