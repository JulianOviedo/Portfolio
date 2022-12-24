import Balloon from '../src/components/Balloon/Balloon'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <>
      <h1 className={styles.h1}>Julian Oviedo Portfolio</h1>
      <footer className={styles.footer}>
        <Balloon/>
      </footer>
    </>
  )
}
