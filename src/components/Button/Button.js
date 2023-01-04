import { Button } from '@mui/material'
import Link from 'next/link'

export default function Balloon({children}) {
  return (
    <Link href="/contact" style={{ textDecoration: 'none' }}>
      <Button variant="contained" size='large' sx={{
         m: '20px', backgroundColor: 'white', color: 'black', textDecoration:'none', '&:hover': {
      backgroundColor: 'gray',
      color: 'white'}
      }}>
        {children}
      </Button>
    </Link>
  )
}

