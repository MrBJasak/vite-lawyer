import { animated, useSpring } from '@react-spring/web';
import './Fee.scss';

export const Fee = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={fadeIn} className='fee'>
      <div className='fee__container'>
        <section>
          <h2 className='fee__title'>Honorarium</h2>

          <p className='fee__paragraph'>
            Honorarium w każdej sprawie ustalane jest przeze mnie indywidualnie w zależności od skomplikowania sprawy i
            nakładu pracy.
          </p>

          <p className='fee__paragraph'>Cena porady prawnej zależna jest od charakteru sprawy.</p>

          <p className='fee__paragraph'>
            Przy ustalaniu mojego wynagrodzenia kieruję się stawkami określonymi w Rozporządzeniu Ministra
            Sprawiedliwości z dnia 22 października 2015 r. w sprawie opłat za czynności adwokackie.
          </p>

          <p className='fee__paragraph'>W zależności od woli klienta stosowane przeze mnie metody rozliczenia to:</p>

          <ul className='fee__list'>
            <li>ryczałt</li>
            <li>rozliczenie godzinowe</li>
            <li>premia za sukces w pozytywnym zakończeniu sprawy</li>
          </ul>
        </section>
      </div>
    </animated.div>
  );
};
