import { DebitIcon, PaypalIcon, WireIcon } from 'assets'

import { TransactionTypeColorsMap, TransactionTypeMap } from './RecentTransaction.props'

export const TRANSACTION_TYPE_MAP: TransactionTypeMap = {
  wire: <WireIcon />,
  debit: <DebitIcon />,
  paypal: <PaypalIcon />,
}

export const TRANSACTION_TYPE_COLORS_MAP: TransactionTypeColorsMap = {
  wire: 'tw-bg-bgGreen',
  paypal: 'tw-bg-bgBlue',
  debit: 'tw-bg-bgYellow',
}
