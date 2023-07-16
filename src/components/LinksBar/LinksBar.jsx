import styles from './LinksBar.module.css'
import Link from 'next/link'

const LinksBar = ({ white }) => {
  return (
    <ul className={styles.linksList}>
         <li className={styles.link}>
            <Link href='tel:+79219050533' target='_blank' className={`${!white ? styles.link_phone : styles.link_phone_white}`}/>
        </li>
        <li className={styles.link}>
            <Link href='mailto:senkir@mail.ru' target='_blank' className={`${!white ? styles.link_email : styles.link_email_white}`}/>
        </li>
        <li className={styles.link}>
            <Link href='tel:+79219050533' target='_blank' className={`${!white ? styles.link_telegram : styles.link_telegram_white}`}/>
        </li>
    </ul>
   
  )
}

export default LinksBar
