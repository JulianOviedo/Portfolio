import Carousel from '../Carousel/Carousel'
import Card from '../Card/Card'
import styles from '../Slides/Slides.module.css'

export default function Slides() {
  return (
    <Carousel>
      <div className={styles['card-container']}>
        <Card
          title="About me"
        >
          <p className={styles['card-description']}>👋  Hi there ! My name is Julian, I’m 26 years old. I’m currently studying Computer Science since almost 3 years and also have an Accountant degree. As you can see, I really like maths and everything related with numbers. <br /><br />🌍  I'm based in Córdoba, Argentina <br /><br />🖥 I have solid knowledge in some frameworks like React.JS, Next.JS, Redux, Express and also, know Node.JS <br /><br />📚 I consider myself a very capable person to achieve everything i propose to and always want to learn new things. I think i only need the oportunity to introduce myself and show what I'm worth</p>
        </Card>
      </div>
      <div className={styles['card-container']}>
        <Card
          title="Experience"
        >
          <p className={styles['card-description']}> 💡<b> Software Developer at Solvd Inc. </b><br /><br /> FROM {'>'} January 2022 <br /> TO {'>'} Present <br /><br /> 💡 <b> React Javascript Intern at Solvd Inc. </b><br /><br /> FROM {'>'} June 2022 <br /> TO {'>'} December 2022 <br /><br /> - Content and progress at <a href='https://github.com/qaprosoft/react-laba-arg-1'>Click here!</a> <br /><br /> 💡<b> Accountant at Centro de Estudios Filosoficos y Teologicos</b> <br /><br /> FROM {'>'} August 2021 <br /> TO {'>'} December 2022 </p>
        </Card>
      </div>
      <div className={styles['card-container']}>
        <Card
          title="Personal Proyects"
        >
          <div className={styles.video}>
            <video muted autoPlay loop width="90%" height="100%">
              <source src={'/shoesShop-video.mp4'} type="video/mp4" />
            </video>
          </div>
          <p className={styles['card-description']}> 📚 <b>Shoes Shop - Ecommerce mock</b> <br /><br /> -A responsive app created by Next.js using Next-auth for management the authentication and mainly React.js and MUI, also other libraries like Axios & ReactQuery to connect the API to the app.   <br /><br /> 📂 To see the code <a href='https://github.com/JulianOviedo/Shoes-Shop'>Click here!</a></p>
          <p className={styles.p}> 🖥️ To see deployment <a href='www.shoes-shop-kyl2.vercel.app'>Go here!</a></p>
          <hr />
          <br />
          <div className={styles.video}>
            <video muted autoPlay loop width="90%" height="100%">
              <source src={'/Calculator-video.mp4'} type="video/mp4" />
            </video>
          </div>
          <p className={styles['card-description']}> 📚 <b>Calculator App </b><br /><br /> Just a Calculator with the android mobile design with MUI and React.js<br /><br /> 📂 To see the code <a href='https://github.com/JulianOviedo/CalculatorApp'>Click here!</a></p>
          <p className={styles.p}> 🖥️ To see deployment <a href='https://calculator-app-df6a9.web.app/'>Go here!</a></p>
        </Card>
      </div>
    </Carousel>
  )
}
