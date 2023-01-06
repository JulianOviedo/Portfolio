import styles from './Background.module.css'
import { useEffect, useRef, useState } from 'react'
import NET from 'vanta/dist/vanta.waves.min'
import * as THREE from 'three'

export default function Background({ children }) {
  const [vantaEffect, setVantaEffect] = useState(0)
  const vantaRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          forceAnimate: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x0
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <main className={styles.main} ref={vantaRef}>
      {children}
    </main>
  )
}
