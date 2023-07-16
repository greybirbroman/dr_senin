import styles from './Contacts.module.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import Link from 'next/link'

const Contacts = () => {
  return (
    <section className={styles.section}>
      <SectionTitle title='контакты'/>
    </section>
  )
}

export default Contacts
