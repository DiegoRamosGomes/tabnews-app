import { LogBox } from "react-native";
import { AuthProvider } from "./src/Contexts/AuthContext";
import { SplashScreenPage } from "./src/Pages/SplashScreenPage";

export default function App() {
  LogBox.ignoreLogs([
    'fontFamily "Courier" is not a system font and has not been loaded through Font.loadAsync.',
    'Input data should be a String'
  ])

  return (
    <AuthProvider>
      <SplashScreenPage />
    </AuthProvider>
  );
}

