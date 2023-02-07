import { useState } from 'react'
import ArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import ArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'

import styles from './Carousel.module.css'
import { Box } from '@mui/material'

function Carousel({ children }) {
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

  const handleMouseDown = (e) => {
    setDragging(true)
    setStartX(e.clientX)
  }

  const handleMouseUp = () => {
    setDragging(false)
  }

  const handleMouseMove = (e) => {
    if (!dragging) return
    if (e.clientX - startX > 50) {
      prev()
      setDragging(false)
    } else if (e.clientX - startX < -50) {
      next()
      setDragging(false)
    }
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div className={styles.carousel}>
        <ArrowLeftIcon fontSize='large' onClick={next} />
        <div
          className={`${styles['slides-container']} ${animating ? styles.animating : ''}`}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {children[currentIndex]}
        </div>
        <ArrowRightIcon fontSize='large' onClick={prev} />
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
