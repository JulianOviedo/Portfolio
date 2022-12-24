import Balloon from '../src/components/Balloon/Balloon'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <>
      <h1 className={styles.h1}>Julian Oviedo Portfolio</h1>
      <div className={styles['cvs-container']}>
        <a className={styles['cvs-download']} download="downloadResumeSpanish" href="../public/Cv Julian Oviedo Spanish.pdf">Cv Spanish</a>
        <a className={styles['cvs-download']} download="downloadResumeEnglish" href="../public/Cv Julian Oviedo English.pdf">Cv English</a>
      </div>
      <footer className={styles.footer}>
        <Balloon/>
      </footer>
    </>
  )
}
