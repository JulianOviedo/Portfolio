import { Avatar } from '@mui/material'
import Balloon from '../src/components/Balloon/Balloon'
import Card from '../src/components/Card/Card'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <>
      <div className={styles['avatar-container']}>
        <Avatar sx={{ width: 150, height: 150 }} alt='profile pic' src='/profile-img.jpg'/>
      </div>
      <h1 className={styles.h1}>Julian Oviedo Portfolio</h1>
      <div className={styles['cvs-container']}>
        <a className={styles['cvs-download']} download="downloadResumeSpanish" href="/public/Cv Julian Oviedo Spanish.pdf">Cv Spanish</a>
        <a className={styles['cvs-download']} download="downloadResumeEnglish" href="/public/Cv Julian Oviedo English.pdf">Cv English</a>
      </div>
      <div className={styles['card-container']}>
        <Card/>
      </div>
      <footer className={styles.footer}>
        <Balloon/>
      </footer>
    </>
  )
}
