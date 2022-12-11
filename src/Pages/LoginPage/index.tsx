import { Linking, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { useContext, useState } from "react";
import { styles } from "./styles";
import AuthContext from "../../Contexts/AuthContext";
import { FullscreenLoading } from "../../Components/FullscreenLoading";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackRoutes } from "../../Routes/AuthRoutes";

const mailFormatValidator = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

type ScreenProps = NativeStackNavigationProp<AuthStackRoutes, 'LoginPage'>

export const LoginPage = ({ navigation }: ScreenProps) => {

  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSignIn = () => {
    setIsLoading(true)

    if (!email.match(mailFormatValidator)) {
      alert('preencha todos os campos')
      setIsLoading(false)
      return
    }

    signIn(email, password).then(value => {
      if (!value) {
        alert('dados incorretos')
      }

      setIsLoading(false)
    })
  }

  const handleSignUp = async () => {
    navigation.navigate('RegisterPage')
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