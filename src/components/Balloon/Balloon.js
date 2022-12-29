import ContactMailIcon from '@mui/icons-material/ContactMail'
import Link from 'next/link'

export default function Balloon() {
  return (
    <Link href="/contact">
      <ContactMailIcon sx={{
        width: 55, height: 55, m: '20px', color: '#ffffff'
      }}>
      </ContactMailIcon>
    </Link>
  )
}
