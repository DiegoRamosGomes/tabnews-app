import { createContext, useEffect, useState } from "react";
import { FavoriteModel } from "../Models/FavoriteModel";
import { useFavorites } from "../Hooks/useFavorites";
import { PostModel } from "../Models/PostModel";

interface FavoriteContextProps {
  favorites: FavoriteModel[]

  isFavorite(post: PostModel): boolean

  toggleFavorite(post: PostModel): void
}

const FavoriteContext = createContext<FavoriteContextProps>({} as FavoriteContextProps)

export const FavoriteProvider = ({ children }) => {
  const { getFavorites, saveFavorites } = useFavorites()

  const [favorites, setFavorites] = useState<FavoriteModel[]>([])

  useEffect(() => {
    getFavorites()
      .then(data => setFavorites(data))
  }, [])

  useEffect(() => {
    saveFavorites(favorites).then()
  }, [favorites])

  const isFavorite = (post: PostModel) => {
    const exist = favorites.find(item => item.id === post.id)

    return !!exist
  }

  const toggleFavorite = (post: PostModel) => {
    if (!isFavorite(post)) {
      setFavorites(prevState => [...prevState, post])
    } else {
      const newList = favorites.filter(value => value.id != post.id)
      setFavorites([...newList])
    }
  }

  return (
    <FavoriteContext.Provider value={{
      favorites,
      isFavorite,
      toggleFavorite
    }}>
      {children}
    </FavoriteContext.Provider>
  )
}

export default FavoriteContext