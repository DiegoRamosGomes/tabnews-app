import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Markdown } from "../../Components/Markdown";
import { useContents } from "../../Hooks/useContents";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AccountStackRoutes } from "../../Routes/AuccountRoutes";
import { AxiosResponse } from "axios";

const EditorMode = {
  EDIT: 'edit',
  VIEW: 'view',
}

type ScreenProps = NativeStackNavigationProp<AccountStackRoutes, 'CreatePostPage'>

export const CreatePostPage = ({ navigation }: ScreenProps) => {

  const { publishContent } = useContents()

  const [postContent, setPostContent] = useState('')
  const [title, setTitle] = useState('')
  const [source, setSource] = useState('')
  const [editorMode, setEditorMode] = useState(EditorMode.EDIT)
  const [loading, setLoading] = useState(false)

  const toggleEditorMode = (mode: string) => {
    setEditorMode(mode === EditorMode.EDIT ? EditorMode.EDIT : EditorMode.VIEW)
  }

  const handlePublish = () => {
    setLoading(true)
    publishContent(title, postContent, source)
      .finally(() => setLoading(false))
      .catch(error => alert(error.message))
      .then((value: AxiosResponse) => {
        if (value.status === 201) {
          navigation.goBack()
        }
      })
  }

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={170}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Novo conteudo</Text>
        <TouchableOpacity
          onPress={handlePublish}
          disabled={loading}
          style={[styles.publish, loading ? styles.publishDisabled : {}]}
        >
          <Text style={styles.publishText}>Publicar</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder={'Titulo do conteudo'}
        value={title}
        onChangeText={setTitle}
      />

      <View style={styles.contentContainer}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => toggleEditorMode(EditorMode.EDIT)}
            style={[styles.button, editorMode === EditorMode.EDIT ? styles.buttonActivated : {}]}
          >
            <Text>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => toggleEditorMode(EditorMode.VIEW)}
            style={[styles.button, editorMode === EditorMode.VIEW ? styles.buttonActivated : {}]}
          >
            <Text>Visualizar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          {editorMode === EditorMode.EDIT ?
            <TextInput
              style={styles.contentInput}
              multiline={true}
              onChangeText={setPostContent}
              value={postContent}
              keyboardType={'url'}
            />
            :
            <ScrollView>
              <Markdown body={postContent}/>
            </ScrollView>
          }
        </View>
      </View>

      <TextInput
        style={styles.input}
        placeholder={'Fonte'}
        value={source}
        onChangeText={setSource}
      />
    </KeyboardAvoidingView>
  )
}