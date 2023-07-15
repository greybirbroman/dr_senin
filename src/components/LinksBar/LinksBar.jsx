import styles from './LinksBar.module.css'
import Link from 'next/link'

const LinksBar = () => {
  return (
    <ul className={styles.linksList}>
         <li className={styles.link}>
            <Link href='tel:+79219050533' target='_blank' className={`${styles.link_phone}`}/>
        </li>
        <li className={styles.link}>
            <Link href='mailto:senkir@mail.ru' target='_blank' className={`${styles.link_email}`}/>
        </li>
        <li className={styles.link}>
            <Link href='tel:+79219050533' target='_blank' className={`${styles.link_telegram}`}/>
        </li>
    </ul>
   
  )
}

export default LinksBar
