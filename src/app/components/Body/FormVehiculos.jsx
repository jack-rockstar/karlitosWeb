'use client'
import InputButton from '@components/General/InputButton'
import useModal from '../../hook/useModal'
import ModalVehiculo from './ModalVehiculo'
import MenusForm from './MenusForm'
import { useState } from 'react'

export default function FormVehiculos({ openModalUser }) {
  const { isOpen, openModal, closeModal } = useModal(false)

  const handleInputClick = () => {
    console.log({ isOpen })
    openModal()
  }
  return (
    <div>

      <div className='grid grid-cols-2 p-4 gap-x-2 gap-y-2 '>
        <div className='col-span-1'>
          <InputButton onClick={() => handleInputClick()} placeholder='Marca' />
        </div>
        <div className='col-span-1'>
          <InputButton placeholder='Año' disabled />
        </div>
        <div className='col-span-1'>
          <InputButton placeholder='Modelo' disabled />
        </div>
        <div className='col-span-1'>
          <InputButton placeholder='Version' disabled />
        </div>
        <div className='flex  items-center justify-center '>
          <button type='button' onClick={openModalUser} className='h-10 mt-2 text-white rounded-md btn w-40 shadow-md bg-gradient-to-b from-orange-500 to-yellow-300'>Generar Cotización </button>
        </div>
      </div>
      <ModalVehiculo closeModal={closeModal} isOpen={isOpen} />
    </div>
  )
}
