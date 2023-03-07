import { Box, Link } from '@mui/material'
import styles from './ProyectButtons.module.css'

export default function ProyectsButtons ({ repoLink, deployLink }) {
  return (
    <Box sx={{ display: 'flex', gap: '20px', p: '10px', justifyContent: 'center' }}>
      <Link href={repoLink} className={styles['proyect-bttn']} target='_blank'>📂 Repo</Link>
      <Link href={deployLink} className={styles['proyect-bttn']} target='_blank'>🖥 Deploy</Link>
    </Box>
  )
}
