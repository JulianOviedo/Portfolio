import styles from './Card.module.css'

export default function Card({ title, children }) {
  return (
    <div className={styles.card}>
      <h2 className={styles['card-title']}>{title}</h2>
      {children}
    </div>
  )
}
