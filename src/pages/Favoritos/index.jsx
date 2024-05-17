import styles from './Favoritos.module.css'

import { Banner } from 'components/Banner'
import { Title } from 'components/Title'
import { Card } from 'components/Card'

import { useFavoritosContext } from 'hooks/useFavoritosContext'

export function Favoritos() {
  const { favoritos } = useFavoritosContext()

  return (
    <div>
      <Banner image="favoritos" />
      <main>
        <Title>
          <h1>Meus Favoritos</h1>
        </Title>
        <section className={styles.container}>
          {favoritos.map(fav => (
            <Card
              key={fav.id}
              id={fav.id}
              cover={fav.capa}
              title={fav.titulo}
            />
          ))}
        </section>
      </main>
    </div>
  )
}
