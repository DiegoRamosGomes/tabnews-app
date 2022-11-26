import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { House } from 'phosphor-react-native';
import { HomeRoutes } from './HomeRoutes';
import { RecentRoutes } from './RecentRoutes';

const Tab = createBottomTabNavigator();

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
            tabBarIcon: () => <House />,
            tabBarLabel: 'Recentes',
          }}
        />
      </Tab.Navigator>
  );
};
