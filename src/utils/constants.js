import Phone from '../../public/images/phone-icon.png';
import PhoneWhite from '../../public/images/phone-white.png';
import Mail from '../../public/images/gmail_logo.png';
import MailWhite from '../../public/images/gmail-white.svg';
import Telegram from '../../public/images/telegram_logo.png';
import TelegramWhite from '../../public/images/telegram-white.svg';
import MailIcon from '../../public/images/mail.svg'
import PhoneIcon from '../../public/images/phone-icon.svg';

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