import { useParams } from 'react-router-dom'

import styles from './Player.module.css'

import { Title } from 'components/Title'
import { Banner } from 'components/Banner'
import { NotFound } from 'pages/NotFound'

import videos from 'json/db.json'

export function Player() {
  const params = useParams()
  const video = videos.find(video => video.id === Number(params.id))

  if (!video) {
    return <NotFound />
  }

  return (
    <>
      <Banner image="player" />
      <Title>
        <h1>Player</h1>
      </Title>
      <section className={styles.container}>
        <iframe
          width="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>
    </>
  )
}
