import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Body() {
  const mainStyle = {
    background: 'url("./img/auto.png")', // Reemplaza con la ruta de tu imagen de fondo
    backgroundSize: 'cover' // Esto asegura que la imagen se ajuste al tamaño del contenedor
  }

  const estiloPersonalizado = {
    color: '#444444',
    fontSize: '26px',
  }
  const h1Style = {
    color: '#FF0082',
    fontSize: '30px',
  }

  return (
    <main className='h-screen bg ' style={mainStyle}>

      <div className='max-w-5xl pt-20'>
        <div className='row grid sm:grid-cols-6 md:grid-cols-12 justify-center '>
          <div className=' col-span-6   mb-4 col p-4'>
            <div className='rounded p-1 bg-white'>
              <ul className='steps mb-0'>
                <li className='active'>
                  <a href='#'>
                    <i>
                      
                    </i> fdsdfsdf
                  </a>
                </li>
                <li></li>
                <li></li>
              </ul>
              <form action=""></form>
            </div>
          </div>
          <div className='= col-span-6  mb-4 block-side-form col p-4'><h1 style={h1Style}>Cotizador de seguro para Autos</h1> <h2 style={estiloPersonalizado}>Obtené hasta un 30% de descuento en los mejores seguros de autos</h2></div>
        </div>
      </div>

    </main>
  )
}
