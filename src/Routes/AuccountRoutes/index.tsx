import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountPage } from "../../Pages/AccountPage";

export type AccountStackRoutes = {
  AccountPage: undefined
}

const AccountStack = createNativeStackNavigator<AccountStackRoutes>()

export const AccountRoutes = () => {
  return (
    <AccountStack.Navigator screenOptions={{headerTitle: 'Conta'}}>
      <AccountStack.Screen name='AccountPage' component={AccountPage} />
    </AccountStack.Navigator>
  )
}