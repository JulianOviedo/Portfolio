import Link from 'next/link';

export default function SocialMedia ({link, children}) {
    return (
        <div >
            <Link href={link}>
                {children}
            </Link>
            </div>
    )
}