import Container from '@components/General/Container'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Body />
      <Footer />
    </Container>
  )
}
