import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginPage } from "../../Pages/LoginPage";
import { CreateAccountPage } from "../../Pages/CreateAccountPage";

export type AuthStackRoutes = {
  LoginPage: undefined
  RegisterPage: undefined
}

const AuthStack = createNativeStackNavigator<AuthStackRoutes>()

export const AuthRoutes = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name='LoginPage' component={LoginPage} />
      <AuthStack.Screen name='RegisterPage' component={CreateAccountPage} />
    </AuthStack.Navigator>
  )
}