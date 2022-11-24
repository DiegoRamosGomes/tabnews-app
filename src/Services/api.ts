import axios from "axios";

const api = axios.create({
  baseURL: "https://www.tabnews.com.br/api/v1",
  timeout: 30000
})

export default api