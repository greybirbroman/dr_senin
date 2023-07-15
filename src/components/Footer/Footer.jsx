import styles from './Footer.module.css';
import Logo from '../Logo/Logo';
import LinksBar from '../LinksBar/LinksBar';
import Link from 'next/link';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <Logo />
      <div className={styles.authorContainer}>
        <p className={styles.footerAuthor}>Сенин Кирилл Алексеевич</p>
        <Link
          target='_blank'
          href='https://icons8.com'
          rel='noreferrer'
          className={styles.spanIcons}
        >
          Icons by icon8
        </Link>
        <p>&#169;{year}</p>
      </div>
      <LinksBar />
    </div>
  );
};

export default Footer;
