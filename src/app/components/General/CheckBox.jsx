export default function CheckBox({ label, name, checked, onChange }) {
  return (

    <div className='flex items-center'>
      <input onChange={onChange} name={name} id={name} type='checkbox' checked={checked} className='w-4 h-4 text-blue-600 border-blue-600 rounded cursor-pointer focus:ring-blue-600 ring-offset-gray-800 focus:ring-none' />
      <label htmlFor={name} className='ml-2 text-sm font-medium text-black cursor-pointer'>{label}</label>
    </div>

  )
}
