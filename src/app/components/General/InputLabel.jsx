export default function InputLabel({ label, ...props }) {
  return (
    // <div class='relative z-0'>
    //   <input className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  appearance-none border-blue-500 focus:border-blue-500 focus:outline-none focus:ring-0 peer' {...props} />
    //   <label className='absolute text-sm text-blue-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>{label}</label>
    // </div>
    <div className='relative'>
      <input type='text' id='floating_outlined' className='block px-2.5 pb-2 pt-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 b appearance-none  border-blue-500 focus:border-blue-500 focus:outline-none focus:ring-0 peer' placeholder=' ' />
      <label htmlFor='floating_outlined' className='absolute text-sm  text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#eff3f6]  px-2 peer-focus:px-2  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'>{label}</label>
    </div>
  )
}
