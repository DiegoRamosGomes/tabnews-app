import { Text, View } from "react-native";
import { PostCommentItemModel } from "../../Models/PostCommentItemModel";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackRoutes } from "../../Routes/HomeRoutes";
import { PostCommentItem } from "../../Components/PostCommentItem";
import { styles } from "./styles";

type ScreenProps = NativeStackNavigationProp<HomeStackRoutes, 'CommentPage'>

export const CommentPage = ({ route }: ScreenProps) => {

  const comment: PostCommentItemModel = route.params.comment

  return (
    <View style={styles.container}>
      <Text>Em resposta á: {comment.owner_username}</Text>
      <PostCommentItem comment={comment} canNavigate={false}/>

      <View>
        {comment.children.map(item => {
          return <PostCommentItem comment={item}/>
        })}
      </View>
    </View>
  )
}