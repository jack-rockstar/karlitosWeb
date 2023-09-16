import Footer from '@components/Footer/Footer'
import Navbar from '@components/Navbar/Navbar'

export default function Container({ children }) {
  return (
    <>
      <Navbar />
      <div className='h-full min-h-screen bg-[#eff3f6]'>
        {children}
      </div>
      <Footer />
    </>

  )
}
