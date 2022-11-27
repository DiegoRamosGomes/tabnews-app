import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Clock, Heart, House } from 'phosphor-react-native';
import { HomeRoutes } from './HomeRoutes';
import { RecentRoutes } from "./RecentRoutes";
import { FavoriteProvider } from "../Contexts/FavoriteContext";
import { FavoriteRoutes } from "./FavoriteRoutes";

export type AppRoutesStackParams = {
  HomeRoutes: undefined
  RecentRoutes: undefined
  FavoritePage: undefined
}

const Tab = createBottomTabNavigator<AppRoutesStackParams>();

export const Routes = () => {
  return (
    <FavoriteProvider>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="HomeRoutes"
          component={HomeRoutes}
          options={{
            tabBarIcon: () => <House/>,
            tabBarLabel: 'Relevantes',
          }}
        />
        <Tab.Screen
          name="RecentRoutes"
          component={RecentRoutes}
          options={{
            tabBarIcon: () => <Clock/>,
            tabBarLabel: 'Recentes',
          }}
        />
        <Tab.Screen
          name='FavoriteRoutes'
          component={FavoriteRoutes}
          options={{
            tabBarIcon: () => <Heart/>,
            tabBarLabel: 'Favoritos'
          }}
        />
      </Tab.Navigator>
    </FavoriteProvider>
  );
};
