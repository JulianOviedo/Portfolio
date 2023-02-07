import { Typography, Avatar, useTheme } from '@mui/material'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import { Box } from '@mui/system'

const Header = () => {
  const theme = useTheme()

  return (
    <>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        mt: '20px',
        gap: '15px',
        [theme.breakpoints.down('550')]: {
          flexDirection: 'column'
        }
      }}>
        <Avatar alt='profilePicture' sx={{ width: 150, height: 150 }} alt='profile pic' src='/profile-img.jpg' />
        <Box component='section' sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Typography sx={{ textAlign: 'center' }} variant='h1'>Julian Oviedo Portfolio</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Typography variant='download' component='a' download="downloadResumeSpanish" href="/Cv Julian Oviedo Spanish.pdf">Cv Spanish <FileDownloadIcon sx={{ ml: '5px' }} /></Typography>
            <Typography variant='download' component='a' download="downloadResumeEnglish" href="/Cv Julian Oviedo English.pdf">Cv English <FileDownloadIcon sx={{ ml: '5px' }} /></Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}
export default Header
