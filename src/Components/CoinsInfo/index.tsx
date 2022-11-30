import { Text, View } from "react-native";
import { useContext } from "react";
import AuthContext from "../../Contexts/AuthContext";
import { styles } from "./styles";

export const CoinsInfo = () => {
  const { user } = useContext(AuthContext)

  return (
    <View style={styles.container}>

      <View style={styles.coinItemContainer}>
        <View style={[styles.coinBox, styles.tabCash]}/>
        <Text style={styles.coinText}>{user?.tabcoins}</Text>
      </View>

      <View style={styles.coinItemContainer}>
        <View style={[styles.coinBox, styles.tabCoin]}/>
        <Text style={styles.coinText}>{user?.tabcash} </Text>
      </View>

    </View>
  )
}