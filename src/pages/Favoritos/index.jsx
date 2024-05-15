import styles from './Favoritos.module.css'

import { Banner } from 'components/Banner'
import { Title } from 'components/Title'
import { Card } from 'components/Card'

import videos from 'json/db.json'

export function Favoritos() {
  return (
    <div>
      <Banner image="favoritos" />
      <main>
        <Title>
          <h1>Meus Favoritos</h1>
        </Title>
        <section className={styles.container}>
          {videos.map(video => (
            <Card
              key={video.id}
              id={video.id}
              cover={video.capa}
              title={video.titulo}
            />
          ))}
        </section>
      </main>
    </div>
  )
}
