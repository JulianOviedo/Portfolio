import Carousel from '../Carousel/Carousel'
import Card from '../Card/Card'
import styles from '../../../styles/Home.module.css'

const descriptionAboutMe = ' 👋  Hi!  My name is Julian Oviedo, I\'m 26 years old \n\n 🌍  I\'m based in Córdoba, Argentina \n\n I\'m finishing the third year of my bachelor\'s degree in computer science and in search of a job position where I can continue to grow, learn and evolve both professionally and personally, exploiting my skills and abilities through commitment and love for what I do and study. \n\n I have solid knowledge in some frameworks like React.JS, Next.JS, Redux, Express and also, know Node.JS \n\n I consider myself a very capable person to achieve everything i propose to and always want to learn new things. I think i only need the oportunity to introduce myself and show what I\'m worth '
const linkExperience = 'https://github.com/qaprosoft/react-laba-arg-1'
const descriptionExperience = ' 💡 Software Developer at Solvd Inc. \n\n FROM > January 2022 \n TO > Present \n\n 💡 React Javascript Intern at Solvd Inc. \n\n FROM > June 2022 \n TO > December 2022 \n\n - Content and progress at '
const descriptionProyects1 = ' 📚 Shoes Shop - Ecommerce mock \n\n -A responsive app created by Next.js using mainly React.js and MUI, also other libraries like Axios & ReactQuery to connect the API to the app.   \n\n 📂 To see the code '
const linkProyect1 = 'https://github.com/JulianOviedo/Shoes-Sho'

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
          title="Experience"
          description={descriptionExperience}
          link={linkExperience}/>
      </div>
      <div className={styles['card-container']}>
        <Card
          title="Personal Proyects"
          gif={'/shoesShop-video.mp4'}
          description={descriptionProyects1}
          link={linkProyect1}>
          <p className={styles.p}> 🖥️ To see deployment <a href='www.shoes-shop-kyl2.vercel.app'>Go here!</a></p>
        </Card>
      </div>
    </Carousel>
  )
}
