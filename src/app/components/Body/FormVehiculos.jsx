'use client'
import InputButton from '@components/General/InputButton'
import useModal from '../../hook/useModal'
import ModalVehiculo from './ModalVehiculo'

export default function FormVehiculos({ openModalUser }) {
  const { isOpen, openModal, closeModal } = useModal(false)

  const handleInputClick = () => {
    console.log({ isOpen })
    openModal()
  }
  return (
    <>
      <section className='grid grid-cols-2 p-4 gap-x-2 gap-y-2 '>
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

      </section>
      <div className='flex items-center justify-center '>
        <button type='button' onClick={openModalUser} className='w-full h-10 mx-3 mt-2 text-white bg-blue-500 rounded-md shadow-md'>Generar Cotización </button>
      </div>
      <ModalVehiculo closeModal={closeModal} isOpen={isOpen} />
    </>
  )
}
