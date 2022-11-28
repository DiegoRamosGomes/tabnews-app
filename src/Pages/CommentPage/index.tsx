import { ScrollView, Text, View } from "react-native";
import { PostCommentItemModel } from "../../Models/PostCommentItemModel";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackRoutes } from "../../Routes/HomeRoutes";
import { PostCommentItem } from "../../Components/PostCommentItem";
import { styles } from "./styles";

type ScreenProps = NativeStackNavigationProp<HomeStackRoutes, 'CommentPage'>

export const CommentPage = ({ route }: ScreenProps) => {

  const comment: PostCommentItemModel = route.params.comment

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.replyTo}>Em resposta á: {comment.owner_username}</Text>
      <PostCommentItem comment={comment} canNavigate={false}/>

      <Text style={styles.repliesText}>Respostas</Text>
      <View>
        {comment.children.map(item => {
          return <PostCommentItem key={item.id} comment={item}/>
        })}
      </View>
    </ScrollView>
  )
}