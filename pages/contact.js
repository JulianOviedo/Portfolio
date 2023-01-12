import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import Link from 'next/link'
import styles from '../styles/contact.module.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import Card from '../src/components/Card/Card'
import PrimaryInput from '../src/components/PrimaryInput/PrimaryInput'
import Textarea from '../src/components/Textarea/Textarea'

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_uzp3v97', 'template_1g30q5a', form.current, 'YcAYDjd6_cta-3n9I')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
    toast.promise(
      emailjs.sendForm('service_uzp3v97', 'template_1g30q5a', form.current, 'YcAYDjd6_cta-3n9I')
        .then((result) => {
          console.log(result.text)
        }, (error) => {
          console.log(error.text)
        }),
      {
        loading: 'Sending...',
        success: <b>Email was sended !</b>,
        error: <b>The Email send failed, try again later</b>
      }
    )
    e.target.reset()
  }
  return (
    <>
      <div className={styles['contact-container']}>
        <div className={styles['contact-container__info']}>
          <div className={styles['contact-container__info-container']}>
            <Card title={'Personal data'}>
              <ul className={styles['contact-container__info-card']}>
                <li>E-mail ➡️ julianovie234@gmail.com</li>
                <li>Celphone ➡️  +54 9 351 761-9357</li>
              </ul>
            </Card>
          </div>
        </div>
        <div className={styles['contact-container__form']}>
          <h1 className={styles.h1}>Contact me</h1>
          <form ref={form} onSubmit={sendEmail} className={styles.form}>
            <PrimaryInput type='text' label='Name *' name='user_name' placeholder={'Write your name'}/>
            <PrimaryInput type='email' label='Email *' name='user_email' placeholder='Write your email' />
            <Textarea type='textarea' label='Message *' name='message'/>
            <PrimaryInput type='submit' value='Send Email'/>
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
    </>
  )
}
