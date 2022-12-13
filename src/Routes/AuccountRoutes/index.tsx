import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountPage } from "../../Pages/AccountPage";
import { useContext } from "react";
import AuthContext from "../../Contexts/AuthContext";
import { CoinsInfo } from "../../Components/CoinsInfo";
import { ProfilePage } from "../../Pages/ProfilePage";
import { PostPage } from "../../Pages/PostPage";
import { CreatePostPage } from "../../Pages/CreatePostPage";

export type AccountStackRoutes = {
  AccountPage: undefined
  ProfilePage: {
    username?: string
  },
  CreatePostPage: undefined
}

const AccountStack = createNativeStackNavigator<AccountStackRoutes>()

export const AccountRoutes = () => {
  const { isLogged } = useContext(AuthContext)

  return (
    <AccountStack.Navigator screenOptions={{
      headerTitle: 'Conta',
      headerRight: () => isLogged ? <CoinsInfo/> : null
    }}>
      <AccountStack.Screen name='AccountPage' component={AccountPage}/>
      <AccountStack.Screen name='ProfilePage' component={ProfilePage}/>
      <AccountStack.Screen name='CreatePostPage' component={CreatePostPage}/>
      <AccountStack.Screen name="PostPage" component={PostPage} options={{
        headerBackVisible: true,
        headerBackTitle: 'Perfil'
      }}/>
    </AccountStack.Navigator>
  )
}