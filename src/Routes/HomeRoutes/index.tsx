import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "../../Pages/HomePage";
import { PostPage } from "../../Pages/PostPage";
import { PostModel } from "../../Models/PostModel";
import { PostCommentItemModel } from "../../Models/PostCommentItemModel";
import { CommentPage } from "../../Pages/CommentPage";

export type HomeStackRoutes = {
  HomePage: undefined
  PostPage: {
    post: PostModel
  }
  CommentPage: {
    comment: PostCommentItemModel
  }
}

const HomeStack = createNativeStackNavigator<HomeStackRoutes>();

export const HomeRoutes = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerTitle: 'Tópicos Relevantes' }}>
      <HomeStack.Screen name="HomePage" component={HomePage}/>
      <HomeStack.Screen name="PostPage" component={PostPage} options={{
        headerBackVisible: true,
        headerBackTitle: 'Inicio'
      }}/>
      <HomeStack.Screen name="CommentPage" component={CommentPage}/>
    </HomeStack.Navigator>
  )
}