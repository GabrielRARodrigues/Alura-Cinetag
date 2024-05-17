import { useFavoritosContext } from 'hooks/useFavoritosContext'
import styles from './Card.module.css'

import favoriteIcon from './assets/favorite.png'
import unfavoriteIcon from './assets/unfavorite.png'

export function Card({ id, title, cover }) {
  const { favoritos, toggleFavorite } = useFavoritosContext()
  const isFavorite = favoritos.some(fav => fav.id === id)

  const icon = isFavorite ? unfavoriteIcon : favoriteIcon

  return (
    <figure className={styles.container}>
      <img src={cover} alt={title} className={styles.cover} />
      <figcaption className={styles.content}>
        <h2>{title}</h2>

        <button
          onClick={() =>
            toggleFavorite({
              id,
              titulo: title,
              capa: cover
            })
          }
        >
          <img src={icon} alt="Favoritar filme" className={styles.favorite} />
        </button>
      </figcaption>
    </figure>
  )
}
