import Phone from '../images/phone-icon.png';
import PhoneWhite from '../images/phone-white.png';
import Mail from '../images/gmail_logo.png';
import MailWhite from '../images/gmail-white.svg';
import Telegram from '../images/telegram_logo.png';
import TelegramWhite from '../images/telegram-white.svg';
import MailIcon from '../images/mail.svg'
import PhoneIcon from '../images/phone-icon.svg';

export const navTabs = [
    {
        id: 1,
        title: 'Cпециализация',
        link: '#specialization',
        aria: 'Переход к секции "Специализация"'
    },
    {
        id: 2,
        title: 'Образование',
        link: '#education',
        aria: 'Переход к секции "Образование"'
    },
    {
        id: 3,
        title: 'Контакты',
        area: 'Переход к секции "Контакты"',
        link: '#footer'
    },
]

export const contacts = [
    {
      id: 1,
      icon: PhoneIcon,
      add: 'tel:',
      content: '+7 903 168 6387'
    },
    {
      id: 2,
      icon: MailIcon,
      add: 'mailto:',
      content: 'skadentspb@mail.ru'
    },
  ]

export const authorContactsLinks = [
    {
      id: 1,
      linkHref: 'tel:+79219050533',
      label: 'Позвонить по телефону',
      imgSrcWhite: PhoneWhite,
      imgSrcDefault: Phone,
      imgAlt: 'Изображение, телефонная трубка, телефон',
    },
    {
      id: 2,
      linkHref: 'mailto:skadentspb@mail.ru',
      label: 'Написать на почтовый ящик',
      imgSrcWhite: MailWhite,
      imgSrcDefault: Mail,
      imgAlt: 'Изображение, почтовый конверт, почта',
    },
    {
      id: 3,
      linkHref: 'https://t.me/SKADent',
      label: 'Написать в соицальной сети "Телеграм"',
      imgSrcWhite: TelegramWhite,
      imgSrcDefault: Telegram,
      imgAlt: 'Изображение, месседжер, телеграм',
    },
  ];