import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "../../Pages/HomePage";
import { PostPage } from "../../Pages/PostPage";
import { PostModel } from "../../Models/PostModel";
import { PostCommentItemModel } from "../../Models/PostCommentItemModel";
import { CommentPage } from "../../Pages/CommentPage";
import { useContext } from "react";
import AuthContext from "../../Contexts/AuthContext";
import { CoinsInfo } from "../../Components/CoinsInfo";
import { ProfilePage } from "../../Pages/ProfilePage";

export type HomeStackRoutes = {
  HomePage: undefined
  PostPage: {
    post: PostModel
  }
  CommentPage: {
    comment: PostCommentItemModel
  }
  ProfilePage: {
    username?: string
  }
}

const HomeStack = createNativeStackNavigator<HomeStackRoutes>();

export const HomeRoutes = () => {
  const { isLogged } = useContext(AuthContext)

  return (
    <HomeStack.Navigator screenOptions={{
      headerTitle: 'Tópicos Relevantes',
      headerRight: () => isLogged ? <CoinsInfo/> : null
    }}>
      <HomeStack.Screen name="HomePage" component={HomePage}/>
      <HomeStack.Screen name="PostPage" component={PostPage} options={{
        headerBackVisible: true,
        headerBackTitle: 'Inicio'
      }}/>
      <HomeStack.Screen name="CommentPage" component={CommentPage}/>
      <HomeStack.Screen name='ProfilePage' component={ProfilePage}/>
    </HomeStack.Navigator>
  )
}