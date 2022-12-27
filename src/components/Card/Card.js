import styles from './Card.module.css'

export default function Card ({ title, description, link }) {
  return (
    <div className={styles.card}>
      <h2 className={styles['card-title']}>{title}</h2>
      <p className={styles['card-description']}>{description}{link ? <a className={styles.a} href={link}>Click here!</a> : null }</p>
    </div>
  )
}
