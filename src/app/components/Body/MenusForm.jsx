import { BsFillPersonFill } from 'react-icons/bs'
import { FaCarSide } from 'react-icons/fa'
import { MdAttachMoney } from 'react-icons/md'

export default function MenusForm() {
  return (
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
  )
}
