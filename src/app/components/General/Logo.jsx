import Link from 'next/link'

export default function Logo() {
  return (
    <Link href='/' className='flex items-center gap-x-2 max-w-max'>
      <img className='bg-logo' src='/img/logo.png' alt='Karlitos Web Logo' />
    </Link>
  )
}
