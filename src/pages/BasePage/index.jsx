import { Outlet } from 'react-router-dom'

import { FavoritosProvider } from 'contexts/Favoritos'

import { Header } from 'components/Header'
import { Container } from 'components/Container'
import { Footer } from 'components/Footer'

export function BasePage() {
  return (
    <div>
      <Header />
      <main>
        <FavoritosProvider>
          <Container>
            <Outlet />
          </Container>
        </FavoritosProvider>
      </main>
      <Footer />
    </div>
  )
}
