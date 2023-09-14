import Image from 'next/image'
import Link from 'next/link'

const menusNav = [
  {
    href: '/atencion',
    text: 'Atencion al cliente'
  },
  {
    href: '/siniestro',
    text: 'Denuncia tu siniestro'
  }
]

export default function Navbar() {
  return (

    <nav className='bg-primary'>
      <div className='flex flex-wrap items-center justify-between max-w-6xl p-3 mx-auto'>
        <Link href='/' className='flex items-center gap-x-2'>
          <Image src='/img/logoavatar.png' width={50} height={40} loading='lazy' alt='Karlitos Web Logo' />
          {/* <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>Karlitos Seguros </span> */}
        </Link>
        {/* <button data-collapse-toggle='navbar-solid-bg' type='button' className='inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls='navbar-solid-bg' aria-expanded='false'>
          <span className='sr-only'>Open main menu</span>
          <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15' />
          </svg>
        </button> */}
        <div className='hidden w-full md:block md:w-auto' id='navbar-solid-bg'>
          <ul className='flex flex-col mt-4 font-medium bg-gray-800 border-gray-700 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent'>
            {
              menusNav.map((e) =>
                <li key={e.href}>
                  <Link href={e.href} className='px-4 py-2 text-white transition-all bg-transparent border-2 border-transparent rounded-lg hover:bg-black/30'>{e.text}</Link>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </nav>

  )
}