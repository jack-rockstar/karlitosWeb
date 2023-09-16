import Cotizador from '@components/Cotizador/Cotizador'
import Container from '@components/General/Container'

export default function Home({ searchParams }) {
  return (
    <Container>
      <Cotizador searchParams={searchParams} />
    </Container>
  )
}
