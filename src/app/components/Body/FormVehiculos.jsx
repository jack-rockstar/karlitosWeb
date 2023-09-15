'use client'
import CheckBox from '@components/General/CheckBox'
import InputButton from '@components/General/InputButton'
import InputLabel from '@components/General/InputLabel'
import { useState } from 'react'
import useModal from '../../hook/useModal'
import ModalVehiculo from './ModalVehiculo'

export default function FormVehiculos({ openModalUser }) {
  const { isOpen, openModal, closeModal } = useModal(false)
  const [type, setType] = useState('')

  const handleInputClick = (name) => {
    setType(name)
    openModal()
  }
  return (
    <>
      <section className='grid grid-cols-2 p-4 gap-x-2 gap-y-2 '>
        <div className='col-span-1'>
          <InputButton autocomplete='off' name='marca' onClick={(e) => handleInputClick(e.target.name)} placeholder='Marca' />
        </div>
        <div className='col-span-1'>
          <InputButton autocomplete='off' name='anio' onClick={(e) => handleInputClick(e.target.name)} placeholder='Año' />
        </div>
        <div className='col-span-2'>
          <InputButton autocomplete='off' name='modeloVersion' placeholder='Modelo' onClick={(e) => handleInputClick(e.target.name)} />
        </div>
        <div className='col-span-1'>
          <InputLabel className='border-1' label='Valor del Vehiculo' />

        </div>
        <div className='col-span-1'>
          <button type='button' className='text-white bg-green-500 hover:bg-green-600 w-full focus:outline-none focus:ring-none focus:ring-green-800    font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>¿No recuerdo?</button>
        </div>
        <div className='col-span-1'>
          <CheckBox name='endoso' label='El vehiculo es endosado?' />
        </div>
      </section>
      <div className='flex items-center justify-center '>
        <button type='button' onClick={openModalUser} className='w-full h-10 mx-3 mt-2 text-white transition-all bg-blue-500 rounded-md shadow-md hover:bg-blue-600'>Generar Cotización </button>
      </div>
      <ModalVehiculo type={type} closeModal={closeModal} isOpen={isOpen} />
    </>
  )
}
