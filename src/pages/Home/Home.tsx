import { useLocation, useNavigate } from 'react-router-dom';
import image from '../../assets/agnieszka_marynarka.png';
import { Button } from '../../components/Button/Buttons';

import './styles.scss';

import { animated, useSpring } from '@react-spring/web';
import { useEffect } from 'react';

export const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contact-form') {
      const element = document.getElementById('contact-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 280, friction: 60 },
  });

  const headerAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 200,
    config: { tension: 280, friction: 60 },
  });

  const titleAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(-50px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    delay: 400,
    config: { tension: 280, friction: 60 },
  });

  const subtitleAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(-50px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    delay: 600,
    config: { tension: 280, friction: 60 },
  });

  const descriptionAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(-50px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    delay: 800,
    config: { tension: 280, friction: 60 },
  });

  return (
    <>
      <animated.div className='home_header' style={headerAnimation}>
        <div className='header_content'>
          <div className='header_titles'>
            <animated.h2 className='header_main_title' style={titleAnimation}>
              KANCELARIA ADWOKACKA
            </animated.h2>
            <animated.h3 className='header_sub_title' style={subtitleAnimation}>
              AGNIESZKA JASAK
            </animated.h3>
          </div>
          <animated.p className='header_description' style={descriptionAnimation}>
            Zapewniam profesjonalną i rzetelną obsługę w zakresie wszystkich czynności prawnych.
          </animated.p>
          <Button className='header_button' onClick={() => navigate('/kontakt#contact-form')}>
            UMÓW SIĘ
          </Button>
        </div>
      </animated.div>
      <div className='container'>
        <div className='card_wrapper'>
          <animated.div className='card' style={fadeIn}>
            <div className='card_content'>
              <div className='about_me_content'>
                <p className='about_me_paragraph'>
                  Szanowni Państwo, serdecznie witam na stronie mojej Kancelarii Adwokackiej. 7 listopada minie
                  dokładnie miesiąc odkąd, w ramach jednoosobowej działalności gospodarczej jako adwokat aktywnie
                  wykonujący zawód, rozpoczęłam prowadzenie własnej Kancelarii Adwokackiej.
                </p>

                <p className='about_me_paragraph'>
                  Moim priorytetem jest indywidualne podejście do klienta oraz dbałość o jego interesy. Gwarantuję
                  uważne wsłuchanie się w Państwa problemy, potrzeby i pytania. Angażując się w każdą sprawę
                  indywidualnie, przewiduje jej ewentualny przebieg, proponując skuteczne rozwiązania.
                </p>

                <p className='about_me_paragraph'>
                  W ramach swoich usług oferuję obsługę:
                  <ul className='services_list'>
                    <li>klientów indywidualnych</li>
                    <li>podmiotów gospodarczych</li>
                    <li>organizacji</li>
                  </ul>
                </p>

                <p className='about_me_paragraph'>
                  Moja praktyka obejmuje sprawy z zakresu:
                  <ul className='law_areas_list'>
                    <li>prawa cywilnego</li>
                    <li>prawa rodzinnego</li>
                    <li>prawa własności intelektualnej</li>
                    <li>prawa pracy</li>
                    <li>prawa gospodarczego</li>
                    <li>prawa upadłościowego (w tym sprawy o ogłoszenie upadłości konsumenckiej)</li>
                    <li>prawa administracyjnego</li>
                    <li>prawa karnego</li>
                  </ul>
                </p>

                <p className='about_me_paragraph'>
                  Nieustannie staram się pogłębiać swoją wiedzę. Mam nadzieję, że obdarzą Państwo moją Kancelarię
                  Adwokacką zaufaniem, powierzając swoją sprawę do prowadzenia.
                </p>

                <p className='about_me_paragraph signature'>
                  Serdecznie zapraszam do współpracy,
                  <br />
                  Adwokat Agnieszka Jasak
                </p>
              </div>
            </div>
            <img src={image} alt='agnieszka' className='card_image' />
          </animated.div>
        </div>
      </div>
    </>
  );
};
