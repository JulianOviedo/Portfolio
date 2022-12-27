import Carousel from '../Carousel/Carousel'
import Card from '../Card/Card'
import styles from '../../../styles/Home.module.css'

const descriptionAboutMe = ' 👋  Hi!  My name is Julian Oviedo, I\'m 26 years old \n\n 🌍  I\'m based in Córdoba, Argentina \n\n I\'m finishing the third year of my bachelor\'s degree in computer science and in search of a job position where I can continue to grow, learn and evolve both professionally and personally, exploiting my skills and abilities through commitment and love for what I do and study. \n\n I have solid knowledge in some frameworks like React.JS, Next.JS, Redux, Express and also, know Node.JS \n\n I consider myself a very capable person to achieve everything i propose to and always want to learn new things. I think i only need the oportunity to introduce myself and show what I\'m worth '

export default function Slides () {
  return (
    <Carousel>
      <div className={styles['card-container']}>
        <Card
          title="About me"
          description={descriptionAboutMe}/>
      </div>
      <div className={styles['card-container']}>
        <Card
          title="Proyects"
          description="HERE ARE MY PROJECTS"/>
      </div>
    </Carousel>
  )
}
