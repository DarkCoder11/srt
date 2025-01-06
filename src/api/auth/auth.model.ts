import { Base } from 'api/base'

export type UserInfo =
  & Base.Entity<number>
  & {
    token: string
    metadata: UserInfoMetadata
  }

export type UserInfoMetadata = {
  email: string
  password: string
}
