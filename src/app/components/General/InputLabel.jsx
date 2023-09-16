export default function InputLabel({ label, name = '', className = '', ...props }) {
  return (
    <div className='relative'>
      <input {...props} name={name} id={name} className={`block px-2.5 pb-2 pt-2 w-full text-sm text-gray-900 bg-transparent rounded-lg appearance-none border  border-blue-500 focus:border-blue-500 focus:outline-none focus:ring-0 peer ${className}`} placeholder=' ' />
      <label htmlFor={name} className='absolute text-sm  text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#eff3f6]  px-2 peer-focus:px-2  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'>{label}</label>
    </div>
  )
}
