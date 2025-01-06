import React, { useMemo } from 'react'

import cx from 'classnames'

import { number } from 'utils'

import { TRANSACTION_TYPE_COLORS_MAP, TRANSACTION_TYPE_MAP } from './RecentTransaction.const'
import { RecentTransactionProps } from './RecentTransaction.props'
import { formatDate } from './RecentTransaction.utils'

export const RecentTransaction = ({ amount, date, type, description }: RecentTransactionProps) => {
  const formattedDate = useMemo(() => formatDate(date), [date])

  const formattedAmount = useMemo(() => number.formatBalance(amount), [amount])

  const truncatedDescription = useMemo(
    () => (description.length > 30 ? `${description.slice(0, 30)}...` : description),
    [description],
  )

  return (
    <li
      className='tw-flex tw-items-center tw-justify-between tw-pb-3'
    >
      <div className='tw-flex tw-items-center tw-gap-[17px]'>
        <div className={cx(
          'tw-w-[55px] tw-h-[55px] tw-rounded-full tw-flex tw-items-center tw-justify-center',
          TRANSACTION_TYPE_COLORS_MAP[type],
        )}
        >
          {TRANSACTION_TYPE_MAP[type]}
        </div>
        <div className='tw-flex tw-flex-col tw-gap-[7px]'>
          <p
            title={description}
            className='tw-text-[16px] tw-leading-[19px] tw-text-primaryBlack tw-font-medium tw-truncate tw-max-w-[167px]'
          >
            {truncatedDescription}
          </p>
          <p className='tw-text-[15px] tw-leading-[18px] tw-text-labelText'>
            {formattedDate}
          </p>
        </div>
      </div>
      <p
        className={cx('tw-text-[16px] tw-leading-[19px] tw-font-medium', {
          'tw-text-green': amount > 0,
          'tw-text-red': amount < 0,
        })}
      >
        {amount > 0 ? `+${formattedAmount}` : formattedAmount}
      </p>
    </li>
  )
}
