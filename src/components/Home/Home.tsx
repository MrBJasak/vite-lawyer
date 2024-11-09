import image from '../../assets/agnieszka_marynarka.png';
import { Button } from '../Button/Buttons';
import { Divider } from '../Divider/Divider';
import './styles.scss';

export const Home = () => (
  <>
    <div className='home_header'>
      <div className='header_content'>
        <div className="header_titles">
          <h2 className="header_main_title">KANCELARIA ADWOKACKA</h2>
          <h3 className="header_sub_title">AGNIESZKA JASAK</h3>
        </div>
        <p className="header_description">
          Zapewniam profesjonalną i rzetelną obsługę w zakresie wszystkich
          czynności prawnych.
        </p>
        <Button className="header_button">UMÓW SIĘ</Button>
      </div>
    </div>
    <div className='container'>
      <div className='card_wrapper'>
        <div className='card'>
          <div className='card_content'>
            <Divider>
              <h1>O MNIE</h1>
            </Divider>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <img src={image} alt='agnieszka' className='card_image' />
        </div>
      </div>
    </div>
  </>
);
