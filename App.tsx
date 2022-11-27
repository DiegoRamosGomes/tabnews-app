import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from "./src/Routes";
import { LogBox } from "react-native";
import { FavoriteProvider } from "./src/Contexts/FavoriteContext";
import { AuthProvider } from "./src/Contexts/AuthContext";

export default function App() {
  LogBox.ignoreLogs([
    'fontFamily "Courier" is not a system font and has not been loaded through Font.loadAsync.',
    'Input data should be a String'
  ])

  return (
    <NavigationContainer>
      <AuthProvider>
        <FavoriteProvider>
          <Routes/>
        </FavoriteProvider>
      </AuthProvider>
      <StatusBar style="auto"/>
    </NavigationContainer>
  );
}

