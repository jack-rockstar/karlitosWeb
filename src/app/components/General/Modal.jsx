'use client'
import { RiCloseLine } from 'react-icons/ri'
import Button from './Button'
import Portal from './Portal'

export default function Modal({ children, width = 750, isOpen, closeModal }) {
  return (
    <Portal>

      <div className={`${!isOpen ? 'hidden' : 'fixed overflow-hidden grid justify-center items-center bottom-0 top-0 py-4 left-0  backdrop-blur-sm bg-blue-800/20 right-0 z-50 w-full p-4  md:inset-0 min-h-screen '}`}>
        <div className='relative w-full'>
          <div className='relative bg-[#eff3f6]  rounded-lg shadow my-8' style={{ width: `${width}px` }}>
            <Button type='button' onClick={() => closeModal()}>
              <RiCloseLine className='w-5 h-5' />
            </Button>
            <div className='px-6 py-6 overflow-auto custom-scrollbar-orange lg:px-8'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </Portal>
  )
}
