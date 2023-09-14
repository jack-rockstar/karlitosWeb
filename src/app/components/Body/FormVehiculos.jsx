'use client'
import { useState } from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaCarSide } from 'react-icons/fa'
import { MdAttachMoney } from 'react-icons/md'

export default function FormVehiculos({ visible, cambiarValor }) {
  const opciones1 = ['Opción 1', 'Opción 2', 'Opción 3']
  const opciones2 = ['Subopción A', 'Subopción B', 'Subopción C']
  const opciones3 = ['Subsubopción 1', 'Subsubopción 2', 'Subsubopción 3']
  const opciones4 = ['SI', 'NO']

  const [selectedOption1, setSelectedOption1] = useState('')
  const [selectedOption2, setSelectedOption2] = useState('')
  const [selectedOption3, setSelectedOption3] = useState('')
  const [selectedOption4, setSelectedOption4] = useState('')
  const [btnNext, setbtnNext] = useState('')
  const [number, setnumber] = useState('')

  const handleOption1Change = (e) => {
    setSelectedOption1(e.target.value)
    setSelectedOption2('')
    setSelectedOption3('')
    setSelectedOption4('')
  }

  const handleOption2Change = (e) => {
    setSelectedOption2(e.target.value)
    setSelectedOption3('')
    setSelectedOption4('')
  }

  const handleOption3Change = (e) => {
    setSelectedOption3(e.target.value)
    setSelectedOption4('')
  }
  const handleOption4Change = (e) => {
    setSelectedOption4(e.target.value)
  }
  const cambioInputSumaAsegu = (e) => {
    console.log(e.target.value)
    const valorIngresado = e.target.value.replace(/[^\d.,]/g, '')
    setnumber(valorIngresado)
  }
  


  return (
    <div>
      <ul className='grid mb-0 md:grid-cols-3 '>
        <li className='flex items-center justify-center p-2 text-center bg-orange-600 active'>
          <a href='#' className='text-white '>
            <FaCarSide className='h-5 text-center w-14' />
          </a>
        </li>
        <li className='flex items-center justify-center p-2 bg-gray-200 li'>
          <a href='#'>
            <BsFillPersonFill className='h-5 w-14' />
          </a>
        </li>
        <li className='flex items-center justify-center p-2 bg-gray-200 '>
          <a href='#'>
            <MdAttachMoney className='h-5 w-14' />
          </a>
        </li>
      </ul>
      <div className='grid p-4 '>
        <div className='grid grid-cols-1 mb-2 border-2 rounded '>
          <select value={selectedOption1} onChange={handleOption1Change} className='rounded'>
            <option value=''>Marca</option>
            {opciones1.map((opcion) => (
              <option key={opcion} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </div>

        <div className='grid grid-cols-1 mb-2 border-2 rounded '>
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
        <div className=' grid grid-cols-1 mb-2 rounded  border-2'>
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
        <div className=' grid grid-cols-2 mb-2 rounded p-0  '>
          <input className='border-2 rounded p-1' value={number} onChange={cambioInputSumaAsegu} disabled={!selectedOption4} type='text' id='' placeholder='Valor Suma Asegurada mostrar minimo y maximo' />
          <div className='text-right'>
            <button type='button' className='btn   bg-primary text-white rounded-md w-40 h-8 '>Valor Mercado $$</button>
          </div>
        </div>
        <div className='grid grid-cols-3'>
          <div />
          <div className='text-right'><label htmlFor=''>Es 0 Km?:</label></div>
          <div className='grid grid-cols-4 text-center'>
            Si
            <input id='default-radio-1' type='radio' value='' name='default-radio' className='w-4  text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
            No
            <input checked id='default-radio-2' type='radio' value='' name='default-radio' className='w-4  text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
          </div>
        </div>
        <div className='flex justify-center   items-center '>
          <button id={btnNext} type='button' onClick={cambiarValor} hidden={!selectedOption4} className='btn mt-2 w-36 h-10  bg-primary text-white rounded-md'>Siguiente</button>
        </div>
      </div>
    </div>
  )
}
