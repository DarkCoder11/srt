export type CreditCardProps = {
  balance: number
  validThru: number
  cardNumber: string
  cardHolder: string
  className?: string
  variant?: CreditCardVariant
}

export type CreditCardVariant =
  | 'primary'
  | 'secondary'
