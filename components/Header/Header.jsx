import styles from './Header.module.css';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header id="home" className={styles.header}>
      <Navigation />
    </header>
  );
};

export default Header;
