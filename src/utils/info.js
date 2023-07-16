
import image2 from '../images/spec-image-2.jpg'
import Mail from '../images/mail.svg'
import Phone from '../images/phone-icon.svg';

export const info = [
  {
    id: 1,
    title: 'Специализация',
    image: image2,
    content: [
      {
        text: 'Лечение кариеса зубов и его осложнений',
      },
      {
        text: 'Лечение корневых каналов зубов',
      },
      {
        text: 'Проведение профессиональной гигиены полости рта и лечение заболеваний пародонта',
      },
      {
        text: 'Протезирование зубов с использованием всех видов съемного и несъемного протезирования',
        additional:
          '(включая микропротезирование керамическими вкладками и изготовление виниров)',
      },
      {
        text: 'Протезирование на дентальных имплантатах',
        additional: '(включая протезирование по методу all-on-4)',
      },
      {
        text: 'Удаление зубов любой сложности',
        additional:
          '(Включая удаление полуретинированных и дистопированных зубов мудрости)',
      },
      {
        text: 'Установка дентальных имплантатов',
      },
      {
        text: 'Проведение операций направленной регенерации костной ткани и синус - лифтинга',
      },
    ],
  },
  {
    id: 2,
    title: 'Образование',
    image: image2,
    content: [
      {
        year: '2006',
        text: 'Московский Государственный Медико - Стоматологический Университет им. А.И. Евдокимова',
        additional: '(стоматология)',
      },
      {
        year: '2007',
        text: 'Интернатура на кафедре стоматологии общей практики и подготовки зубных техников ФПДО МГМСУ',
        additional: '(стоматология общей практики)',
      },
      {
        year: '2009',
        text: 'Ординатура на кафедре ортопедической стоматологии медицинского факультета Российского Университета Дружбы Народов',
        additional: '(стоматология ортопедическая)',
      },
      {
        year: '2014',
        text: 'Повышение квалификации в ГБОУ ВПО МГСМУ им А.И. Евдокимова на кафедре гнатологии и функциональной диагностики',
      },
      {
        year: '2017',
        text: 'Профессиональная переподготовка на кафедре стоматологии и челюстно - лицевой хирургии факультета повышения квалификации медицинских работников медицинского института РУДН',
        additional: '(стоматология хирургическая)',
      },
      {
        year: '2017',
        text: 'Повышение квалификации в ГБУЗ МО МОНИКИ им М.Ф. Владимирского по дополнительной профессиональной программе',
        additional: '"Дентальная имплантация"',
      },
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    text: '" Очень люблю и уважаю доктора Сенина Кирилла Алексеевича. Профессионал , ничего не скажешь, творческий и думающий врач. "',
    name: 'Елена Сарафанова',
    city: 'Санкт-Петербург',
  },
  {
    id: 2,
    text: '" Доктор Сенин профессионал своего дела, все чётко и по делу, замечательный, Быстро и качественно все делает. Адекватные цены. Спасибо. "',
    name: 'Inamallina',
    city: 'Санкт-Петербург',
  },
  {
    id: 3,
    text: '" Спасибо Сенину Кириллу Алексеевичу, мастер своего дела! сделал два зуба ,дал рекомендации по остальным зубам, результатом доволен! "',
    name: 'Павел Павелко',
    city: 'Санкт-Петербург',
  },
]

export const contacts = [
  {
    id: 1,
    icon: Phone,
    content: '+7 903 168 6387'
  },
  {
    id: 2,
    icon: Mail,
    content: 'senkir@mail.ru'
  },
]