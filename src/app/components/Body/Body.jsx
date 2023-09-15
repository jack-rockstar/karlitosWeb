'use client'
import Companias from '@components/Companias/Companias'
import { CgNotes } from 'react-icons/cg'
import { FaCarSide } from 'react-icons/fa'
import { FaPerson } from 'react-icons/fa6'
import FormVehiculos from './FormVehiculos'
import ModalUser from './ModalUser'
import { useState } from 'react'
import useModal from '../../hook/useModal'

const cards = [
  {
    id: 1,
    icon: <FaCarSide className='w-10 h-6 text-white' />,
    title: 'Datos del vehiculo',
    text: 'Elegí el modelo correcto de tu automóvil o motocicleta a través de nuestro selector de vehículos para ver que coberturas ofrecemos para vos'
  },
  {
    id: 2,
    icon: <FaPerson className='w-10 h-6 text-white' />,
    title: 'Datos de la persona',
    text: 'Simplemente completa tus datos personales y de pago para finalizar la suscripción.'
  },
  {
    id: 3,
    icon: <CgNotes className='w-10 h-6 text-white' />,
    title: 'Elegir la mejor opcion',
    text: 'Simplemente completa tus datos personales y de pago para finalizar la suscripción.'
  }
]

export default function Body() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalOpenUser, setIsModalOpenUser] = useState(false)

  const { isOpen, openModal, closeModal } = useModal(false)

  const handleInputClick = () => {
    console.log({ isOpen })
    openModal()
  }

  /* const openModal = () => {
    setIsModalOpen(true)
  } */

  /* const closeModal = () => {
    setIsModalOpen(false)
  } */
  const openModalUser = () => {
    setIsModalOpenUser(true)
  }

  const closeModalUser = () => {
    setIsModalOpenUser(false)
  }

  return (
    <>
      <div className='bg-cover bg-image-main  min-h-[500px] grid place-content-center'>
        <article className='grid justify-center max-w-6xl px-6 row sm:grid-cols-6 md:grid-cols-12'>
          <section className='col-span-6 p-4 mb-4 bg-white rounded-lg shadow-lg'>
            <FormVehiculos openModal={openModal} closeModal={closeModal} openModalUser={openModalUser} />
            {/* {!verVehiculo && <FormClientes cambiarValor={cambiarValor} />} */}
          </section>
          <section className='col-span-6 p-6 pt-0 mb-4'>
            <h1 className='text-3xl font-bold text-primary'>Cotizador de seguro para Autos</h1>
            <span className='text-2xl text-black/70'>Obtené hasta un 30% de descuento en los mejores seguros de autos</span>
          </section>
        </article>
      </div>
      <Companias />
      <div className='w-full h-auto min-h-[350px] shadow-2xl bg-gradient-to-r from-green-200 via-green-400 to-green-500 py-4'>
        <div className='mx-4'>
          <section className='flex flex-col items-center'>
            <h2 className='text-2xl font-bold text-white'>Rapido y Seguro</h2>
            <span className='font-semibold text-white'>En unos simples pasos protegé tu movilidad</span>
          </section>
          <article className='grid items-center justify-center w-full grid-cols-3 gap-2 px-4 py-2'>
            {
              cards.map(({ id, icon, text, title }) =>
                <div key={id} className='h-full p-2 text-white rounded-lg bg-gradient-to-t from-orange-500 to-yellow-300'>
                  <span className='flex flex-col items-center justify-center mb-3'>
                    {icon}
                    <h3 className='text-lg font-semibold '>{title}</h3>
                  </span>
                  <p className='text-sm font-light'>{text}</p>
                </div>
              )
            }
          </article>
        </div>
      </div>
      <ModalUser isModalOpenUser={isModalOpenUser} closeModalUser={closeModalUser} />
    </>
  )
}
