import styles from './Nav.styles.module.scss';

export const NavBar = () => {
  const navItems = ['Home', 'About', 'Contact'];

  return (
    <nav className={styles.nav}>
      <div>Logo</div>
      <div className={styles.container}>
        <ul className={styles['nav-list']}>
          {navItems.map((item) => {
            return <li className={styles['nav-list-item']}>{item}</li>;
          })}
        </ul>
      </div>
      <div>call me</div>
      <div>fb itp</div>
    </nav>
  );
};
