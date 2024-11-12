import { animated, useTrail } from '@react-spring/web';

import { AnimatedTitle } from '../../components/AnimatedTitle/AnimatedTitle';
import './Services.scss';

interface LegalService {
  id: number;
  title: string;
  mainDescription: string;
  details: string[];
  icon: React.ReactNode;
}

interface ServicesProps {
  services: LegalService[];
}

export const Services: React.FC<ServicesProps> = ({ services }) => {
  const trails = useTrail(services.length, {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
    config: { mass: 1, tension: 280, friction: 20 },
  });

  return (
    <div className='services'>
      <AnimatedTitle className='services__main-title'>Nasze Usługi</AnimatedTitle>
      <div className='services__grid'>
        {trails.map((props, index) => (
          <animated.div key={services[index].id} style={props} className='services__card'>
            <div className='services__icon-wrapper'>{services[index].icon}</div>
            <div className='services__content'>
              <h3 className='services__title'>{services[index].title}</h3>
              <p className='services__description'>{services[index].mainDescription}</p>
              <ul className='services__details'>
                {services[index].details.map((detail, i) => (
                  <li key={i}>
                    <span className='services__bullet'>•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};
