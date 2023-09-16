'use client'
import InputLabel from '@components/General/InputLabel'
import Modal from '@components/General/Modal'
import Link from 'next/link'
import { useState } from 'react'
const tipoDocs = [
  {
    id: 0,
    name: 'DNI'
  },
  {
    id: 1,
    name: 'CE'
  },
  {
    id: 2,
    name: 'RUC'
  }
]

export default function ModalUser({ isModalOpenUser, closeModalUser }) {
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
        <div className='relative '>
          <div className='flex items-start justify-between p-4 '>
            <h3 className='text-xl font-semibold text-blue-950'>
              Necesitamos unos datos más...
            </h3>
          </div>
          <div className='p-4 space-y-4'>
            <div className='grid grid-cols-2'>
              <div className='relative p-1'>
                <button
                  id='dropdownHoverButton' data-dropdown-toggle='dropdownHover' data-dropdown-trigger='hover'
                  onClick={toggleDropdown}
                  className='inline-flex justify-between w-full px-5 py-2 text-sm text-center text-gray-900 bg-transparent border-2 border-blue-500 rounded-lg appearance-none focus:border-blue-500 focus:outline-none focus:ring-0 peer' type='button'
                >
                  {tipoDoc}
                  <svg className=' w-2.5 h-2.5  mt-1 text-center' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
                    <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className='absolute z-10 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 dark:bg-gray-700'>
                    <ul className='z-0 w-full py-2 text-sm text-gray-700 dark:text-gray-200'>
                      {
                        tipoDocs.map((e) => {
                          return (
                            <li key={e.id} onClick={changeTipeDoc} className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                              {e.name}
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                )}
              </div>
              <div className='relative z-0 p-1'>
                <InputLabel name='nroDoc' label='N Documento' />
              </div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='relative z-0 p-1'>
                <InputLabel name='nombre' label='Nombres' />
              </div>
              <div className='relative z-0 p-1'>
                <InputLabel name='apellido' label='Apellidos' />
              </div>
            </div>
            <div className='grid grid-cols-1 p-1'>
              <div className='relative z-0'>
                <InputLabel name='email' label='Email' />
              </div>
            </div>
            <div className='grid grid-cols-1 p-1'>
              <div className='relative z-0 '>
                <InputLabel name='telefono' label='Telefono' />
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center p-6 space-x-2 border-gray-200 rounded-b dark:border-gray-600'>
            <Link
              href='/resultado'
              onClick={closeModalUser}
              className='shadow-md text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '
              style={{ background: 'linear-gradient(87deg,#f97316 0%,#af09d8   100%)' }}
            >
              Ver la cotización
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  )
}
