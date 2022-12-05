import { ScrollView, Text, View } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackRoutes } from "../../Routes/HomeRoutes";
import { styles } from "./styles";
import { useContents } from "../../Hooks/useContents";
import { useContext, useEffect, useState } from "react";
import Markdown from "react-native-markdown-display";
import { PostComments } from "../../Components/PostComments";
import { Heart, List, ThumbsDown, ThumbsUp } from "phosphor-react-native";
import FavoriteContext from "../../Contexts/FavoriteContext";
import { FloatingAction } from "react-native-floating-action";
import AuthContext from "../../Contexts/AuthContext";

type ScreenProps = NativeStackScreenProps<HomeStackRoutes, 'PostPage'>;

export const PostPage = ({ route }: ScreenProps) => {
  const post = route.params.post

  const { getContent, giveVote } = useContents()
  const { isFavorite, toggleFavorite } = useContext(FavoriteContext)
  const { logInUser } = useContext(AuthContext)

  const [postContent, setPostContent] = useState()

  useEffect(() => {
    (async () => {
      if (!postContent) {
        const data = await getContent(post.owner_username, post.slug)
        setPostContent(data)
      }
    })()
  }, [])

  const handleClickFloatItem = (name: string) => {
    switch (name) {
      case 'is_favorite':
        toggleFavorite(post)
        break
      case 'tabcoin_up':
        giveVote(post.owner_username, post.slug, 'credit')
          .then(() => {
            logInUser()
          })
        break
      case 'tabcoin_down':
        giveVote(post.owner_username, post.slug, 'debit')
          .then(() => {
            logInUser()
          })
        break
    }
  }

  return (
    <>
      <View style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        zIndex: 1,
      }}>
        <FloatingAction
          color={'#0969da'}
          floatingIcon={<List color={'white'} weight={'bold'} />}
          actions={[
            {
              text: "Aprovar",
              icon: <ThumbsUp color={'#ddf4ff'}/>,
              name: "tabcoin_up",
            },
            {
              text: isFavorite(post) ? "Desfavoritar" : "Favoritar",
              icon: <Heart weight={isFavorite(post) ? 'fill' : 'regular'} color={'#ddf4ff'}/>,
              name: "is_favorite",
            },
            {
              text: "Desaprovar",
              icon: <ThumbsDown color={'#ddf4ff'}/>,
              name: "tabcoin_down",
            },
          ]}
          onPressItem={handleClickFloatItem}
        />
      </View>
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