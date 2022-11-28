import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "../../Pages/HomePage";
import { PostPage } from "../../Pages/PostPage";
import { PostModel } from "../../Models/PostModel";
import { CommentPage } from "../../Pages/CommentPage";
import { CoinsInfo } from "../../Components/CoinsInfo";
import { useContext } from "react";
import AuthContext from "../../Contexts/AuthContext";

export type RecentStackRoutes = {
  HomePage: undefined
  PostPage: {
    post: PostModel
  }
}

const HomeStack = createNativeStackNavigator<RecentStackRoutes>();

export const RecentRoutes = () => {
  const { isLogged } = useContext(AuthContext)

  return (
    <HomeStack.Navigator screenOptions={{
      headerTitle: 'Tópicos Recentes',
      headerRight: () => isLogged ? <CoinsInfo/> : null
    }}>
      <HomeStack.Screen name="RecentPage" component={HomePage} />
      <HomeStack.Screen name="PostPage" component={PostPage} options={{
        headerBackVisible: true,
        headerBackTitle: 'Inicio'
      }}/>
      <HomeStack.Screen name="CommentPage" component={CommentPage}/>
    </HomeStack.Navigator>
  )
}