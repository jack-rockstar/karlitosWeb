'use client'
import { useState } from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaCarSide } from 'react-icons/fa'
import { MdAttachMoney } from 'react-icons/md'

export default function FormClientes({cambiarValor}) {
  const opciones1 = ['DNI', 'RUC', 'CE']
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
  const cambiarFormulario = (e) => {
    console.log('cliqueando para cambiar de fomulario')
  }

  return (
    <div>
      <ul className=' grid mb-0 md:grid-cols-3  '>
        <li className='flex items-center justify-center p-2 text-center bg-orange-600 active  relative'>
          <a href='#' onClick={cambiarValor} className='text-white '>
            <FaCarSide className='h-5 text-center w-14' />
          </a>
          
          <span className='custom-step-arrow' />
          <span className='custom-step-arrow2' />
        </li>
        <li className=' flex items-center justify-center p-2 bg-orange-600 active relative'>
          <span className='custombefore' />
          <a href='#' className='text-white'>
            <BsFillPersonFill className='h-5 w-14' />
          </a>
          <span className='custom-step-arrow' />
        </li>
        <li className='flex items-center justify-center p-2 bg-gray-200 '>
          <span className='custombefore' />
          <a href='#'>
            <MdAttachMoney className='h-5 w-14' />
          </a>
        </li>
      </ul>
      <div className='grid p-4 '>
        <div className='grid grid-cols-2 mb-2  rounded  '>
          <select value={selectedOption1} onChange={handleOption1Change}  placeholder='Tipo Doc' className='rounded border-2 mr-5'>
            <option value='' disabled selected>Selecciona una opción </option>
            {opciones1.map((opcion) => (
              <option key={opcion} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
          <div className='grid grid-cols-1 mb-2  rounded'>
            <input className='border-2 rounded ml-1  px-2 py-1' type='text' id='' placeholder='N° Documento ' />
          </div>
        </div>
        <div className='grid grid-cols-1 mb-2  rounded'>
          <input className='border-2 rounded  px-2 py-1 ' type='text' id='' placeholder='Nombres y Apellidos' />
        </div>
        <div className='grid grid-cols-1 mb-2  rounded'>
          <input className='border-2 rounded  px-2 py-1' type='text' id='' placeholder='Correo Electronico ' />
        </div>
        <div className='grid grid-cols-1 mb-2  rounded'>
          <input className='border-2 rounded  px-2 py-1' type='text' id='' placeholder='N° Telefono ' />
        </div>
      </div>
    </div>
  )
}
