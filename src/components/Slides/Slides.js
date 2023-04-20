import Carousel from '../Carousel/Carousel'
import Card from '../Card/Card'
import styles from '../Slides/Slides.module.css'
import { CircularProgress } from '@mui/material'
import ProyectsButtons from '../ProyectButtons/ProyectButtons'
import Timeline from '../Timeline/Timeline.js'

export default function Slides() {
  return (
    <Carousel>
      <div className={styles['card-container']}>
        <Card
          title="About me"
        >
          <p className={styles['card-description']}>👋 My name is Julian, I’m 26 years old. <strong>I’m currently studying Computer Science since almost 3 years and also have an Accountant degree.</strong> As you can see, I really like maths and everything related with numbers.<br /><br />🌍  I'm based in Córdoba, Argentina <br /><br />🖥 <strong>I'm a software developer</strong> with solid professional experience building web applications. My main focus is on the front-end, but i love building and learning about both ends of the stacks. <br /><br />📚 I consider myself a very capable person to achieve everything i propose to and always want to learn new things. I think i only need the oportunity to introduce myself and show what I'm worth</p>
        </Card>
      </div>

      {/* // EXPERIENCE  // */}

      <div className={styles['card-container']}>
        <Card
          title="Experience"
        >
          <Timeline/>
        </Card>
      </div>

      {/* // PROJECTS // */}

      <div className={styles['card-container']}>
        <Card
          title="Proyects"
        >
          <div className={styles.video}>
            <CircularProgress sx={{ zIndex: '-10', position: 'absolute' }} />
            <video muted autoPlay loop width="90%" height="100%">
              <source src={'/shoesShop-video.mp4'} type="video/mp4" />
            </video>
          </div>
          <p className={styles['card-description']}> 📚 <b>Shoes Shop - Ecommerce mock</b> <br /><br /> -A responsive app created by Next.js using Next-auth for management the authentication and mainly React.js and MUI, also other libraries like Axios & ReactQuery to connect the API to the app.</p>
          <ProyectsButtons repoLink='https://github.com/JulianOviedo/Shoes-Shop' deployLink='https://shoes-shop-kyl2.vercel.app/'/>
          <hr />
          <br />
          <div className={styles.video}>
            <CircularProgress sx={{ zIndex: '-10', position: 'absolute' }} />
            <video muted autoPlay loop width="90%" height="100%">
              <source src={'/Calculator-video.mp4'} type="video/mp4" />
            </video>
          </div>
          <p className={styles['card-description']}> 📚 <b>Calculator App </b><br /><br /> Just a Calculator with the android mobile design with MUI and React.js<br /><br /></p>
          <ProyectsButtons repoLink='https://github.com/JulianOviedo/CalculatorApp' deployLink='https://calculator-app-df6a9.web.app/'/>
          <hr />
          <br />
          <div className={styles.video}>
            <CircularProgress sx={{ zIndex: '-10', position: 'absolute' }} />
            <video muted autoPlay loop width="90%" height="100%">
              <source src={'/movie-browser.mp4'} type="video/mp4" />
            </video>
          </div>
          <p className={styles['card-description']}> 📚 <b>Movie Browser </b><br /><br /> Responsive Movie browser made with React. The main goal of this project was used the useMemo & useCallback hooks from React to avoid to fetch every mutation on the value of the controlled input. The API = https://www.omdbapi.com <br /><br /></p>
          <ProyectsButtons repoLink='https://github.com/JulianOviedo/Movie-Browser' deployLink='https://movie-browser-pi.vercel.app/'/>
          <hr />
          <br />
          <div className={styles.video}>
            <CircularProgress sx={{ zIndex: '-10', position: 'absolute' }} />
            <video muted autoPlay loop width="90%" height="100%">
              <source src={'/user-api.mp4'} type="video/mp4" />
            </video>
          </div>
          <p className={styles['card-description']}> 📚 <b>User API</b> <br /><br /> -App based on Next.js & Typescript made with React. The main goal of this app is the usage of the adventages of hooks and others tools from React</p>
          <ProyectsButtons repoLink='https://github.com/JulianOviedo/User-api' deployLink='https://user-api-iota.vercel.app/'/>
        </Card>
      </div>
    </Carousel>
  )
}
