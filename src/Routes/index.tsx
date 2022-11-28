import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Clock, Heart, House, User } from 'phosphor-react-native';
import { HomeRoutes } from './HomeRoutes';
import { RecentRoutes } from "./RecentRoutes";
import { FavoriteRoutes } from "./FavoriteRoutes";
import { AuthRoutes } from "./AuthRoutes";
import { useContext } from "react";
import AuthContext from "../Contexts/AuthContext";
import { AccountRoutes } from "./AuccountRoutes";

export type AppRoutesStackParams = {
  HomeRoutes: undefined
  RecentRoutes: undefined
  FavoritePage: undefined
}

const Tab = createBottomTabNavigator<AppRoutesStackParams>();

export const Routes = () => {

  const { isLogged, user } = useContext(AuthContext)

  return (
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
      <Tab.Screen
        name='AuthRoutes'
        component={isLogged ? AccountRoutes : AuthRoutes}
        options={{
          tabBarIcon: () => <User weight={isLogged ? 'fill' : 'regular'}/>,
          tabBarLabel: isLogged ? user.username : 'Login'
        }}
      />
    </Tab.Navigator>
  );
};
