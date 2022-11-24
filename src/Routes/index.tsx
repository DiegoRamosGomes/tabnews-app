import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeRoutes } from "./HomeRoutes";

const Tab = createBottomTabNavigator();

export const Routes = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="HomeRoutes" component={HomeRoutes} />
    </Tab.Navigator>
  )
}