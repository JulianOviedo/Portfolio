import styles from './Card.module.css'

export default function Card ({ title, description, link, children, gif }) {
  return (
    <div className={styles.card}>
      <h2 className={styles['card-title']}>{title}</h2>
      {gif
        ? <div className={styles.video}> <video autoPlay loop width={600} height={350}>
          <source src={gif} type="video/mp4" />
        </video></div>
        : null}
      <p className={styles['card-description']}>{description}{link ? <a className={styles.a} href={link}>Click here!</a> : null }</p>
      {children}
    </div>
  )
}
