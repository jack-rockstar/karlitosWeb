import Companias from '../Companias/Companias'
import Container from '../General/Container'

export default function Body() {
  return (
    <Container>
      <div className='bg-cover bg-image-main min-h-[560px] grid place-content-center'>
        <article className='grid justify-center px-4 max-w-7xl row sm:grid-cols-6 md:grid-cols-12'>
          <section className='col-span-6 p-1 mb-4 bg-white rounded'>
            <ul className='mb-0 steps'>
              <li className='active'>
                <a href='#'>
                  <i /> fdsdfsdf
                </a>
              </li>
              <li />
              <li />
            </ul>
            <form action='' />
          </section>
          <section className='col-span-6 p-4 mb-4'>
            <h1 className='text-3xl font-bold text-primary'>Cotizador de seguro para Autos</h1>
            <span className='text-2xl text-black/70'>Obtené hasta un 30% de descuento en los mejores seguros de autos</span>
          </section>
        </article>
      </div>
      <Companias />
    </Container>
  )
}