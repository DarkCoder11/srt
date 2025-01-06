import { apiBase } from './base.api'

export namespace Base {
  export type Entity<Id = (string | number)> = {
    id: Id
    created_at?: number
    updated_at?: number
    ts?: number
  }

  export enum SortDir {
    DESC = -1,
    NEU = 0,
    ASC = 1,
  }

  export type SortMap<Data> = Partial<Record<
  keyof Data,
  SortDir
  >>

  export type FieldsAggr<Data> = Partial<Record<
  keyof Data,
  1
  >>

  export type Response<Data> = Awaited<
  ReturnType<
      typeof apiBase.request<Data>
  >
  >

  export type PaginatedParams<Item> = Partial<{
    query: object
    fields: FieldsAggr<Item>
    sort: SortMap<Item>
    offset: number
    limit: number
    overwrite_cache: boolean
  }>

  export type DataWrap<Data = void> =
    & Partial<Pick<
    Error,
    | 'message'
    >>
    & {
      success: boolean
      data?: Data
    }

  export type ListData<Item> = DataWrap<Item[]>

  export type ListResponse<Item> = Response<
  ListData<Item>
  >

  export enum Status {
    SUCCESS = 200,
    CREATED = 201,
    NO_CONTENT = 204,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
  }

  export type Error = {
    message: string
  }

  export type Callee<
    Arg = void,
    Res = void,
  > = (arg: Arg) => Promise<Res>
}
