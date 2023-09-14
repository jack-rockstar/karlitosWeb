import Image from 'next/image'

const aseguradoras = [
  {
    id: '2',
    nombre: 'RIMAC SEGUROS Y REASEGUROS',
    urlLogotipo: '/img/rimac.JPG',
    nombrecorto: 'RIMAC',
    ruc: '20100041953',
    direccion: 'AV. PASEO DE LA REPUBLICA NRO. 3505 SAN ISIDRO',
    color: '#f7052d',
    estado: '1',

    descripcion: 'RIMAC',
    ubicacion: 'AV. PASEO DE LA REPUBLICA NRO. 3505 SAN ISIDRO',
    orden: '1'
  },
  {
    id: '4',
    nombre: 'MAPFRE PERU COMPAÑIA DE SEGUROS Y REASEGUROS S.A.',
    urlLogotipo: '/img/mapfre.JPG',
    nombrecorto: 'MAPFRE',
    ruc: '20202380621',
    direccion: 'AV. 28 DE JULIO NRO. 873 MIRAFLORES',
    color: '#c00103',
    estado: '1',

    descripcion: 'MAPFRE',
    ubicacion: 'AV. 28 DE JULIO NRO. 873 MIRAFLORES',
    orden: '4'
  },
  {
    id: '1',
    nombre: 'PACIFICO COMPAÑÍA DE SEGUROS Y REASEGUROS',
    urlLogotipo: '/img/pacifico.JPG',
    nombrecorto: 'PACIFICO',
    ruc: '20332970411',
    direccion: 'AV. JUAN DE ARONA 830, SAN ISIDRO - LIMA 27',
    color: '#006aff',
    estado: '1',

    descripcion: 'PACIFICO',
    ubicacion: 'AV. JUAN DE ARONA 830, SAN ISIDRO - LIMA 27',
    orden: '2'
  },
  {
    id: '17',
    nombre: 'QUALITAS COMPAÑIA DE SEGUROS S.A',
    urlLogotipo: '/img/qualitas.JPG',
    nombrecorto: 'QUALITAS',
    ruc: '20553157014',
    direccion: 'AV. JAVIER PRADO ESTE NRO. 3194 INT. 1B',
    color: '#9300ab',
    estado: '1',

    descripcion: 'QUALITAS',
    ubicacion: 'SAN BORJA',
    orden: '3'
  },
  {
    id: '3',
    nombre: 'LA POSITIVA SEGUROS Y REASEGUROS S.A.A.',
    urlLogotipo: '/img/la positiva.JPG',
    nombrecorto: 'LA POSITIVA',
    ruc: '20100210909',
    direccion: 'CAL. FRANCISCO MASIAS NRO. 370 (CRUCE CON AV. JAVIER PRADO ESTE) SAN ISIDRO',
    color: '#fe6601',
    estado: '1',
    descripcion: 'LA POSITIVA',
    ubicacion: 'CAL. FRANCISCO MASIAS NRO. 370 (CRUCE CON AV. JAVIER PRADO ESTE) SAN ISIDRO',
    orden: '5'
  }
]
export default function Companias() {
  return (
    <div className='flex flex-wrap items-center justify-center h-full gap-2 px-2 py-4 my-4 md:gap-x-2 xl:gap-x-2 lg:gap-x-2'>
      {
          aseguradoras.map((aseg) =>
            <picture key={aseg.id}>
              <Image style={{ backgroundColor: aseg.color }} className='w-full p-2 transition-all rounded-lg hover:scale-105' src={`${aseg.urlLogotipo}`} width={120} height={70} alt='Rimac Seguros' />
            </picture>
          )
        }
    </div>
  )
}
