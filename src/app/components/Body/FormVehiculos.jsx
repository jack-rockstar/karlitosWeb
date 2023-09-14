'use client'
import { useState } from 'react'

export default function FormVehiculos() {
  const opciones1 = ['Opción 1', 'Opción 2', 'Opción 3']
  const opciones2 = ['Subopción A', 'Subopción B', 'Subopción C']
  const opciones3 = ['Subsubopción 1', 'Subsubopción 2', 'Subsubopción 3']

  const [selectedOption1, setSelectedOption1] = useState('')
  const [selectedOption2, setSelectedOption2] = useState('')
  const [selectedOption3, setSelectedOption3] = useState('')

  const handleOption1Change = (e) => {
    setSelectedOption1(e.target.value)
    setSelectedOption2('')
    setSelectedOption3('')
  }

  const handleOption2Change = (e) => {
    setSelectedOption2(e.target.value)
    setSelectedOption3('')
  }

  const handleOption3Change = (e) => {
    setSelectedOption3(e.target.value)
  }

  return (
    <div>
      <ul className='mb-0 grid   md:grid-cols-3  '>
        <li className='active text-center bg-orange-600 p-2'>
          <a href='#' className='  text-white'>
            Primer enlace

          </a>
        </li>
        <li className=' bg-gray-200  text-center p-2 li'>
          <a href='#'>
            Segundo enlace
          </a>
        </li>
        <li className=' bg-gray-200 text-center p-2'>
          <a href='#'>
            tercer enlace
          </a>
        </li>
      </ul>
      <div className='p-4 grid   '>
        <div className=' grid grid-cols-1 mb-2 rounded  border-2'>
          <select value={selectedOption1} onChange={handleOption1Change} className='rounded'>
            <option value=''>Marca</option>
            {opciones1.map((opcion) => (
              <option key={opcion} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </div>

        <div className=' grid grid-cols-1 mb-2 rounded  border-2'>
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

        <div className=' grid grid-cols-1 mb-2 rounded  border-2'>
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
        <div className='grid grid-cols-3'>
          <div></div>
          <div className='text-right'><label htmlFor=''>Es 0 Km?:</label></div>
          <div className='grid grid-cols-4 text-center'>
            Si
            <input id='default-radio-1' type='radio' value='' name='default-radio' className='w-4  text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'></input>
            No
            <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4  text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
          </div>
        </div>
        <div className='grid grid-cols-1'>
          <button type='button' className='' ></button>
          
        </div>
      </div>
    </div>
  )
}
