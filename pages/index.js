import { Avatar } from '@mui/material'
import Balloon from '../src/components/Balloon/Balloon'
import styles from '../styles/Home.module.css'
import Slides from '../src/components/Slides/Slides'

export default function Home() {
  return (
    <>
      <header className={styles['avatar-container']}>
        <Avatar sx={{ width: 150, height: 150 }} alt='profile pic' src='/profile-img.jpg' />
      </header>
      <h1 className={styles.h1}>Julian Oviedo Portfolio</h1>
      <div className={styles['cvs-container']}>
        <a className={styles['cvs-download']} download="downloadResumeSpanish" href="/Cv Julian Oviedo Spanish.pdf">Cv Spanish</a>
        <a className={styles['cvs-download']} download="downloadResumeEnglish" href="/Cv Julian Oviedo English.pdf">Cv English</a>
      </div>
      <Slides />
      <footer className={styles.footer}>
        <h1>Hire me ! ➡</h1>
        <Balloon />
      </footer>
    </>
  )
}
