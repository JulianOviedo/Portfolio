import styles from './PrimaryInput.module.css'

export default function PrimaryInput({ label, placeholder, type, name, value }) {
  return (
    <label className={styles.label}>
      <p>{label}</p>
      <input
        type={type}
        value={value}
        className={
          type === 'submit'
            ? styles['submit-button']
            : styles.input}
        name={name}
        placeholder={placeholder}
        required></input>
    </label>
  )
}
