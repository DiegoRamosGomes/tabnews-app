import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "../../Pages/HomePage";
import { PostPage } from "../../Pages/PostPage";
import { PostModel } from "../../Models/PostModel";

export type HomeStackRoutes = {
  HomePage: undefined
  PostPage: {
    post: PostModel
  }
}

const HomeStack = createNativeStackNavigator<HomeStackRoutes>();

export const HomeRoutes = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: true}}>
      <HomeStack.Screen name="HomePage" component={HomePage} />
      <HomeStack.Screen name="PostPage" component={PostPage} options={{
        headerBackVisible: true,
        headerBackTitle: 'Inicio'
      }}/>
    </HomeStack.Navigator>
  )
}