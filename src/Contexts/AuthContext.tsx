import { createContext, useState } from "react";
import { UserModel } from "../Models/UserModel";
import api from "../Services/api";

interface AuthContextProps {
  user: UserModel
  isLogged: boolean

  signIn(email: string, password: string): Promise<boolean>

  signOut(): void

  signUp(): void
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<UserModel>()

  const signIn = async (email: string, password: string) => {
    try {
      const res = await api.post('/sessions', { email, password })

      if (res.status !== 201) {
        return false
      }

      const userData = await api.get(`/user`)

      setUser(userData.data)
      return true
    } catch (e) {
      return false
    }
  }

  const signOut = () => {

  }

  const signUp = () => {

  }

  return (
    <AuthContext.Provider value={{
      user,
      isLogged: !!user?.id,
      signIn,
      signOut,
      signUp,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext