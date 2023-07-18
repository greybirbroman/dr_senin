import styles from './PrimaryButton.module.css'

const PrimaryButton = ({ title, area, onClick }) => {
  return (
    <button type='button' className={styles.button} onClick={onClick} role='button' id='al' area-aria-label={area}>
      {title}
    </button>
  )
}

export default PrimaryButton
