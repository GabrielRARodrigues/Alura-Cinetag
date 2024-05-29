import { useEffect, useState } from 'react'

import styles from './Home.module.css'

import { Banner } from 'components/Banner'
import { Card } from 'components/Card'
import { Title } from 'components/Title'

export function Home() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch(
      'https://my-json-server.typicode.com/GabrielRARodrigues/Alura-Cinetag-API/videos'
    )
      .then(response => response.json())
      .then(data => {
        setVideos(data)
      })
  }, [])

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
