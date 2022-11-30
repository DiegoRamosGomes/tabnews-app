import { createContext, useState } from "react";
import { UserModel } from "../Models/UserModel";
import api from "../Services/api";
import { useAuth } from "../Hooks/useAuth";

interface AuthContextProps {
  user: UserModel
  isLogged: boolean

  signIn(email: string, password: string): Promise<boolean>

  signOut(): void

  signUp(): void

  logInUser(): void
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export const AuthProvider = ({ children }) => {
  const { saveToken, deleteToken, saveUser, deleteUser } = useAuth()

  const [user, setUser] = useState<UserModel | null>(null)

  const signIn = async (email: string, password: string) => {
    try {
      const res = await api.post('/sessions', { email, password })

      if (res.status !== 201) {
        return false
      }

      const userData = await api.get(`/user`)

      await saveToken(res.data.token)
      await saveUser(userData.data)
      setUser(userData.data)
      return true
    } catch (e) {
      return false
    }
  }

  const signOut = async () => {
    await api.delete('/sessions')
    await deleteToken()
    await deleteUser()
    setUser(null)
  }

  const signUp = () => {

  }

  const logInUser = async () => {
    const userData = await api.get(`/user`)
    setUser(userData.data)
  }

  return (
    <AuthContext.Provider value={{
      user,
      isLogged: !!user?.id,
      signIn,
      signOut,
      signUp,
      logInUser,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext