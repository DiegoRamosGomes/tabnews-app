import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Clock, House } from 'phosphor-react-native';
import { HomeRoutes } from './HomeRoutes';
import { RecentRoutes } from "./RecentRoutes";

export type AppRoutesStackParams = {
  HomeRoutes: undefined
  RecentRoutes: undefined
}

const Tab = createBottomTabNavigator<AppRoutesStackParams>();

export const Routes = () => {
  return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="HomeRoutes"
          component={HomeRoutes}
          options={{
            tabBarIcon: () => <House />,
            tabBarLabel: 'Relevantes',
          }}
        />
        <Tab.Screen
          name="RecentRoutes"
          component={RecentRoutes}
          options={{
            tabBarIcon: () => <Clock />,
            tabBarLabel: 'Recentes',
          }}
        />
      </Tab.Navigator>
  );
};
