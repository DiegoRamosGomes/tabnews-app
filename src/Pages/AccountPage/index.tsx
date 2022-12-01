import { Text, TouchableOpacity, View } from "react-native";
import { ArrowRight } from "phosphor-react-native";
import { styles } from "./styles";
import { useContext } from "react";
import AuthContext from "../../Contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AccountStackRoutes } from "../../Routes/AuccountRoutes";

export const AccountPage = () => {

  const { signOut, user } = useContext(AuthContext)
  const navigation = useNavigation<NativeStackNavigationProp<AccountStackRoutes>>()

  const handleSingOut = async () => {
    await signOut()
  }

  const handleOpenProfile = () => {
    navigation.navigate('ProfilePage')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={handleOpenProfile}>
        <Text style={styles.itemText}>Perfil</Text>
        <ArrowRight/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={handleSingOut}>
        <Text style={styles.itemText}>Sair</Text>
        <ArrowRight/>
      </TouchableOpacity>
    </View>
  )
}