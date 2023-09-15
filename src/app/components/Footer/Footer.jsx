import Logo from '@components/General/Logo'

export default function Footer() {
  return (

    <footer className='shadow bg-gradient-to-t from-orange-600 to-yellow-300'>
      <div className='w-full max-w-screen-xl p-4 mx-auto md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <Logo />
          <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0'>
            <li>
              <a href='#' className='mr-4 hover:underline md:mr-6 '>About</a>
            </li>
            <li>
              <a href='#' className='mr-4 hover:underline md:mr-6'>Privacy Policy</a>
            </li>
            <li>
              <a href='#' className='mr-4 hover:underline md:mr-6 '>Licensing</a>
            </li>
            <li>
              <a href='#' className='hover:underline'>Contact</a>
            </li>
          </ul>
        </div>
        <hr className='my-6 border-white sm:mx-auto lg:my-8' />
        <span className='block text-sm text-white sm:text-center'>© 2023 <a href='https://flowbite.com/' className='hover:underline'>KarlosSeguros™</a>. All Rights Reserved.</span>
      </div>
    </footer>
  )
}
