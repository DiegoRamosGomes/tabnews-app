import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useContext, useState } from "react";
import { styles } from "../LoginPage/styles";
import AuthContext from "../../Contexts/AuthContext";
import { FullscreenLoading } from "../../Components/FullscreenLoading";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackRoutes } from "../../Routes/AuthRoutes";

const mailFormatValidator = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

type ScreenProps = NativeStackNavigationProp<AuthStackRoutes, 'RegisterPage'>

export const CreateAccountPage = ({ navigation }: ScreenProps) => {

  const { signUp } = useContext(AuthContext)

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSignUp = async () => {
    if (!email.match(mailFormatValidator)) {
      alert('preencha todos os campos')
      return
    }

    if (!username.length) {
      alert('Nome de usuario obrigatório')
      return
    }

    if (!password.length) {
      alert('Senha obrigatória')
      return
    }

    setIsLoading(true)
    signUp(username, email, password)
      .then(() => {
        setIsLoading(false)
        navigation.navigate('LoginPage')
      })
      .catch(() => {
        alert('Verifique os dados informados e tente novamente')
        setIsLoading(false)
      })
  }

  return (
    <>
      {isLoading && <FullscreenLoading/>}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16 }}>
        <Text style={styles.title}>Cadastro</Text>

        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder={'Nome de usuário'}
          style={styles.input}
          autoComplete={'username'}
          secureTextEntry={false}
        />
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
        <TouchableOpacity
          onPress={handleSignUp}
          style={styles.loginButtonContainer}
        >
          <Text style={styles.loginButton}>Criar Cadastro</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}