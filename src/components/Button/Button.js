import { Button } from '@mui/material'
import Link from 'next/link'
import styles from './Button.module.css'

export default function Balloon({children}) {
  return (
    <Link href="/contact" style={{ textDecoration: 'none' }}>
      <Button className={styles['contact-button']} variant="contained" size='large' sx={{
         fontFamily:'inherit !important', m: '20px', backgroundColor: 'white', color: 'black', textDecoration:'none', '&:hover': {
      backgroundColor: 'gray',
      color: 'white'}
      }}>
        {children}
      </Button>
    </Link>
  )
}

