import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  typography: {
  },
  contact: {
  },
  breakpoints: {
    values: {
      xs: 0,
      425: 425, // MOBILE
      550: 550,
      740: 740,
      900: 900, // TABLET
      1440: 1440 // DESKTOP DESIGN
    }
  }
})

theme.typography.h1 = {
  fontWeight: 'bold',
  fontSize: '1.8em',
  [theme.breakpoints.down('740')]: {
    fontSize: '1.5em'
  }
}

theme.typography.download = {
  margin: '10px',
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
  },
  [theme.breakpoints.down('740')]: {
    padding: '8px'
  }
}

theme.typography.contact = {
  fontSize: '10px',
  [theme.breakpoints.down('425')]: {
    fontSize: '5px'
  }

}
