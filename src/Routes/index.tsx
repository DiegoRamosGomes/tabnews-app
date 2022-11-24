import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeRoutes } from "./HomeRoutes";
import { House } from "phosphor-react-native";

const Tab = createBottomTabNavigator();

export const Routes = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="HomeRoutes" component={HomeRoutes} options={{
        tabBarIcon: () => <House />,
        tabBarLabel: 'Relevantes'
      }} />
    </Tab.Navigator>
  )
}