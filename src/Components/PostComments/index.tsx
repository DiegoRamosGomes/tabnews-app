import { View } from "react-native";
import { useEffect, useState } from "react";
import { useComments } from "../../Hooks/useComments";
import { PostModel } from "../../Models/PostModel";
import { styles } from "./styles";
import { PostCommentItem } from "../PostCommentItem";

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
      {comments.map((item) => <PostCommentItem comment={item}/>)}
    </View>
  )
}