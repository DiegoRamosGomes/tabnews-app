import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AUTH_TOKEN_KEY } from "../Hooks/useAuth";

const api = axios.create({
  baseURL: "https://www.tabnews.com.br/api/v1",
  timeout: 30000
})


api.interceptors.request.use(async (config: AxiosRequestConfig) => {
    if (config.headers === undefined) {
      config.headers = {};
    }

    const token = await AsyncStorage.getItem(AUTH_TOKEN_KEY)

    if (token) {
      config.headers['Set-Cookie'] = 'session_id=' + token
    }

    return config
  }
)

api.interceptors.response.use((response: AxiosResponse) => {
  return response
}, (error) => {
  return new Promise.reject(error.response.data)
})


export default api