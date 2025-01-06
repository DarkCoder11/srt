import { Base as ApiBase } from 'api/base'

export namespace Base {
  export type Slice<Key extends string, Schema> = Record<Key, Schema>

  export type Status = (
    | 'idle'
    | 'loading'
    | 'success'
    | 'error'
  )

  export type Error = ApiBase.Error

  export type Meta = {
    status: Status
    error?: Error
  }

  export type Field<Data = void> = {
    meta: Meta
    data: Data
  }

  export type Action<Type extends string, Payload = void> = {
    type: Type
    payload: Payload
  }
}
