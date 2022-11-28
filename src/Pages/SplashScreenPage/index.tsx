import AuthContext from "../../Contexts/AuthContext";
import { FavoriteProvider } from "../../Contexts/FavoriteContext";
import { Routes } from "../../Routes";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../../Hooks/useAuth";
import { useContext, useEffect } from "react";

export const SplashScreenPage = () => {

  const { getToken, getUser } = useAuth()
  const { logInUser, isLogged } = useContext(AuthContext)

  useEffect(() => {
    (async () => {
      if (!isLogged) {
        const token = await getToken()
        const user = await getUser()

        if (token && user) {
          await logInUser(user)
        }
      }
    })()
  }, [])

  return (
    <NavigationContainer>
      <FavoriteProvider>
        <Routes/>
      </FavoriteProvider>
      <StatusBar style="auto"/>
    </NavigationContainer>
  )
}