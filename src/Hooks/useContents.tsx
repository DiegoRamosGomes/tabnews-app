import api from "../Services/api";

export const useContents = () => {
  const getLatestContents = async (page?: number, limit?: number) => {
    if (!limit) {
      limit = 10
    }

    if (!page) {
      page = 1
    }

    const { data } = await api.get(`/contents?per_page=${limit}&page=${page}`)

    return data
  }

  const getContent = async (username: string, postSlug: string) => {
    const { data } = await api.get(`/contents/${username}/${postSlug}`)

    return data
  }

  return {
    getLatestContents,
    getContent
  }
}