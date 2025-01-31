import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/images/logo.svg'

export default function Logo() {
  return (
    <Link className="inline-flex" href="/" aria-label="Cruip">
      <Image
        width={32}
        height={32}
        priority
        src="/images/logo/logoWhite.svg"
        alt="Altan Logo"
        className="max-w-none"
      />
    </Link>
  )
}