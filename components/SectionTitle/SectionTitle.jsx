import styles from './SectionTitle.module.css'

const SectionTitle = ({ title }) => {
  return (
    <p className={styles.title}>{title}</p>
  )
}

export default SectionTitle
