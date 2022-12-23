import Background from '../src/components/Background/Background'
import styles from '../styles/Home.module.css'
import Navbar from '../src/components/NavBar/NavBar'

export default function Home () {
  return (
    <>
      <Background>
        <Navbar/>
        <div className={styles.titles}>
          <h1> My Portfoli</h1>
        </div>
      </Background>
    </>
  )
}
