import Background from '../src/components/Background/Background'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <>
      <Background>
        <div className={styles.titles}>
          <h1> My Porfolio</h1>
        </div>
      </Background>
    </>
  )
}
