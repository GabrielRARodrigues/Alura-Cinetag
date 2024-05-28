import { createContext, useState } from 'react'

export const FavoritosContext = createContext()
FavoritosContext.displayName = 'Favoritos'

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([])

  return (
    <FavoritosContext.Provider
      value={{
        favoritos,
        setFavoritos
      }}
    >
      {children}
    </FavoritosContext.Provider>
  )
}
