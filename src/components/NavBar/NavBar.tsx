import { FacebookIcon } from '../../icons/FacebookIcon';
import { Button } from '../Button/Buttons';
import styles from './Nav.styles.module.scss';

export const NavBar = () => {
  const navItems = ['Home', 'About', 'Contact', 'Kancelaria', 'Usługi'];

  return (
    <nav className={styles.nav}>
      <div>Logo</div>
      <div className={styles.container}>
        <ul className={styles['nav-list']}>
          {navItems.map((item) => {
            return (
              <li key={item} className={styles['nav-list-item']}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.buttons}>
        <div>
          <Button variant='outline'>call me</Button>
        </div>
        <div>
          <a className={styles['nav-icon']} href='/'>
            <FacebookIcon />
          </a>
        </div>
      </div>
    </nav>
  );
};
