export type PostCommentItemModel = {
  id: string
  body: string
  slug: string
  owner_username: string
  children: PostCommentItemModel[]
}