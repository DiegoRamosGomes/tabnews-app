import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from "./src/Routes";
import { LogBox } from "react-native";

export default function App() {
  LogBox.ignoreLogs([
    'fontFamily "Courier" is not a system font and has not been loaded through Font.loadAsync.',
    'Input data should be a String'
  ])

  return (
    <NavigationContainer>
      <Routes />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

