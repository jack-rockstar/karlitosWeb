'use client'
import InputButton from '@components/General/InputButton'
import useModal from '../../hook/useModal'
import ModalVehiculo from './ModalVehiculo'

export default function FormVehiculos() {
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
      </div>
      <ModalVehiculo closeModal={closeModal} isOpen={isOpen} />
    </div>
  )
}
