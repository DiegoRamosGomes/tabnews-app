import { FlatList, Text, View } from "react-native";
import { useContext } from "react";
import { HomeListItem } from "../../Components/HomeListItem";
import FavoriteContext from "../../Contexts/FavoriteContext";
import { styles } from "./styles";
import { HeartBreak } from "phosphor-react-native";

export const FavoritePage = () => {

  const { favorites } = useContext(FavoriteContext)

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={({ item }) => <HomeListItem post={item}/>}
        ItemSeparatorComponent={() => <View style={{ height: 16 }}/>}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => <View style={styles.emptyContainer}>
          <HeartBreak size={100}/>
          <Text style={styles.emptyText}>Vocẽ ainda não possui nenhum tópico como favorito</Text>
        </View>}
      />
    </View>
  )
}