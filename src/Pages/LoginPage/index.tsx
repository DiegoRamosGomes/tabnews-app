import { Linking, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { useContext, useState } from "react";
import { styles } from "./styles";
import AuthContext from "../../Contexts/AuthContext";
import { FullscreenLoading } from "../../Components/FullscreenLoading";

export const LoginPage = () => {

  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('diegoramosgomes5@gmail.com')
  const [password, setPassword] = useState('dk061220')
  const [isLoading, setIsLoading] = useState(false)

  const handleSignIn = () => {
    setIsLoading(true)

    if (!(email.length > 0 && email.includes('@'))) {
      return alert('preencha todos os campos')
    }

    signIn(email, password).then(value => {
      if (!value) {
        alert('dados incorretos')
      }

      setIsLoading(false)
    })
  }

  const handleSignUp = async () => {
    setIsLoading(true)

    const url = 'https://www.tabnews.com.br/cadastro'
    const canOpen = Linking.canOpenURL(url)
    if (canOpen) {
      await Linking.openURL(url)
    }

    setIsLoading(false)
  }

  const handleForgotPassword = async () => {
    setIsLoading(true)

    const url = 'https://www.tabnews.com.br/cadastro/recuperar'
    const canOpen = Linking.canOpenURL(url)
    if (canOpen) {
      await Linking.openURL(url)
    }

    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <FullscreenLoading/>}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16 }}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder={'Email'}
          style={styles.input}
          keyboardType={'email-address'}
          autoComplete={'email'}
          secureTextEntry={false}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder={'Senha'}
          style={styles.input}
          secureTextEntry={true}
        />
        <TouchableWithoutFeedback onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        </TouchableWithoutFeedback>

        <TouchableOpacity
          onPress={handleSignIn}
          style={styles.loginButtonContainer}
        >
          <Text style={styles.loginButton}>Login</Text>
        </TouchableOpacity>

        <Text>ou</Text>

        <TouchableWithoutFeedback onPress={handleSignUp}>
          <Text style={styles.signUp}>Novo no TabNews? Crie sua conta aqui.</Text>
        </TouchableWithoutFeedback>
      </View>
    </>
  )
}