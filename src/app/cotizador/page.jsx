import Container from '@components/General/Container'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

export default function page() {
  return (
    <Container>
      <Navbar />
      <div className='bg-cover bg-image-main  min-h-[500px] grid place-content-center' />
      <Footer />
    </Container>
  )
}
