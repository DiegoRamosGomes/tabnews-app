import { ScrollView, Text, View } from "react-native";
import { PostCommentItemModel } from "../../Models/PostCommentItemModel";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackRoutes } from "../../Routes/HomeRoutes";
import { PostCommentItem } from "../../Components/PostCommentItem";
import { styles } from "./styles";
import { FloatActionButton } from "../../Components/FloatActionButton";
import { ThumbsDown, ThumbsUp } from "phosphor-react-native";
import { useContents } from "../../Hooks/useContents";
import { useContext } from "react";
import AuthContext from "../../Contexts/AuthContext";

type ScreenProps = NativeStackNavigationProp<HomeStackRoutes, 'CommentPage'>

export const CommentPage = ({ route }: ScreenProps) => {

  const comment: PostCommentItemModel = route.params.comment

  const { giveVote } = useContents()
  const { logInUser } = useContext(AuthContext)

  const handleClickFloatItem = (name: string) => {
    switch (name) {
      case 'tabcoin_up':
        giveVote(comment.owner_username, comment.slug, 'credit')
          .then(() => {
            logInUser()
          })
          .catch(reason => console.log(reason))
        break
      case 'tabcoin_down':
        giveVote(comment.owner_username, comment.slug, 'debit')
          .then(() => {
            logInUser()
          })
          .catch(reason => console.log(reason))

        break
    }
  }

  return (
    <>
      <FloatActionButton
        actions={[
          {
            text: "Aprovar",
            icon: <ThumbsUp color={'#ddf4ff'}/>,
            name: "tabcoin_up",
          },
          {
            text: "Desaprovar",
            icon: <ThumbsDown color={'#ddf4ff'}/>,
            name: "tabcoin_down",
          },
        ]}
        onPressItem={handleClickFloatItem}
      />
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
    </>
  )
}