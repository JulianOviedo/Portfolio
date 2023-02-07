import SocialMedia from '../SocialMedia/SocialMedia'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'

import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box component='footer' sx={{ height: 100, p: '20px', width: '100%', display: 'flex', mt: '40px' }}>
      <Box component='nav' sx={{ display: 'flex', flexDirection: 'row', width: '100%', gap: '10px', alignItems: 'flex-end' }}>
        <SocialMedia link='https://www.linkedin.com/in/julian-oviedo-17b605136/' >
          <LinkedInIcon sx={{ fontSize: '30px' }} />
        </SocialMedia>
        <SocialMedia link='https://www.facebook.com/julian.oviedo.7' >
          <FacebookIcon sx={{ fontSize: '30px' }} />
        </SocialMedia>
        <SocialMedia link='https://www.instagram.com/julian.oviedo.7/' >
          <InstagramIcon sx={{ fontSize: '30px' }} />
        </SocialMedia>
        <SocialMedia link='https://github.com/JulianOviedo' >
          <GitHubIcon sx={{ fontSize: '30px' }} />
        </SocialMedia>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px', justifyContent: 'flex-end' }}>
        <Typography variant='contact' sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}><MailOutlineIcon fontSize='small'/>julianovie234@gmail.com</Typography>
        <Typography variant='contact' sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}><PhoneIphoneIcon fontSize='small'/>+54 9 351 761-9357</Typography>
      </Box>
    </Box>
  )
}

export default Footer
