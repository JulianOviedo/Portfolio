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
        <Box className={styles.skill} sx={{ position: 'absolute', bottom: '18%', right: '5%', '&:hover::after': { content: '"Typescript"' } }}>
          <Image alt='Typescript' title='Typescript' src={`${baseURL}/typescript-colored.svg`} width={55} height={55}></Image>
        </Box>
        <Box className={styles.skill} sx={{ position: 'absolute', bottom: '30%', right: '20%', '&:hover::after': { content: '"Javascript"' } }}>
          <Image alt='Javascript' title='Javascript' src={`${baseURL}/javascript-colored.svg`} width={55} height={55}></Image>
        </Box>
        <Box className={styles.skill} sx={{ position: 'absolute', bottom: '65%', right: '33%', '&:hover::after': { content: '"HTML"' } }}>
          <Image alt='html' title='html' src={`${baseURL}/html5-colored.svg`} width={55} height={55}></Image>
        </Box>
        <Box className={styles.skill} sx={{ position: 'absolute', bottom: '45%', left: '23%', '&:hover::after': { content: '"React.js"' } }}>
          <Image alt='React.js' title='React.js' src={`${baseURL}/react-colored.svg`} width={55} height={55}></Image>
        </Box>
        <Box className={styles.skill} sx={{ position: 'absolute', bottom: '25%', left: '9%', '&:hover::after': { content: '"Next.js"' } }}>
          <Image alt='Next.js' title='Next.js' src={`${baseURL}/nextjs-colored-dark.svg`} width={55} height={55}></Image>
        </Box>
        <Box className={styles.skill} sx={{ position: 'absolute', bottom: '54%', left: '42%', '&:hover::after': { content: '"CSS"' } }}>
          <Image alt='CSS' title='CSS' src={`${baseURL}/css3-colored.svg`} width={55} height={55}></Image>
        </Box>
        <Box className={styles.skill} sx={{ position: 'absolute', bottom: '80%', left: '15%', '&:hover::after': { content: '"Bootstrap"' } }}>
          <Image alt='Bootstrap' title='Bootstrap' src={`${baseURL}/bootstrap-colored.svg`} width={55} height={55}></Image>
        </Box>
        <Box className={styles.skill} sx={{ position: 'absolute', bottom: '72%', left: '33%', '&:hover::after': { content: '"MaterialUI"' } }}>
          <Image alt='Material UI' title='Material UI' src={`${baseURL}/materialui-colored.svg`} width={55} height={55}></Image>
        </Box>
        <Box className={styles.skill} sx={{ position: 'absolute', bottom: '10%', left: '43%', '&:hover::after': { content: '"Redux"' } }}>
          <Image alt='Redux' title='Redux' src={`${baseURL}/redux-colored.svg`} width={55} height={55}></Image>
        </Box>
        <Box className={styles.skill} sx={{ position: 'absolute', bottom: '53%', right: '12%', backgroundColor: 'white', borderRadius: '50%', p: '5px', py: '5px', '&:hover::after': { content: '"Express"' } }}>
          <Image alt='Express' title='Express' src={`${baseURL}/express-colored.svg`} width={55} height={55}></Image>
        </Box>
        <Box className={styles.skill} sx={{ position: 'absolute', bottom: '78%', right: '12%', '&:hover::after': { content: '"Node.js"' } }}>
          <Image alt='Node.js' title='Node.js' src={`${baseURL}/nodejs-colored.svg`} width={55} height={55}></Image>
        </Box>
      </Container>
    </>
  )
}
export default Stack
