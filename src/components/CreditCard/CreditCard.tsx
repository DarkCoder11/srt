import { useMemo } from 'react'

import cx from 'classnames'

import { number } from 'utils'

import { CardBody } from './CardBody'
import { CardFooter } from './CardFooter'
import { CardHeader } from './CardHeader'
import { CreditCardProps } from './CreditCard.props'
import { formatValidThru, maskCardNumber } from './CreditCard.utils'

export const CreditCard = ({
  balance,
  validThru,
  cardHolder,
  cardNumber,
  variant = 'primary',
}: CreditCardProps) => {
  const isPrimaryVariant = variant === 'primary'

  const formattedBalance = useMemo(() => number.formatBalance(balance), [balance])
  const maskedCardNumber = useMemo(() => maskCardNumber(cardNumber), [cardNumber])
  const formattedValidThru = useMemo(() => formatValidThru(validThru), [validThru])

  return (
    <div className={cx(
      'tw-select-none tw-w-full xl:tw-min-w-[min(350px,_100%)] tw-pt-24 tw-pl-[26px] tw-pr-24 tw-pb-[104px]',
      'tw-relative tw-flex tw-flex-col tw-rounded-[25px] max-m:tw-min-w-[min(265px,_100%)]',
      {
        'tw-bg-white tw-border tw-border-borderGray': !isPrimaryVariant,
        'tw-bg-card-gradient tw-text-white': isPrimaryVariant,
      },
    )}
    >
      <CardHeader
        formattedBalance={formattedBalance}
        isPrimaryVariant={isPrimaryVariant}
      />
      <CardBody
        cardHolder={cardHolder}
        formattedValidThru={formattedValidThru}
        isPrimaryVariant={isPrimaryVariant}
      />
      <CardFooter
        maskedCardNumber={maskedCardNumber}
        isPrimaryVariant={isPrimaryVariant}
      />
    </div>
  )
}
