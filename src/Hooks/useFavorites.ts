import { FavoriteModel } from "../Models/FavoriteModel";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = '@tabnews-app:FAVORITES'

export const useFavorites = () => {

  const saveFavorites = async (favorites: FavoriteModel[]) => {
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
  }

  const getFavorites = async (): Promise<FavoriteModel[]> => {
    const data = await AsyncStorage.getItem(FAVORITES_KEY)

    return JSON.parse(data ?? '[]')
  }

  return {
    saveFavorites,
    getFavorites
  }
}