import styles from './LinksBar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Phone from '../../images/phone-icon.png';
import PhoneWhite from '../../images/phone-white.png';
import Mail from '../../images/gmail_logo.png';
import MailWhite from '../../images/gmail-white.svg';
import Telegtram from '../../images/telegram_logo.png';
import TelegramWhite from '../../images/telegram-white.svg';

const LinksBar = ({ white }) => {
  const authorLinks = [
    {
      id: 1,
      linkHref: 'tel:+79219050533',
      label: 'Позвонить по телефону',
      imgSrc: white ? PhoneWhite : Phone,
      imgAlt: 'Изображение, телефонная трубка, телефон',
    },
    {
      id: 2,
      linkHref: 'mailto:senkir@mail.ru',
      label: 'Написать на почтовый ящик',
      imgSrc: white ? MailWhite : Mail,
      imgAlt: 'Изображение, почтовый конверт, почта',
    },
    {
      id: 3,
      linkHref: 'tel:+79219050533',
      label: 'Написать в соицальной сети "Телеграм"',
      imgSrc: white ? TelegramWhite : Telegtram,
      imgAlt: 'Изображение, месседжер, телеграм',
    },
  ];
  return (
    <ul className={styles.linksList}>
      {authorLinks.map((link) => (
        <>
          <li key={link.id} className={styles.listItem}>
            <Link
              href={link.linkHref}
              target='_blank'
              aria-label={link.label}
              className={styles.link}
            >
              <Image
                src={link.imgSrc}
                alt={link.imgAlt}
                className={styles.linkImage}
              />
            </Link>
          </li>
        </>
      ))}
    </ul>
  );
};

export default LinksBar;
