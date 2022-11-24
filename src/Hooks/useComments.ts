import api from "../Services/api";

export const useComments = () => {
  const getCommentsByPost = async (username: string, slug: string) => {
    const { data } = await api.get(`/contents/${username}/${slug}/children`)

    return data
  }

  return {
    getCommentsByPost
  }
}