import { animated, useSpring, useTrail } from '@react-spring/web';
import { useState } from 'react';
import { AnimatedTitle } from '../../components/AnimatedTitle/AnimatedTitle';
import { Button } from '../../components/Button/Buttons';
import './styles.scss';

export const Contact = () => {
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);

  const fadeIn = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    config: { tension: 280, friction: 20 },
  });

  const infoItems: { label: string; value: string; isLink?: boolean }[] = [
    { label: 'Telefon:', value: '665-643-337' },
    { label: 'E-Mail:', value: 'adwokat.agnieszka.jasak@gmail.com', isLink: true },
    { label: 'Rachunek Bankowy:', value: '77 1160 2202 0000 0006 3117 0464' },
    { label: 'NIP:', value: '772 243 79 97' },
    { label: 'REGON:', value: '52 362560 9' },
  ];

  const trails = useTrail(infoItems.length, {
    from: { opacity: 0, x: -20 },
    to: { opacity: 1, x: 0 },
    config: { mass: 1, tension: 280, friction: 20 },
  });

  const formSpring = useSpring({
    from: { opacity: 0, scale: 0.9 },
    to: { opacity: 1, scale: 1 },
    config: { tension: 280, friction: 20 },
    delay: 300,
  });

  const topicOptions = [
    { value: 'konsultacja', label: 'Konsultacja prawna' },
    { value: 'reprezentacja', label: 'Reprezentacja w sądzie' },
    { value: 'dokumenty', label: 'Przygotowanie dokumentów' },
    { value: 'inne', label: 'Inne' },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <animated.div className='contact' style={fadeIn}>
      <AnimatedTitle>Kontakt</AnimatedTitle>
      <div className='contact__content'>
        <div className='contact__info-container'>
          <div className='contact__info'>
            {trails.map((props, index) => (
              <animated.div key={index} style={props} className='contact__info-item'>
                <span className='contact__info-label'>{infoItems[index].label}</span>
                {infoItems[index].isLink ? (
                  <a
                    href={`mailto:${infoItems[index].value}`}
                    className='contact__info-value contact__info-value--link'
                  >
                    {infoItems[index].value}
                  </a>
                ) : (
                  <span className='contact__info-value'>{infoItems[index].value}</span>
                )}
              </animated.div>
            ))}
          </div>

          <animated.div className='contact__map' style={fadeIn}>
            <iframe
              src='https://www.google.com/maps/embed?pb=YOUR_MAPS_EMBED_URL'
              width='100%'
              height='450'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </animated.div>
        </div>

        <animated.div className='contact__form-section' id='contact-form' style={formSpring}>
          <h1 className='contact__main-title'>Skontaktuj się z kancelarią</h1>
          <p className='contact__subtitle'>Chętnie pomożemy bezpiecznie załatwić Twoją sprawę - zostaw kontakt.</p>

          <form onSubmit={handleSubmit} className='contact__form'>
            <div className='contact__form-row'>
              <div className='contact__field'>
                <input type='text' id='name' placeholder='Imię' required />
              </div>
              <div className='contact__field'>
                <input type='tel' id='phone' placeholder='Telefon*' required />
              </div>
            </div>
            <div className='contact__form-row'>
              <div className='contact__field'>
                <select id='topic' required>
                  <option value=''>-- Wybierz temat --</option>
                  {topicOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className='contact__field'>
                <input type='email' id='email' placeholder='E-mail' required />
              </div>
            </div>
            <div className='contact__field'>
              <textarea id='message' placeholder='Wiadomość' rows={6} required />
            </div>
            <div className='contact__consent'>
              <input
                type='checkbox'
                id='privacy'
                required
                checked={isPrivacyAccepted}
                onChange={(e) => setIsPrivacyAccepted(e.target.checked)}
              />
              <label htmlFor='privacy'>
                Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w formularzu zgodnie z Polityką
                Prywatności
              </label>
            </div>
            <Button type='submit' className='contact__button' disabled={!isPrivacyAccepted}>
              WYŚLIJ
            </Button>
          </form>
        </animated.div>
      </div>
    </animated.div>
  );
};
