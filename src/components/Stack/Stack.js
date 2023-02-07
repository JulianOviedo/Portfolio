import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'

const Stack = () => {
  const baseURL = 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills'

  return (
    <>
      <Container sx={{ position: 'relative' }}>
        <Typography variant='h1' sx={{ textAlign: 'center', mt: '50px' }}>Stack</Typography>
        <Box sx={{ position: 'absolute', bottom: '100px', right: '100px' }}>
          <Image src={`${baseURL}/typescript-colored.svg`} width={55} height={55}></Image>
        </Box>
        <Box sx={{ position: 'absolute', bottom: '260px', right: '140px' }}>
          <Image src={`${baseURL}/javascript-colored.svg`} width={55} height={55}></Image>
        </Box>
        <Box sx={{ position: 'absolute', bottom: '540px', right: '280px' }}>
          <Image src={`${baseURL}/html5-colored.svg`} width={55} height={55}></Image>
        </Box>
        <Box sx={{ position: 'absolute', bottom: '340px', left: '120px' }}>
          <Image src={`${baseURL}/react-colored.svg`} width={55} height={55}></Image>
        </Box>
        <Box sx={{ position: 'absolute', bottom: '190px', left: '320px' }}>
          <Image src={`${baseURL}/nextjs-colored-dark.svg`} width={55} height={55}></Image>
        </Box>
        <Box sx={{ position: 'absolute', bottom: '320px', left: '300px' }}>
          <Image src={`${baseURL}/css3-colored.svg`} width={55} height={55}></Image>
        </Box>
        <Box sx={{ position: 'absolute', bottom: '600px', left: '90px' }}>
          <Image src={`${baseURL}/bootstrap-colored.svg`} width={55} height={55}></Image>
        </Box>
        <Box sx={{ position: 'absolute', bottom: '500px', left: '200px' }}>
          <Image src={`${baseURL}/materialui-colored.svg`} width={55} height={55}></Image>
        </Box>
        <Box sx={{ position: 'absolute', bottom: '100px', left: '150px' }}>
          <Image src={`${baseURL}/redux-colored.svg`} width={55} height={55}></Image>
        </Box>
        <Box sx={{ position: 'absolute', bottom: '520px', right: '100px' }}>
          <Image src={`${baseURL}/nodejs-colored.svg`} width={55} height={55}></Image>
        </Box>
        <Box sx={{ position: 'absolute', bottom: '400px', right: '200px', backgroundColor: 'white', borderRadius: '50%', p: '5px', py: '5px' }}>
          <Image src={`${baseURL}/express-colored.svg`} width={55} height={55}></Image>
        </Box>
        <Box sx={{ position: 'absolute', bottom: '520px', right: '100px' }}>
          <Image src={`${baseURL}/nodejs-colored.svg`} width={55} height={55}></Image>
        </Box>
      </Container>
    </>
  )
}
export default Stack
