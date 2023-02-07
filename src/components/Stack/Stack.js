import { Container, Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import styles from './Stack.module.css'

const Stack = () => {
  const baseURL = 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills'

  const theme = useTheme()

  return (
    <>
      <Container sx={{
        position: 'relative',
        [theme.breakpoints.down('740')]: {
          height: 650
        }
      }}>
        <Typography variant='h1' sx={{ textAlign: 'center', mt: '50px' }}>Stack</Typography>
        <Box className={styles.skill} sx={{ position: 'absolute', bottom: '18%', right: '5%' }}>
          <Image src={`${baseURL}/typescript-colored.svg`} width={55} height={55}></Image>
        </Box>
        <Box className={styles.skill} sx={{ position: 'absolute', bottom: '30%', right: '20%' }}>
          <Image src={`${baseURL}/javascript-colored.svg`} width={55} height={55}></Image>
        </Box>
        <Box className={styles.skill} sx={{ position: 'absolute', bottom: '65%', right: '33%' }}>
          <Image src={`${baseURL}/html5-colored.svg`} width={55} height={55}></Image>
        </Box>
        <Box className={styles.skill} sx={{ position: 'absolute', bottom: '45%', left: '23%' }}>
          <Image src={`${baseURL}/react-colored.svg`} width={55} height={55}></Image>
        </Box>
        <Box className={styles.skill} sx={{ position: 'absolute', bottom: '25%', left: '9%' }}>
          <Image src={`${baseURL}/nextjs-colored-dark.svg`} width={55} height={55}></Image>
        </Box>
        <Box className={styles.skill} sx={{ position: 'absolute', bottom: '54%', left: '42%' }}>
          <Image src={`${baseURL}/css3-colored.svg`} width={55} height={55}></Image>
        </Box>
        <Box className={styles.skill} sx={{ position: 'absolute', bottom: '80%', left: '15%' }}>
          <Image src={`${baseURL}/bootstrap-colored.svg`} width={55} height={55}></Image>
        </Box>
        <Box className={styles.skill} sx={{ position: 'absolute', bottom: '72%', left: '33%' }}>
          <Image src={`${baseURL}/materialui-colored.svg`} width={55} height={55}></Image>
        </Box>
        <Box className={styles.skill} sx={{ position: 'absolute', bottom: '10%', left: '43%' }}>
          <Image src={`${baseURL}/redux-colored.svg`} width={55} height={55}></Image>
        </Box>
        <Box className={styles.skill} sx={{ position: 'absolute', bottom: '53%', right: '12%', backgroundColor: 'white', borderRadius: '50%', p: '5px', py: '5px' }}>
          <Image src={`${baseURL}/express-colored.svg`} width={55} height={55}></Image>
        </Box>
        <Box className={styles.skill} sx={{ position: 'absolute', bottom: '78%', right: '12%' }}>
          <Image src={`${baseURL}/nodejs-colored.svg`} width={55} height={55}></Image>
        </Box>
      </Container>
    </>
  )
}
export default Stack
