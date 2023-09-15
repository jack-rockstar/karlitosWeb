'use client'
import Modal from '@components/General/Modal'
import React, { useState } from 'react'
import InputLabel from '@components/General/InputLabel'

function ModalUser({ isModalOpenUser, closeModalUser }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [tipoDoc, setTipoDoc] = useState('Tipo de Doc.')

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }
  const changeTipeDoc = (e) => {
    setTipoDoc(e.target.textContent)
    toggleDropdown()
  }

  return (
    <Modal closeModal={closeModalUser} width={500} isOpen={isModalOpenUser}>
      <div className='relative w-full max-w-2xl max-h-full'>
        <div className='relative  '>
          <div className='flex items-start justify-between p-4 '>
            <h3 className='text-xl font-semibold  text-blue-950'>
              Necesitamos unos datos más...
            </h3>
          </div>
          <div className='p-6 space-y-6'>
            <div className='grid grid-cols-2'>
              <div className='relative  p-1'>
                <button
                  id='dropdownHoverButton' data-dropdown-toggle='dropdownHover' data-dropdown-trigger='hover'
                  onClick={toggleDropdown}
                  className=' justify-between  px-5 py-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2  appearance-none  border-blue-500 focus:border-blue-500 focus:outline-none focus:ring-0 peer inline-flex text-center' type='button'
                >
                  {tipoDoc}
                  <svg className=' w-2.5 h-2.5  mt-1 text-center' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
                    <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className='origin-top-right absolute z-10 
                      mt-2 w-44 rounded-lg shadow-lg bg-white divide-y divide-gray-100 dark:bg-gray-700'
                  >
                    <ul className='py-2 text-sm text-gray-700 dark:text-gray-200 z-0 w-full'>
                      <li className='w-full'>
                        <a onClick={changeTipeDoc} href='#' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                          DNI
                        </a>
                      </li>
                      <li>
                        <a onClick={changeTipeDoc} href='#' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                          RUC
                        </a>
                      </li>
                      <li>
                        <a onClick={changeTipeDoc} href='#' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                          CE
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className='relative z-0 p-1'>
                <InputLabel label='N Documento' />
              </div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='relative z-0 p-1'>
                <InputLabel label='Nombres' />
              </div>
              <div className='relative z-0 p-1'>
                <InputLabel label='Apellidos' />
              </div>
            </div>
            <div className='grid grid-cols-1 p-1'>
              <div className='relative z-0'>
                <InputLabel label='Email' />
              </div>
            </div>
            <div className='grid grid-cols-1 p-1'>
              <div className='relative z-0 '>
                <InputLabel label='Telefono' />
              </div>
            </div>
          </div>
          <div className='flex items-center  justify-center  p-6 space-x-2  border-gray-200 rounded-b dark:border-gray-600'>
            <button
              onClick={closeModalUser}
              type='button'
              className='shadow-md  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              style={{ background: 'linear-gradient(87deg,#f97316 0%,#af09d8   100%)' }}
            >
              Ver la cotización
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ModalUser
