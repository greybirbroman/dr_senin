import styles from './PrimaryButton.module.css'

const PrimaryButton = ({ title, onClick }) => {
  return (
    <button type='button' className={styles.button} onClick={onClick}>
      {title}
    </button>
  )
}

export default PrimaryButton
