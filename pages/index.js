import Slides from '../src/components/Slides/Slides'
import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'
import { Container } from '@mui/material'
import Contact from '../src/components/Contact/Contact'
import Stack from '../src/components/Stack/Stack'

export default function Home() {
  return (
    <>
      <Header/>
      <Container sx={{ }}>
        <Slides />
        <Container sx={{ display: 'grid', gridTemplateColumns: '50% 50%', mt: '100px' }}>
          <Contact/>
          <Stack/>
        </Container>
      </Container>
      {/* <Footer/> */}
    </>
  )
}
