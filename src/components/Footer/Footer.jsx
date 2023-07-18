import styles from './Footer.module.css';
import Logo from '../Logo/Logo';
import LinksBar from '../LinksBar/LinksBar';
import Link from 'next/link';
import Image from 'next/image';
import { contacts } from '@/utils/info';

const ContactItem = ({ icon, content }) => {
  return (
    <li className={styles.listItemRow}>
      <Image className={styles.contact} src={icon} alt='Икон' />
      <span>{content}</span>
    </li>
  );
};

const NavigationItem = ({ href, title }) => {
  return (
    <div className={styles.listItemRow}>
      <a href={href}>{title}</a>
    </div>
  );
};

const WorkingHoursItem = ({ day, hours }) => {
  return (
    <div className={styles.listItemRow}>
      <p>{day}:</p>
      <span>{hours}</span>
    </div>
  );
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id='footer' className={styles.footer}>
      <div className={styles.contactsSection}>
        <div className={styles.container}>
          <p className={styles.author}>Сенин Кирилл Алексeевич</p>
          <LinksBar white={true} />
        </div>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <h4 className={styles.listTitle}>Контакты</h4>
            <ul>
              {contacts.map((contact) => (
                <ContactItem
                  key={contact.id}
                  icon={contact.icon}
                  content={contact.content}
                />
              ))}
            </ul>
          </li>
          <li className={styles.listItem}>
            <h4 className={styles.listTitle}>Навигация</h4>
            <NavigationItem href='#home' title='В начало' />
            <NavigationItem href='#about' title='Обо мне' />
          </li>
          <li className={styles.listItem}>
            <h4 className={styles.listTitle}>Рабочие часы</h4>
            <WorkingHoursItem day='Пт' hours='15:00 - 21:00' />
            <WorkingHoursItem day='Cб' hours='10:00 - 21:00' />
          </li>
        </ul>
      </div>
      <div className={styles.authorContainer}>
        <p>&#169;{' '}Copyright{' '}{year}.</p>
        <p className={styles.footerAuthor}>Сенин К.A.</p>
        <Link
          target='_blank'
          href='https://icons8.com'
          rel='noreferrer'
          className={styles.spanIcons}
        >
          Icons by icon8
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
