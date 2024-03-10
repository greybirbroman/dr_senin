import Phone from '../public/phone-icon.png';
import PhoneWhite from '../public/phone-white.png';
import Mail from '../public/gmail_logo.png';
import MailWhite from '../public/gmail-white.svg';
import Telegram from '../public/telegram_logo.png';
import TelegramWhite from '../public/telegram-white.svg';
import MailIcon from '../public/mail.svg';
import PhoneIcon from '../public/phone-icon.svg';

export const freepikLink =
'https://ru.freepik.com/free-photo/top-view-over-career-guidance-items-for-dentists_27641893.htm#page=6&query=dental%20sergery&position=12&from_view=search&track=ais';

export const navTabs = [
  {
    id: 1,
    title: 'Cпециализация',
    link: '#specialization',
    aria: 'Переход к секции "Специализация"',
  },
  {
    id: 2,
    title: 'Образование',
    link: '#education',
    aria: 'Переход к секции "Образование"',
  },
  {
    id: 3,
    title: 'Контакты',
    area: 'Переход к секции "Контакты"',
    link: '#footer',
  },
];

export const contacts = [
  {
    id: 1,
    icon: PhoneIcon,
    alt: 'Иконка, изображение телефона',
    add: 'tel:',
    content: '+7(903)168-63-87',
  },
  {
    id: 2,
    icon: MailIcon,
    alt: 'Иконка, изображение почтового конверта',
    add: 'mailto:',
    content: 'skadentspb@mail.ru',
  },
];

export const spanContact = [
  {
    id: 1,
    icon: PhoneIcon,
    alt: 'Иконка, изображение телефона',
    add: 'tel:',
    content: '+7(903)168-63-87',
  },
];

export const footerLinks = [
  {
    id: 1,
    href: '#home',
    title: 'В начало',
  },
  {
    id: 2,
    href: '#about',
    title: 'Специализация',
  },
];

export const authorContactsLinks = [
  {
    id: 1,
    linkHref: 'tel:+79031686387',
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
