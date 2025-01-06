import { PropsWithChildren, ReactNode } from 'react'

export type FieldProps = PropsWithChildren & {
  className?: string
  label: ReactNode
  hint?: ReactNode
  error?: ReactNode
  required?: boolean
}
