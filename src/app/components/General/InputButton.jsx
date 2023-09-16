import { RiArrowDropDownLine } from 'react-icons/ri'
export default function InputButton({ onClick, className = '', ...props }) {
  return (
    <div className='relative w-full' onClick={onClick}>
      <input className={`block w-full disabled:bg-gray-100 p-2 text-sm text-black/90 border border-blue-500 rounded-lg cursor-pointer focus:ring-blue-400 focus:outline-none focus:ring-1 ${className}`} {...props} />
      <RiArrowDropDownLine className='absolute top-0 right-0 w-12 py-1 text-blue-400 border-l-2 h-9 border-l-blue-300' />
    </div>
  )
}
