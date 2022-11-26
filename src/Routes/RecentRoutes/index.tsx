import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PostModel } from "../../Models/PostModel";
import { PostPage } from "../../Pages/PostPage";
import { RecentPage } from '../../Pages/RecentPage';

export type RecentStackRoutes = {
  RecentPage: undefined
  PostPage: {
    post: PostModel
  }
}

const HomeStack = createNativeStackNavigator<RecentStackRoutes>();

export const RecentRoutes = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerTitle: 'Tópicos Recentes'}}>
      <HomeStack.Screen name="RecentPage" component={RecentPage} />
      <HomeStack.Screen name="PostPage" component={PostPage} options={{
        headerBackVisible: true,
        headerBackTitle: 'Inicio'
      }}/>
    </HomeStack.Navigator>
  )
}