import { animated, useSpring } from '@react-spring/web';
import aboutImage from '../../assets/aga.png';
import { AnimatedTitle } from '../../components/AnimatedTitle/AnimatedTitle';
import { Certificates } from '../Certificates/Certificates';
import './About.scss';

export const About = () => {
  const imageAnimation = useSpring({
    from: {
      opacity: 0,
      transform: 'translateX(100px)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(0)',
    },
    config: {
      tension: 280,
      friction: 20,
    },
    delay: 300,
  });

  const textAnimation = useSpring({
    from: {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
    config: {
      tension: 280,
      friction: 20,
    },
    delay: 600,
  });

  return (
    <>
      <div className='about-page'>
        <AnimatedTitle className='about-page__main-title'>O MNIE</AnimatedTitle>
        <h3 className='about-page__subtitle'>Adwokat, któremu możesz zaufać.</h3>

        <section className='about-content'>
          <animated.div style={imageAnimation} className='about-image'>
            <img src={aboutImage} alt='About' />
          </animated.div>

          <animated.div style={textAnimation} className='about-text'>
            <p>
              Jestem absolwentkom Wydziału Prawa i Administracji Uniwersytetu Opolskiego. W 2019 r. obroniłam pracę
              magisterską pod tytułem ,,Umowy w zakresie komercjalizacji wyników badań naukowych, której promotorem był
              profesor Piotr Stec.
            </p>

            <p>
              W latach 2021 – 2023 odbyłam aplikację adwokacką pod patronatem adwokat Joanny Jaworskiej, a następnie
              zostałam wpisana na listę adwokatów Częstochowsko – Piotrkowskiej Izby Adwokackiej.
            </p>

            <p>
              Zdobywałam doświadczenie zawodowe w kancelariach adwokackich i radcowskich na obszarze Opola, Częstochowy
              i Radomska, jak również w sądach powszechnych, prokuraturach, jednostkach Policji. W 2024 r. rozpoczęłam
              indywidualną praktykę zawodową.
            </p>

            <p>
              W Kancelarii świadczę pomoc zarówno klientom indywidualnym jak i przedsiębiorcom. W mojej pracy kieruję
              się przede wszystkim spokojem, rzetelnością, indywidualnym podejściem do każdej sprawy.
            </p>

            <p>
              Moim priorytetem jest efektywne i możliwie jak najszybsze rozwiązanie Państwa problemów, co pozwala na
              ograniczenie stresu do minimum i zaoszczędzenie środków finansowych.
            </p>

            <p>Posługuję się językiem niemieckim i angielskim.</p>

            <p>
              W wolnych chwilach podróżuję, wędruję po górach, spaceruję z psim przyjacielem. Interesuję się piłką
              nożną, siatkówką. Ponadto maluję obrazy i staram się pielęgnować rośliny z mojego ogrodu.
            </p>
          </animated.div>
        </section>

        <div className='certificates-container'>
          <Certificates />
        </div>
      </div>
    </>
  );
};
