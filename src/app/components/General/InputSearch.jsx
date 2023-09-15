import Button from './Button'
import Input from './Input'
export default function InputSearch() {
  return (

    <form>
      <label htmlFor='default-search' className='mb-2 text-sm font-medium text-gray-900 sr-only'>Search</label>
      <div className='relative'>
        <Input placeholder='Buscar..' type='search' />
        <Button />
      </div>
    </form>

  )
}
