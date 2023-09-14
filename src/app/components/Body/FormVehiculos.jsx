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
      <ul className='mb-0 grid   md:grid-cols-3'>
        <li className='active text-center bg-orange-600 p-2'>
          <a href='#'>
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
      <div>
        <div>
          <label>Dropdown 1:</label>
          <select value={selectedOption1} onChange={handleOption1Change}>
            <option value="">Selecciona una opción</option>
            {opciones1.map((opcion) => (
              <option key={opcion} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Dropdown 2:</label>
          <select
            value={selectedOption2}
            onChange={handleOption2Change}
            disabled={!selectedOption1}
          >
            <option value="">Selecciona una opción</option>
            {opciones2.map((opcion) => (
              <option key={opcion} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Dropdown 3:</label>
          <select
            value={selectedOption3}
            onChange={handleOption3Change}
            disabled={!selectedOption2}
          >
            <option value="">Selecciona una opción</option>
            {opciones3.map((opcion) => (
              <option key={opcion} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
