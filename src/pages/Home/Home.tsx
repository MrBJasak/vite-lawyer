import { useLocation, useNavigate } from 'react-router-dom';
import image from '../../assets/agnieszka_marynarka.png';
import { Button } from '../../components/Button/Buttons';

import './styles.scss';

import { animated, useSpring } from '@react-spring/web';
import { useEffect } from 'react';

const TEXTS = {
  header: {
    mainTitle: 'KANCELARIA ADWOKACKA',
    subTitle: 'AGNIESZKA JASAK',
    description: 'Zapewniam profesjonalną i rzetelną obsługę w zakresie wszystkich czynności prawnych.',
    button: 'UMÓW SIĘ',
  },
  aboutMe: {
    paragraphs: [
      'Szanowni Państwo, serdecznie witam na stronie mojej Kancelarii Adwokackiej. 7 października 2024 r. w ramach jednoosobowej działalności gospodarczej jako adwokat aktywnie wykonujący zawód, rozpoczęłam prowadzenie własnej Kancelarii Adwokackiej.',
      'Moim priorytetem jest indywidualne podejście do klienta oraz dbałość o jego interesy. Gwarantuję uważne wsłuchanie się w Państwa problemy, potrzeby i pytania. Angażując się w każdą sprawę indywidualnie, przewiduje jej ewentualny przebieg, proponując skuteczne rozwiązania.',
    ],
    services: {
      intro: 'W ramach swoich usług oferuję obsługę:',
      list: ['klientów indywidualnych', 'podmiotów gospodarczych', 'organizacji'],
    },
    lawAreas: {
      intro: 'Moja praktyka obejmuje sprawy z zakresu:',
      list: [
        'prawa cywilnego',
        'prawa rodzinnego',
        'prawa własności intelektualnej',
        'prawa pracy',
        'prawa gospodarczego',
        'prawa upadłościowego (w tym sprawy o ogłoszenie upadłości konsumenckiej)',
        'prawa administracyjnego',
        'prawa karnego',
      ],
    },
    closing:
      'Nieustannie staram się pogłębiać swoją wiedzę. Mam nadzieję, że obdarzą Państwo moją Kancelarię Adwokacką zaufaniem, powierzając swoją sprawę do prowadzenia.',
    signature: {
      text: 'Serdecznie zapraszam do współpracy,',
      name: 'Adwokat Agnieszka Jasak',
    },
  },
};

const ANIMATION_CONFIG = {
  DEFAULT: {
    tension: 280,
    friction: 60,
  },
  DELAYS: {
    HEADER: 200,
    TITLE: 400,
    SUBTITLE: 600,
    DESCRIPTION: 800,
  },
  TRANSFORMS: {
    FADE_IN: {
      from: { opacity: 0, transform: 'translateY(20px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
    },
    HEADER: {
      from: { opacity: 0, transform: 'translateY(-50px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
    },
    SIDE_ELEMENTS: {
      from: { opacity: 0, transform: 'translateX(-50px)' },
      to: { opacity: 1, transform: 'translateX(0)' },
    },
  },
} as const;

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
    ...ANIMATION_CONFIG.TRANSFORMS.FADE_IN,
    config: ANIMATION_CONFIG.DEFAULT,
  });

  const headerAnimation = useSpring({
    ...ANIMATION_CONFIG.TRANSFORMS.HEADER,
    delay: ANIMATION_CONFIG.DELAYS.HEADER,
    config: ANIMATION_CONFIG.DEFAULT,
  });

  const titleAnimation = useSpring({
    ...ANIMATION_CONFIG.TRANSFORMS.SIDE_ELEMENTS,
    delay: ANIMATION_CONFIG.DELAYS.TITLE,
    config: ANIMATION_CONFIG.DEFAULT,
  });

  const subtitleAnimation = useSpring({
    ...ANIMATION_CONFIG.TRANSFORMS.SIDE_ELEMENTS,
    delay: ANIMATION_CONFIG.DELAYS.SUBTITLE,
    config: ANIMATION_CONFIG.DEFAULT,
  });

  const descriptionAnimation = useSpring({
    ...ANIMATION_CONFIG.TRANSFORMS.SIDE_ELEMENTS,
    delay: ANIMATION_CONFIG.DELAYS.DESCRIPTION,
    config: ANIMATION_CONFIG.DEFAULT,
  });

  return (
    <>
      <animated.div className='home_header' style={headerAnimation}>
        <div className='header_content'>
          <div className='header_titles'>
            <animated.h2 className='header_main_title' style={titleAnimation}>
              {TEXTS.header.mainTitle}
            </animated.h2>
            <animated.h3 className='header_sub_title' style={subtitleAnimation}>
              {TEXTS.header.subTitle}
            </animated.h3>
          </div>
          <animated.p className='header_description' style={descriptionAnimation}>
            {TEXTS.header.description}
          </animated.p>
          <Button className='header_button' onClick={() => navigate('/kontakt#contact-form')}>
            {TEXTS.header.button}
          </Button>
        </div>
      </animated.div>
      <div className='container'>
        <div className='card_wrapper'>
          <animated.div className='card' style={fadeIn}>
            <div className='card_content'>
              <div className='about_me_content'>
                {TEXTS.aboutMe.paragraphs.map((paragraph, index) => (
                  <p key={index} className='about_me_paragraph'>
                    {paragraph}
                  </p>
                ))}

                <p className='about_me_paragraph'>
                  {TEXTS.aboutMe.services.intro}
                  <ul className='services_list'>
                    {TEXTS.aboutMe.services.list.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </p>

                <p className='about_me_paragraph'>
                  {TEXTS.aboutMe.lawAreas.intro}
                  <ul className='law_areas_list'>
                    {TEXTS.aboutMe.lawAreas.list.map((area, index) => (
                      <li key={index}>{area}</li>
                    ))}
                  </ul>
                </p>

                <p className='about_me_paragraph'>{TEXTS.aboutMe.closing}</p>

                <p className='about_me_paragraph signature'>
                  {TEXTS.aboutMe.signature.text}
                  <br />
                  {TEXTS.aboutMe.signature.name}
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
