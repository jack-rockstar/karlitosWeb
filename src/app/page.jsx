import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

export default function Home() {
  return (
    <main className='min-h-screen bg-[#e8e8e8]'>
      <Navbar />
      <Body />
      <Footer />
    </main>
  )
}
