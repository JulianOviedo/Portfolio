import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import Link from 'next/link'
import styles from '../styles/contact.module.css'

export default function Contact () {
  return (
    <>
      <h1 className={styles.h1}>You can contact me through this form:</h1>
      <form method="post" action="mailto:julianovie234@gmail.com" className={styles.form}>
        <label>
          <p className={styles['form-label']}>Name *</p>
          <input required className={styles.input}/>
        </label>
        <label>
          <p className={styles['form-label']}>Email *</p>
          <input type='email' required className={styles.input}/>
        </label>
        <label>
          <p className={styles['form-label']}>Message *</p>
          <textarea required className={styles.textarea}/>
        </label>
        <button className={styles['form-button']}>Send Email</button>
      </form>
      <footer className={styles.footer}>
        <Link href="/">
          <ArrowBackIosNewIcon fontSize='large' sx={{
            width: 55, height: 55, m: '20px', color: '#ffffff', cursor: 'pointer'
          }}></ArrowBackIosNewIcon>
        </Link>

      </footer>
    </>
  )
}
