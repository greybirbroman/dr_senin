import styles from './Footer.module.css';
import LinksBar from '../LinksBar/LinksBar';
import Link from 'next/link';
import ContactItem from '../ContactItem/ContactItem';
import PrimaryLink from '../PrimaryLink/PrimaryLink';
import { contacts, footerLinks } from '../../utils/constants';

const NavigationItem = ({ href, title }) => {
  return (
    <li className={styles.listItemRow}>
      <PrimaryLink customClass={styles.navLink} href={href} title={title} />
    </li>
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
            <h3 className={styles.listTitle}>Контакты</h3>
            <ul className={styles.linksList}>
              {contacts.map((contact) => (
                <ContactItem
                  key={contact.id}
                  icon={contact.icon}
                  alt={contact.alt}
                  content={contact.content}
                  href={contact?.add + contact.content}
                />
              ))}
            </ul>
          </li>
            <li className={styles.listItem}>
              <h3 className={styles.listTitle}>Навигация</h3>
              <ul className={styles.linksList}>
                {footerLinks.map((link) => (
                  <NavigationItem
                    key={link.id}
                    href={link.href}
                    title={link.title}
                  />
                ))}
              </ul>
            </li>
        </ul>
      </div>
      <div className={styles.authorContainer}>
        <span>&#169; Copyright {year}.</span>
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
