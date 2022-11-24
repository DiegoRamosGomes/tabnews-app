import { ScrollView, Text, View } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackRoutes } from "../../Routes/HomeRoutes";
import { styles } from "./styles";
import { useContents } from "../../Hooks/useContents";
import { useEffect, useState } from "react";
import Markdown from "react-native-markdown-display";
import { PostComments } from "../../Components/PostComments";

type ScreenProps = NativeStackScreenProps<HomeStackRoutes, 'PostPage'>;

export const PostPage = ({ route }: ScreenProps) => {
  const post = route.params.post

  const { getContent } = useContents()

  const [postContent, setPostContent] = useState()

  useEffect(() => {
    (async () => {
      if (!postContent) {
        const data = await getContent(post.owner_username, post.slug)
        setPostContent(data)
      }
    })()
  })

  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{post.title}</Text>
        <View style={{
          borderBottomWidth: 2
        }}>
        <Markdown style={{
          link: {
            lineHeight: 22
          },
          heading3: {
            marginVertical: 8
          },
          hr: {
            marginVertical: 8
          }
        }}>{postContent?.body}</Markdown>
        </View>
        <PostComments post={post}/>
      </ScrollView>
    </>
  )
}