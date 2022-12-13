import api from "../Services/api";

export const useContents = () => {
  const getLatestContents = async (page?: number, limit?: number, strategy?: 'new' | 'old' | 'relevant') => {
    if (!limit) {
      limit = 10
    }

    if (!page) {
      page = 1
    }

    if (!strategy) {
      strategy = 'relevant'
    }

    const { data } = await api.get(`/contents?per_page=${limit}&page=${page}&strategy=${strategy}`)

    return data
  }

  const getContent = async (username: string, postSlug: string) => {
    const { data } = await api.get(`/contents/${username}/${postSlug}`)

    return data
  }

  const giveVote = async (username: string, postSlug: string, type: string) => {
    await api.post(`/contents/${username}/${postSlug}/tabcoins`, {
      transaction_type: type
    })
  }

  const publishContent = async (title: string, content: string, source?: string) => {
    const data = {
      title,
      body: content,
      status: 'published',
      source_url: source
    }

    return await api.post('/contents', data)
  }

  return {
    getLatestContents,
    getContent,
    giveVote,
    publishContent
  }
}