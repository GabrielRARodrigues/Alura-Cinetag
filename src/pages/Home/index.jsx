import styles from './Home.module.css'

import { Banner } from 'components/Banner'
import { Card } from 'components/Card'
import { Title } from 'components/Title'

import videos from 'json/db.json'

export function Home() {
  return (
    <>
      <Banner image="home" />

      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
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
    </>
  )
}
