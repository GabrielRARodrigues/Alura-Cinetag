import styles from './Card.module.css'
import favoriteIcon from './assets/favorite.png'

export function Card({ id, title, cover }) {
  return (
    <figure className={styles.container}>
      <img src={cover} alt={title} className={styles.cover} />
      <figcaption className={styles.content}>
        <h2>{title}</h2>
        <img
          src={favoriteIcon}
          alt="Favoritar filme"
          className={styles.favorite}
        />
      </figcaption>
    </figure>
  )
}
