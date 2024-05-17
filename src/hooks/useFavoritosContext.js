import { useContext } from 'react'

import { FavoritosContext } from 'contexts/Favoritos'

export function useFavoritosContext() {
  const { favoritos, setFavoritos } = useContext(FavoritosContext)

  function toggleFavorite(newFavorite) {
    const isAlreadyFavorite = favoritos.some(item => item.id === newFavorite.id)

    let newList = [...favoritos]

    newList = isAlreadyFavorite
      ? newList.filter(item => item.id !== newFavorite.id)
      : [...newList, newFavorite]

    return setFavoritos(newList)
  }

  return {
    favoritos,
    toggleFavorite
  }
}
