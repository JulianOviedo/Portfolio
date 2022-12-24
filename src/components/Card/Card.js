import styles from './Card.module.css'

export default function Card ({ title, description }) {
  return (
    <div className={styles.card}>
      <h2 className={styles['card-title']}>{title}</h2>
      <p className={styles['card-description']}>{description}</p>
    </div>
  )
}
