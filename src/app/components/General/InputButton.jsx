import { RiArrowDropDownLine } from 'react-icons/ri'
import Input from './Input'
export default function InputButton({ onClick, ...props }) {
  return (
    <div className='relative w-full' onClick={onClick}>
      <Input {...props} />
      <RiArrowDropDownLine className='absolute top-0 right-0 w-12 py-1 text-orange-400 border-l-2 h-9 border-l-orange-300' />
    </div>
  )
}
