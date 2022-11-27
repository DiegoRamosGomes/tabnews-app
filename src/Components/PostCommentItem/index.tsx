import { styles } from "./styles";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import Markdown from "react-native-markdown-display";
import { PostCommentItemModel } from "../../Models/PostCommentItemModel";
import { ArrowRight, ChatText } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackRoutes } from "../../Routes/HomeRoutes";

interface PostCommentItemProps {
  comment: PostCommentItemModel,
  canNavigate?: boolean
}

export const PostCommentItem = ({ comment, canNavigate }: PostCommentItemProps) => {

  const navigation = useNavigation<NativeStackNavigationProp<HomeStackRoutes, 'PostPage'>>()

  if (canNavigate === undefined || canNavigate === null) {
    canNavigate = true
  }

  const handleOpenComment = () => {
    if (comment.children.length > 0) {
      navigation.push('CommentPage', { comment })
    }
  }

  return (
    <TouchableWithoutFeedback key={comment.id} onPress={handleOpenComment}>
      <View style={styles.commentContainer}>
        <Text style={styles.owner}>{comment.owner_username}</Text>
        <View style={styles.body}>
          <Markdown>{comment.body}</Markdown>
          {
            comment.children?.length > 0 && canNavigate ?
              <View style={styles.quantityContainer}>
                <ChatText size={20} weight="bold"/>
                <Text style={styles.viewCommentText}> {comment.children.length} Comentarios</Text>
                <ArrowRight size={20} weight={'bold'}/>
              </View>
              : null
          }
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}