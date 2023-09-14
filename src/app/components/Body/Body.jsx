'use client'
import Companias from '@components/Companias/Companias'
import Container from '@components/General/Container'
import FormVehiculos from './FormVehiculos'
import FormClientes from './FormClientes'
import { useState } from 'react'

export default function Body() {
  const [verVehiculo, setMiVariable] = useState(true)

  const cambiarValor = () => {
    setMiVariable(!verVehiculo)
  }

  return (
    <Container>
      <div className='bg-cover bg-image-main min-h-[560px] grid place-content-center'>
        <article className='grid justify-center max-w-6xl px-6 row sm:grid-cols-6 md:grid-cols-12'>
          <section className='col-span-6 p-1 mb-4 bg-white rounded-lg shadow-lg'>
            {verVehiculo && <FormVehiculos visible={verVehiculo} cambiarValor={cambiarValor} />}
            {!verVehiculo && <FormClientes cambiarValor={cambiarValor} />}
            <form action='' />
          </section>
          <section className='col-span-6 p-6 pt-0 mb-4'>
            <h1 className='text-3xl font-bold text-primary'>Cotizador de seguro para Autos</h1>
            <span className='text-2xl text-black/70'>Obtené hasta un 30% de descuento en los mejores seguros de autos</span>
          </section>
        </article>
      </div>
      <Companias />
    </Container>
  )
}
