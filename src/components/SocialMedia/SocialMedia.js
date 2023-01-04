import Link from 'next/link';
import styles from './SocialMedia.module.css'

export default function SocialMedia ({link, children}) {
    return (
        <div className={styles['social-media-icon']}>
            <Link href={link}>
                {children}
            </Link>
            </div>
    )
}