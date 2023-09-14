'use client'
import InputButton from '@components/General/InputButton'
import MenusForm from './MenusForm'

export default function FormVehiculos() {
  // const opciones1 = ['Opción 1', 'Opción 2', 'Opción 3']
  // const opciones2 = ['Subopción A', 'Subopción B', 'Subopción C']
  // const opciones3 = ['Subsubopción 1', 'Subsubopción 2', 'Subsubopción 3']
  // const opciones4 = ['SI', 'NO']

  // const [selectedOption1, setSelectedOption1] = useState('')
  // const [selectedOption2, setSelectedOption2] = useState('')
  // const [selectedOption3, setSelectedOption3] = useState('')
  // const [selectedOption4, setSelectedOption4] = useState('')
  // const [btnNext, setbtnNext] = useState('')
  // const [number, setnumber] = useState('')

  // const handleOption1Change = (e) => {
  //   setSelectedOption1(e.target.value)
  //   setSelectedOption2('')
  //   setSelectedOption3('')
  //   setSelectedOption4('')
  // }

  // const handleOption2Change = (e) => {
  //   setSelectedOption2(e.target.value)
  //   setSelectedOption3('')
  //   setSelectedOption4('')
  // }

  // const handleOption3Change = (e) => {
  //   setSelectedOption3(e.target.value)
  //   setSelectedOption4('')
  // }
  // const handleOption4Change = (e) => {
  //   setSelectedOption4(e.target.value)
  // }
  // const cambioInputSumaAsegu = (e) => {
  //   console.log(e.target.value)
  //   const valorIngresado = e.target.value.replace(/[^\d.,]/g, '')
  //   setnumber(valorIngresado)
  // }

  return (
    <div>
      <MenusForm />
      <div className='grid grid-cols-2 p-4 gap-x-2 '>
        <div className='col-span-1'>
          <InputButton placeholder='Marca' />
        </div>
        <div className='col-span-1'>
          <InputButton placeholder='Año' />
        </div>

        {/* <div className='grid grid-cols-1 mb-2 border-2 rounded '>
          <select
            value={selectedOption2}
            onChange={handleOption2Change}
            disabled={!selectedOption1}
            className='rounded'
          >
            <option value=''>Modelo/Version </option>
            {opciones2.map((opcion) => (
              <option key={opcion} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </div>

        <div className='grid grid-cols-1 mb-2 border-2 rounded '>
          <select
            value={selectedOption3}
            onChange={handleOption3Change}
            disabled={!selectedOption2}
            className='rounded'
          >
            <option value=''>Año</option>
            {opciones3.map((opcion) => (
              <option key={opcion} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </div>
        <div className='grid grid-cols-1 mb-2 border-2 rounded '>
          <select
            value={selectedOption4}
            onChange={handleOption4Change}
            disabled={!selectedOption3}
            className='rounded'
          >
            <option value=''>Tiene ENDOSO?</option>
            {opciones4.map((opcion) => (
              <option key={opcion} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </div>
        <div className='grid grid-cols-2 p-0 mb-2 rounded '>
          <input className='p-1 border-2 rounded' value={number} onChange={cambioInputSumaAsegu} disabled={!selectedOption4} type='text' id='' placeholder='Valor Suma Asegurada mostrar minimo y maximo' />
          <div className='text-right'>
            <button type='button' className='w-40 h-8 text-white rounded-md btn bg-primary '>Valor Mercado $$</button>
          </div>
        </div>
        <div className='grid grid-cols-3'>
          <div />
          <div className='text-right'><label htmlFor=''>Es 0 Km?:</label></div>
          <div className='grid grid-cols-4 text-center'>
            Si
            <input id='default-radio-1' type='radio' value='' name='default-radio' className='w-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
            No
            <input checked id='default-radio-2' type='radio' value='' name='default-radio' className='w-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
          </div>
        </div>
        <div className='flex items-center justify-center '>
          <button id={btnNext} type='button' hidden={!selectedOption4} className='h-10 mt-2 text-white rounded-md btn w-36 bg-primary'>Siguiente</button>
        </div> */}
      </div>
    </div>
  )
}
