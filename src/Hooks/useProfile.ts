import api from "../Services/api";

export const useProfile = () => {
  const getUserContents = async (username: string, page?: number, per_page?: number) => {
    if (!per_page) {
      per_page = 10
    }

    if (!page) {
      page = 1
    }

    const { data } = await api.get(`/contents/${username}?per_page=${per_page}&page=${page}`)
    return data
  }

  return {
    getUserContents
  }
}