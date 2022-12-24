import Balloon from '../src/components/Balloon/Balloon'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <>
      <div className={styles.titles}>
        <h1> My Portfolio</h1>
        <Balloon/>
      </div>
    </>
  )
}
