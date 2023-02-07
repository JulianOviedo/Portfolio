import Slides from '../src/components/Slides/Slides'
import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'
import { Box, useTheme } from '@mui/material'
import Contact from '../src/components/Contact/Contact'
import Stack from '../src/components/Stack/Stack'

export default function Home() {
  const theme = useTheme()
  return (
    <>
      <Header/>
      <Slides />
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        mt: '100px',
        py: '24px',
        [theme.breakpoints.down('740')]: {
          display: 'flex',
          flexDirection: 'column'
        }
      }}>
        <Contact/>
        <Stack/>
      </Box>
      <Footer/>
    </>
  )
}
