export default function Footer() {
  return (

    <footer className='bottom-0 left-0 z-20 w-full p-4 border-t shadow  bg-primary md:flex md:items-center md:justify-between md:p-6'>
      <span className='text-sm sm:text-center'>© 2023 <a href='https://flowbite.com/' className='hover:underline text-sm text-blue-700 '>KarlosSeguros™</a>. All Rights Reserved.
      </span>
      <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-black sm:mt-0'>
        <li>
          <a href='#' className='mr-4 hover:underline md:mr-6 '>Sobre Nosotros</a>
        </li>
        <li>
          <a href='#' className='mr-4 hover:underline md:mr-6'>Politica de Privacidad</a>
        </li>
        <li>
          <a href='#' className='hover:underline'>Contacto</a>
        </li>
      </ul>
    </footer>

  )
}
