import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  typography: {
    download: {
      margin: '10px',
      border: '2px solid #ffffff',
      borderRadius: '10px',
      padding: '15px'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 425, // MOBILE
      md: 850, // TABLET
      lg: 1440 // DESKTOP DESIGN
    }
  }
})

theme.typography.h1 = {
  fontWeight: 600,
  fontSize: '40px',
  color: 'red',
  [theme.breakpoints.down('md')]: {
    fontSize: '35px',
    fontWeight: 700
  }
}
