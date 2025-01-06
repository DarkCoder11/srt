export type TransactionType = 'paypal' | 'wire' | 'debit'

export type TransactionTypeMap = {
  [key in TransactionType]: React.ReactNode
}

export type TransactionTypeColorsMap = {
  [key in TransactionType]: string
}

export type RecentTransactionProps = {
  id: number
  date: number
  amount: number
  description: string
  type: TransactionType
}
