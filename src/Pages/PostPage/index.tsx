import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackRoutes } from "../../Routes/HomeRoutes";
import { styles } from "./styles";
import { useContents } from "../../Hooks/useContents";
import { useContext, useEffect, useState } from "react";
import Markdown from "react-native-markdown-display";
import { PostComments } from "../../Components/PostComments";
import { Heart } from "phosphor-react-native";
import FavoriteContext from "../../Contexts/FavoriteContext";

type ScreenProps = NativeStackScreenProps<HomeStackRoutes, 'PostPage'>;

export const PostPage = ({ route }: ScreenProps) => {
  const post = route.params.post

  const { getContent } = useContents()
  const { isFavorite, toggleFavorite } = useContext(FavoriteContext)

  const [postContent, setPostContent] = useState()

  useEffect(() => {
    (async () => {
      if (!postContent) {
        const data = await getContent(post.owner_username, post.slug)
        setPostContent(data)
      }
    })()
  })

  const handleToggleFavorite = () => {
    toggleFavorite(post)
  }

  return (
    <>
      <TouchableOpacity style={styles.floatIcon} onPress={handleToggleFavorite}>
        <Heart weight={isFavorite(post) ? 'fill' : 'regular'} color={'red'}/>
      </TouchableOpacity>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{post.title}</Text>
        <View style={{
          borderBottomWidth: 2
        }}>
          <Markdown>{postContent?.body ?? ''}</Markdown>
        </View>
        <PostComments post={post}/>
      </ScrollView>
    </>
  )
}