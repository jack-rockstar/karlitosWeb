import Logo from '@components/General/Logo'
import Link from 'next/link'
import { IoLogoWhatsapp } from 'react-icons/io'
const menusNav = [
  {
    icon: <IoLogoWhatsapp className='w-6 h-6 ' />,
    href: '/siniestro',
    text: '51 942 815 057'
  },
  {
    icon: null,
    href: '/atencion',
    text: 'Atencion al cliente'
  }

]

export default function Navbar() {
  return (

    <nav className='w-full shadow-md bg-gradient-to-t from-orange-500 to-yellow-300'>
      <div className='flex flex-wrap items-center justify-between max-w-6xl p-3 mx-auto'>
        <Logo />
        <button data-collapse-toggle='navbar-solid-bg' type='button' className='inline-flex items-center justify-center flex-grow w-10 h-10 p-2 text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 hover:bg-gray-700 focus:ring-gray-600' aria-controls='navbar-solid-bg' aria-expanded='false'>
          <span className='sr-only'>Open main menu</span>
          <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15' />
          </svg>
        </button>
        <div className='hidden w-full md:block md:w-auto'>
          <ul className='flex flex-col mt-4 font-medium bg-gray-800 border-gray-700 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent'>
            {
              menusNav.map((e) =>
                <li key={e.href}>
                  <Link href={e.href} className='flex items-center justify-center px-4 py-2 text-white transition-all bg-transparent border-2 border-transparent rounded-lg gap-x-2 hover:bg-black/10'>{e.icon ?? ''} {e.text}</Link>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </nav>

  )
}
