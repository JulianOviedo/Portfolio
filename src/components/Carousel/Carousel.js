import { useState } from 'react'
import ArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import ArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'

import styles from './Carousel.module.css'
import { Box, useTheme } from '@mui/material'

function Carousel({ children }) {
  const theme = useTheme()

  // wich slide should display && animation effect

  const [currentIndex, setCurrentIndex] = useState(0)

  const [animating, setAnimating] = useState(false)

  const next = () => {
    setAnimating(true)
    setTimeout(() => {
      setCurrentIndex(currentIndex + 1 >= children.length ? 0 : currentIndex + 1)
      setAnimating(false)
    }, 500)
  }

  const prev = () => {
    setAnimating(true)
    setTimeout(() => {
      setCurrentIndex(currentIndex - 1 < 0 ? children.length - 1 : currentIndex - 1)
      setAnimating(false)
    }, 500)
  }

  // to change slide with mouse or screen scroll in mobile

  const [dragging, setDragging] = useState(false)
  const [startX, setStartX] = useState(0)

  const handleTouchStart = (e) => {
    setDragging(true)
    setStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    setDragging(false)
  }

  const handleTouchMove = (e) => {
    if (!dragging) return
    if (e.touches[0].clientX - startX > 50) {
      prev()
      setDragging(false)
    } else if (e.touches[0].clientX - startX < -50) {
      next()
      setDragging(false)
    }
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div className={styles.carousel}>
        <ArrowLeftIcon sx={{
          [theme.breakpoints.down('400')]: {
            display: 'none'
          }
        }} fontSize='large' onClick={prev} />
        <div
          className={`${styles['slides-container']} ${animating ? styles.animating : ''}`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}

        >
          {children[currentIndex]}
        </div>
        <ArrowRightIcon sx={{
          [theme.breakpoints.down('400')]: {
            display: 'none'
          }
        }} fontSize='large' onClick={next} />
      </div>
      <Box>
        <div className={styles['dots-container']}>
          {children.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
            />
          ))}
        </div>
      </Box>
    </Box>
  )
};

export default Carousel
