export type PostCommentItemModel = {
  id: string
  body: string
  owner_username: string
  children: PostCommentItemModel[]
}