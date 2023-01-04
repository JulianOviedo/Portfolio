import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import Link from 'next/link'
import styles from '../styles/contact.module.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast'

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uzp3v97', 'template_1g30q5a', form.current, 'YcAYDjd6_cta-3n9I')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    toast.promise(
      emailjs.sendForm('service_uzp3v97', 'template_1g30q5a', form.current, 'YcAYDjd6_cta-3n9I')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        }),
      {
        loading: 'Sending...',
        success: <b>Email was sended !</b>,
        error: <b>The Email send failed, try again later</b>,
      }
    )
    e.target.reset()
  };
  return (
    <div className={styles['contact-container']}>
      <div className={styles['contact-container__info']}>
        <h1>hola</h1>
      </div>
      <div className={styles['contact-container__form']}>
        <h1 className={styles.h1}>You can contact me through this form:</h1>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <label>
            <p className={styles['form-label']}>Name *</p>
            <input type="text" name="user_name" required className={styles.input} />
          </label>
          <label>
            <p className={styles['form-label']}>Email *</p>
            <input type="email" name="user_email" required className={styles.input} />
          </label>
          <label>
            <p className={styles['form-label']}>Message *</p>
            <textarea name="message" required className={styles.textarea} />
          </label>
          <input type='submit' className={styles['form-button']} value='Send Email' />
        </form>
      </div>
        <footer className={styles.footer}>
          <Link href="/">
            <ArrowBackIosNewIcon fontSize='large' sx={{
              width: 55, height: 55, m: '20px', color: '#ffffff', cursor: 'pointer'
            }}></ArrowBackIosNewIcon>
          </Link>
        </footer>
    </div>
  )
}
