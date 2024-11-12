import { useState } from 'react';
import { Button } from '../Button/Buttons';
import './Contact.scss';

export const Contact = () => {
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className='contact'>
      <h1 className='contact__main-title'>Kontakt</h1>
      <div className='contact__content'>
        <div className='contact__info-container'>
          <div className='contact__info'>
            <div className='contact__info-item'>
              <span className='contact__info-label'>Telefon:</span>
              <span className='contact__info-value'>665-643-337</span>
            </div>
            <div className='contact__info-item'>
              <span className='contact__info-label'>E-Mail:</span>
              <a
                href='mailto:adwokat.agnieszka.jasak@gmail.com'
                className='contact__info-value contact__info-value--link'
              >
                adwokat.agnieszka.jasak@gmail.com
              </a>
            </div>

            <div className='contact__info-item'>
              <span className='contact__info-label'>Rachunek Bankowy:</span>
              <span className='contact__info-value'>77 1160 2202 0000 0006 3117 0464</span>
            </div>

            <div className='contact__info-item'>
              <span className='contact__info-label'>NIP:</span>
              <span className='contact__info-value'>772 243 79 97</span>
            </div>

            <div className='contact__info-item'>
              <span className='contact__info-label'>REGON:</span>
              <span className='contact__info-value'>52 362560 9</span>
            </div>
          </div>

          <div className='contact__map'>
            <iframe
              src='https://www.google.com/maps/embed?pb=YOUR_MAPS_EMBED_URL'
              width='100%'
              height='450'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>
        </div>

        <div className='contact__form-section'>
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
                  <option value='konsultacja'>Konsultacja prawna</option>
                  <option value='reprezentacja'>Reprezentacja w sądzie</option>
                  <option value='dokumenty'>Przygotowanie dokumentów</option>
                  <option value='inne'>Inne</option>
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
        </div>
      </div>
    </div>
  );
};
