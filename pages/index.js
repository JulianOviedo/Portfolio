import { Avatar, CircularProgress } from '@mui/material'
import Button from '../src/components/Button/Button'
import styles from '../styles/Home.module.css'
import Slides from '../src/components/Slides/Slides'
import SocialMedia from '../src/components/SocialMedia/SocialMedia'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(null)
  const handleClick = function handleClick() {
    setIsLoading(true)
  }

  return (
    <>
      <header className={styles['avatar-container']}>
        <Avatar sx={{ width: 150, height: 150 }} alt='profile pic' src='/profile-img.jpg' />
      </header>
      <h1 className={styles.h1}>Julian Oviedo Portfolio</h1>
      <div className={styles['cvs-container']}>
        <a className={styles['cvs-download']} download="downloadResumeSpanish" href="/Cv Julian Oviedo Spanish.pdf">Cv Spanish <FileDownloadIcon sx={{ ml: '5px' }}/></a>
        <a className={styles['cvs-download']} download="downloadResumeEnglish" href="/Cv Julian Oviedo English.pdf">Cv English <FileDownloadIcon sx={{ ml: '5px' }}/></a>
      </div>
      <Slides />
      <footer className={styles.footer}>
        <div className={styles['footer-social-media']}>
          <SocialMedia link='https://www.linkedin.com/in/julian-oviedo-17b605136/' >
            <LinkedInIcon sx={{ fontSize: '40px' }} />
          </SocialMedia>
          <SocialMedia link='https://www.facebook.com/julian.oviedo.7' >
            <FacebookIcon sx={{ fontSize: '40px' }} />
          </SocialMedia>
          <SocialMedia link='https://www.instagram.com/julian.oviedo.7/' >
            <InstagramIcon sx={{ fontSize: '40px' }} />
          </SocialMedia>
          <SocialMedia link='https://github.com/JulianOviedo' >
            <GitHubIcon sx={{ fontSize: '40px' }} />
          </SocialMedia>
        </div>
        <Button onClick={handleClick}>
          <Link href="/contact" style={{ textDecoration: 'none', color: 'black', width: '100%' }}> {isLoading ? <CircularProgress size='1rem' /> : 'Contact Me'} </Link>
        </Button>
      </footer>
    </>
  )
}
