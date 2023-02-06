import SocialMedia from '../SocialMedia/SocialMedia'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'

import { Box } from '@mui/material'

const Footer = () => {
  return (
    <Box component='footer' sx={{ height: 100, p: '20px', position: 'fixed', bottom: '0', width: '100%', display: 'flex' }}>
      <Box component='nav' sx={{ display: 'flex', flexDirection: 'row', width: '100%', gap: '10px' }}>
        <SocialMedia link='https://www.linkedin.com/in/julian-oviedo-17b605136/' >
          <LinkedInIcon sx={{ fontSize: '25px' }} />
        </SocialMedia>
        <SocialMedia link='https://www.facebook.com/julian.oviedo.7' >
          <FacebookIcon sx={{ fontSize: '25px' }} />
        </SocialMedia>
        <SocialMedia link='https://www.instagram.com/julian.oviedo.7/' >
          <InstagramIcon sx={{ fontSize: '25px' }} />
        </SocialMedia>
        <SocialMedia link='https://github.com/JulianOviedo' >
          <GitHubIcon sx={{ fontSize: '25px' }} />
        </SocialMedia>
      </Box>
    </Box>
  )
}

export default Footer
