import { useParams } from 'react-router-dom'

import styles from './Player.module.css'

import { Title } from 'components/Title'
import { Banner } from 'components/Banner'
import { NotFound } from 'pages/NotFound'

import { useEffect, useState } from 'react'

export function Player() {
  const [video, setVideo] = useState()
  const params = useParams()

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/GabrielRARodrigues/Alura-Cinetag-API/videos?id=${params.id}`
    )
      .then(response => response.json())
      .then(data => {
        setVideo(...data)
      })
  }, [params])

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
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
    </>
  )
}
