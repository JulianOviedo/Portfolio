import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  typography: {
    download: {
      margin: '10px',
      width: '100%',
      border: '2px solid #ffffff',
      borderRadius: '10px',
      padding: '15px',
      textDecoration: 'none',
      display: 'flex',
      justifyContent: 'center',
      '&:hover': {
        animation: 'pulse 1.5s',
        cursor: 'pointer'
      },
      '@keyframes pulse': {
        '0%': {
          transform: 'scale(.85)'
        },
        '70%': {
          transform: 'scale(1)',
          boxShadow: '0 0 0 50px rgba(#5a99d4, 0)'
        },
        '100%': {
          transform: 'scale(1)',
          boxShadow: '0 0 0 0 rgba(#5a99d4, 0)'
        }
      }
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
  fontWeight: 'bold',
  fontSize: '2em',
  [theme.breakpoints.down('md')]: {
    // fontSize: '35px',
    // fontWeight: 700
  }
}
