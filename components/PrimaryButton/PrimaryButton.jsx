import styles from './PrimaryButton.module.css'

const PrimaryButton = ({ title, area, onClick, id }) => {
  return (
    <button type='button' className={styles.button} onClick={onClick} role='button' id={id} area-aria-label={area}>
      {title}
    </button>
  )
}

export default PrimaryButton
