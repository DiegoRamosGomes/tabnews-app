import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountPage } from "../../Pages/AccountPage";
import { useContext } from "react";
import AuthContext from "../../Contexts/AuthContext";
import { CoinsInfo } from "../../Components/CoinsInfo";

export type AccountStackRoutes = {
  AccountPage: undefined
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
    </AccountStack.Navigator>
  )
}