import React from 'react'

function ModalUser({ openModal, closeModal }) {
  return (
    <div>
      <div className=' backdrop-opacity-100 absolute inset-0   backdrop-blur-2xl' />
      <div
        className='fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full p-10'
        id='large-modal'
        tabIndex='-1'
        aria-hidden='true'
        data-modal-placement='center-center'
      >
        <div className='relative w-full max-w-2xl max-h-full'>
          <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
            <div className='flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600'>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                Necesitamos unos datos más...
              </h3>
              <button
                onClick={closeModal}
                type='button'
                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
                data-modal-hide='defaultModal'
              >
                <svg
                  className='w-3 h-3'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 14'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                  />
                </svg>
                <span className='sr-only'>Close modal</span>
              </button>
            </div>
            <div className='p-6 space-y-6'>
              <div className='grid grid-cols-2'>
                <div className='relative z-0 p-4'>
                  <input type='text' id='floating_outlined' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder=' ' />
                  <label for='floating_outlined' className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Nombres</label>
                </div>
                <div className='relative z-0 p-4'>
                  <input type='text' id='floating_outlined' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder=' ' />
                  <label for='floating_outlined' className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Apellidos</label>
                </div>
              </div>
              <div className='grid grid-cols-1 p-4'>
                <div className='relative z-0'>
                  <input type='text' id='floating_outlined' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder=' ' />
                  <label for='floating_outlined' className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Email</label>
                </div>
              </div>
              <div className='grid grid-cols-1 p-4'>
                <div className='relative z-0'>
                  <input type='text' id='floating_outlined' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder=' ' />
                  <label for='floating_outlined' className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Telefono</label>
                </div>
              </div>
            </div>
            <div className='flex items-center  justify-center  p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600'>
              <button
                onClick={closeModal}
                type='button'
                className='shadow-md bg-gradient-to-b from-orange-500 to-yellow-300 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Ver la cotización
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalUser
