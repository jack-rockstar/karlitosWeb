'use client'
import CheckBox from '@components/General/CheckBox'
import InputButton from '@components/General/InputButton'
import InputLabel from '@components/General/InputLabel'
import useModal from '@hooks/useModal'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import ModalVehiculo from './ModalVehiculo'

export default function FormVehiculos({ openModalUser, formData, onFormData }) {
  const { isOpen, openModal, closeModal } = useModal(false)
  const [visibleForm, setVisibleForm] = useState('marca')
  const url = usePathname()

  const handleInputClick = (name) => {
    setVisibleForm(name)
    openModal()
  }

  return (
    <>
      <section className='grid grid-cols-2 p-4 gap-x-2 gap-y-2 '>
        <div className='col-span-1'>
          <InputButton autoComplete='off' readOnly value={formData.marca} name='marca' onClick={(e) => handleInputClick(e.target.name)} placeholder='Marca' />
        </div>
        <div className='col-span-1'>
          <InputButton autoComplete='off' readOnly value={formData.anio} name='anio' onClick={(e) => handleInputClick(e.target.name)} placeholder='Año' />
        </div>
        <div className='col-span-2'>
          <InputButton autoComplete='off' readOnly value={formData.modeloVersion} name='modeloVersion' placeholder='Modelo' onClick={(e) => handleInputClick(e.target.name)} />
        </div>
        <div className='col-span-1'>
          <InputLabel onChange={(e) => onFormData((prev) => ({ ...prev, valorVeh: e.target.value }))} className='border-1' value={formData.valorVeh} label='Valor del Vehiculo' name='valorVeh' />

        </div>
        <div className='col-span-1'>
          <button type='button' className='text-white bg-green-500 hover:bg-green-600 w-full focus:outline-none focus:ring-none focus:ring-green-800    font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>¿No recuerdo?</button>
        </div>
        <div className='col-span-1'>
          <CheckBox onChange={() => onFormData((prev) => ({ ...prev, endoso: !formData.endoso }))} name='endoso' checked={formData.endoso} label='El vehiculo es endosado?' />
        </div>
      </section>
      <div className='flex items-center justify-center '>
        <Link href={`${url}?marca=${formData.marca}&modeloVersion=${formData.modeloVersion}&anio=${formData.anio}&valorVeh=${formData.valorVeh}&endoso=${formData.endoso}`} onClick={openModalUser} className='w-full h-10 pt-2 mx-3 mt-2 text-center text-white transition-all bg-blue-500 rounded-md shadow-md hover:bg-blue-600'>Generar Cotización </Link>
      </div>
      <ModalVehiculo formType={visibleForm} onFormChange={setVisibleForm} closeModal={closeModal} isOpen={isOpen} onFormData={onFormData} />
    </>
  )
}
