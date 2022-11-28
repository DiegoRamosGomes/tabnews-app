import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PostPage } from "../../Pages/PostPage";
import { PostModel } from "../../Models/PostModel";
import { CommentPage } from "../../Pages/CommentPage";
import { FavoritePage } from "../../Pages/FavoritePage";
import { CoinsInfo } from "../../Components/CoinsInfo";
import { useContext } from "react";
import AuthContext from "../../Contexts/AuthContext";

export type FavoriteStackRoutes = {
  FavoritePage: undefined
  PostPage: {
    post: PostModel
  }
  CommentPage: {
    post: PostModel
  }
}

const FavoriteStack = createNativeStackNavigator<FavoriteStackRoutes>();

export const FavoriteRoutes = () => {
  const { isLogged } = useContext(AuthContext)

  return (
    <FavoriteStack.Navigator screenOptions={{
      headerTitle: 'Tópicos Favoritos',
      headerRight: () => isLogged ? <CoinsInfo/> : null
    }}>
      <FavoriteStack.Screen name="FavoritePage" component={FavoritePage}/>
      <FavoriteStack.Screen name="PostPage" component={PostPage} options={{
        headerBackVisible: true,
        headerBackTitle: 'Inicio'
      }}/>
      <FavoriteStack.Screen name="CommentPage" component={CommentPage}/>
    </FavoriteStack.Navigator>
  )
}