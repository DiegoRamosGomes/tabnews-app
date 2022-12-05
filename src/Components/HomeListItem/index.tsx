import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { PostModel } from "../../Models/PostModel";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackRoutes } from "../../Routes/HomeRoutes";
import { useNavigation } from "@react-navigation/native";
import { ArrowBendUpLeft, Article } from "phosphor-react-native";

interface HomeListItemProps {
  post: PostModel
  withLeftIcon?: boolean
}

type ScreenProps = NativeStackNavigationProp<HomeStackRoutes, 'HomePage'>

export const HomeListItem = ({ post, withLeftIcon }: HomeListItemProps) => {

  const navigation = useNavigation<ScreenProps>()

  const handleOpenPost = () => {
    navigation.push('PostPage', { post })
  }

  const handleOpenProfile = () => {
    navigation.navigate('ProfilePage', { username: post.owner_username })
  }

  return (
    <TouchableOpacity onPress={handleOpenPost}>
      <View style={styles.container}>
        {
          withLeftIcon ?
            post.parent_id ?
              <ArrowBendUpLeft color={'#c4c4c4'} style={styles.leftIcon}/>
              : <Article color={'#c4c4c4'} style={styles.leftIcon}/>
            : null
        }
        <View style={styles.bodyContainer}>
          <Text>{post.parent_id ? post.body : post.title}</Text>
          <View style={styles.postInfoContainer}>
            <Text style={styles.postInfo}>
              <Text>{post.tabcoins}</Text>
              <Text> Tabcoins</Text>
            </Text>
            <Text style={styles.postInfo}>
              <Text>{post.children_deep_count}</Text>
              <Text> Comentarios</Text>
            </Text>
            <TouchableOpacity onPress={handleOpenProfile}>
              <Text style={styles.postInfo}>{post.owner_username}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}