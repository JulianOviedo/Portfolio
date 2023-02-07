import styles from '../../../styles/contact.module.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import PrimaryInput from '../PrimaryInput/PrimaryInput'
import Textarea from '../Textarea/Textarea'
import { Typography, useTheme } from '@mui/material'

export default function Contact() {
  const theme = useTheme()

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
        error: <b>The Email send failed, try again laterefr</b>
      }
    )
    e.target.reset()
  }
  return (
    <>
      <div className={styles['contact-container']}>
        <div className={styles['contact-container__form']}>
          <Typography variant='h1' sx={{
            textAlign: 'center',
            mt: '50px',
            [theme.breakpoints.down('md')]: {
              mt: '0'
            }
          }}> Contact</Typography>
          <form ref={form} onSubmit={sendEmail} className={styles.form}>
            <PrimaryInput type='text' label='Name *' name='user_name' placeholder={'Write your name'}/>
            <PrimaryInput type='email' label='Email *' name='user_email' placeholder='Write your email' />
            <Textarea type='textarea' label='Message *' name='message'/>
            <PrimaryInput type='submit' value='Send Email'/>
          </form>
        </div>
      </div>
    </>
  )
}
