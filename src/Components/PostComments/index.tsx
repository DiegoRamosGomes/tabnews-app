import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import { useComments } from "../../Hooks/useComments";
import { PostModel } from "../../Models/PostModel";
import Markdown from "react-native-markdown-display";
import { styles } from "./styles";

interface PostCommentsProps {
  post: PostModel
}

export const PostComments = ({ post }: PostCommentsProps) => {
  const { getCommentsByPost } = useComments()

  const [comments, setComments] = useState([])

  useEffect(() => {
    getCommentsByPost(post.owner_username, post.slug).then(data => {
      setComments(data)
    })
  }, [])

  return (
    <View style={styles.container}>
      {comments.map((item) => {
        return (
          <View key={item.id} style={styles.bodyContainer}>
            <Text style={styles.owner}>{item.owner_username}</Text>
            <View style={styles.body}>
              <Markdown>{item.body}</Markdown>
            </View>
          </View>
        )
      })}
    </View>
  )
}