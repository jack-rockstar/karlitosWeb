export default function Navbar() {
  return (

    <nav className='border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700'>
      <div className='flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto'>
        <a href='#' className='flex items-center'>
          <img src='https://34.95.113.167/dist/img/logoavatar.png' className='h-8 mr-3' alt='Karlitos Web Logo' />
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>Karlitos Seguros </span>
        </a>
        <button data-collapse-toggle='navbar-solid-bg' type='button' className='inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls='navbar-solid-bg' aria-expanded='false'>
          <span className='sr-only'>Open main menu</span>
          <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
            <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 1h15M1 7h15M1 13h15' />
          </svg>
        </button>
        <div className='hidden w-full md:block md:w-auto' id='navbar-solid-bg'>
          <ul className='flex flex-col mt-4 font-medium rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700'>
            <li>
              <a href='#' className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent' aria-current='page'>Autos</a>
            </li>
            {/* <li>
              <a href='#' className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Services</a>
            </li> */}
            {/* <li>
              <a href='#' className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Pricing</a>
            </li> */}
            {/* <li>
              <a href='#' className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Contact</a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>

  )
}
