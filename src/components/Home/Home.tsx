import image from '../../assets/aga.png';
import styles from './Home.styles.module.scss';

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.introduction}>
        <h1>Agnieszka Jasak</h1>
        <h2>Prawnik benc</h2>
      </div>
      <div className={styles.photo}>
        <img src={image} alt='Pani Prawnik' />
      </div>
    </div>
  );
};
