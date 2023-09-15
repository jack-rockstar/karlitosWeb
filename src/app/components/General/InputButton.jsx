import { RiArrowDropDownLine } from 'react-icons/ri'
export default function InputButton({ onClick, ...props }) {
  return (
    <div className='relative w-full' onClick={onClick}>
      <input className='block w-full p-2 text-sm text-white border border-orange-300 rounded-lg cursor-pointer focus:ring-orange-400 focus:outline-none focus:ring-1' {...props} />
      <RiArrowDropDownLine className='absolute top-0 right-0 w-12 py-1 text-orange-400 border-l-2 h-9 border-l-orange-300' />
    </div>
  )
}
