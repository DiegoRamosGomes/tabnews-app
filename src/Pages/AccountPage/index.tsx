import { Text, TouchableOpacity, View } from "react-native";
import { ArrowRight } from "phosphor-react-native";
import { styles } from "./styles";
import { useContext } from "react";
import AuthContext from "../../Contexts/AuthContext";

export const AccountPage = () => {

  const { signOut } = useContext(AuthContext)

  const handleSingOut = async () => {
    await signOut()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={handleSingOut}>
        <Text style={styles.itemText}>Sair</Text>
        <ArrowRight/>
      </TouchableOpacity>
    </View>
  )
}