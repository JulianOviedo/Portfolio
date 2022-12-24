import { Avatar } from '@mui/material'
import Balloon from '../src/components/Balloon/Balloon'
import Card from '../src/components/Card/Card'
import styles from '../styles/Home.module.css'

export default function Home () {
  const descriptionAboutMe = ' I am finishing the third year of my bachelor\'s degree in computer science and in search of a job position where I can continue to grow, learn and evolve both professionally and personally, exploiting my skills and abilities through commitment and love for what I do and study. \n\n I have solid knowledge in some frameworks like React.JS, Next.JS, Redux, Express and also, know Node.JS \n\n I consider myself a very capable person to achieve everything i propose to and always want to learn new things. I think i only need the oportunity to introduce myself and show what I\'m worth\''
  return (
    <>
      <header className={styles['avatar-container']}>
        <Avatar sx={{ width: 150, height: 150 }} alt='profile pic' src='/profile-img.jpg'/>
      </header>
      <h1 className={styles.h1}>Julian Oviedo Portfolio</h1>
      <div className={styles['cvs-container']}>
        <a className={styles['cvs-download']} download="downloadResumeSpanish" href="/public/Cv Julian Oviedo Spanish.pdf">Cv Spanish</a>
        <a className={styles['cvs-download']} download="downloadResumeEnglish" href="/public/Cv Julian Oviedo English.pdf">Cv English</a>
      </div>
      <div className={styles['card-container']}>
        <Card
          title="About me"
          description={descriptionAboutMe}/>
      </div>
      <footer className={styles.footer}>
        <Balloon/>
      </footer>
    </>
  )
}
