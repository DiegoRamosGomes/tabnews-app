import { Text, TouchableOpacity, View } from "react-native";
import { ArrowRight } from "phosphor-react-native";
import { styles } from "./styles";
import { useContext } from "react";
import AuthContext from "../../Contexts/AuthContext";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AccountStackRoutes } from "../../Routes/AuccountRoutes";

type ScreenProps = NativeStackNavigationProp<AccountStackRoutes>
export const AccountPage = ({ navigation }: ScreenProps) => {

  const { signOut } = useContext(AuthContext)

  const handleSingOut = async () => {
    await signOut()
  }

  const handleOpenProfile = () => {
    navigation.navigate('ProfilePage')
  }

  const handleOpenNewPost = () => {
    navigation.navigate('CreatePostPage')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={handleOpenProfile}>
        <Text style={styles.itemText}>Perfil</Text>
        <ArrowRight/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={handleOpenNewPost}>
        <Text style={styles.itemText}>Novo conteudo</Text>
        <ArrowRight/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={handleSingOut}>
        <Text style={styles.itemText}>Sair</Text>
        <ArrowRight/>
      </TouchableOpacity>
    </View>
  )
}