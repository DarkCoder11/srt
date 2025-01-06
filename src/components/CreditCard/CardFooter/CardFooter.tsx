import cx from 'classnames'

import { CardTypeIcon } from 'assets'

import { CardFooterProps } from './CardFooter.props'

export const CardFooter = ({
  maskedCardNumber,
  isPrimaryVariant,
}: CardFooterProps) => (
  <div
    className={cx(
      'tw-w-full tw-pl-[26px] tw-pr-24 tw-py-20',
      'tw-absolute tw-bottom-0 tw-left-0 tw-flex tw-justify-between tw-items-center',
      {
        'tw-border-t tw-border-borderGray': !isPrimaryVariant,
        'tw-bg-card-footer-gradient': isPrimaryVariant,
      },
    )}
  >
    <p
      className={cx('tw-font-lato tw-font-medium tw-leading-[18px] m:tw-leading-[1.65rem] tw-text-[15px] m:tw-text-[22px]', {
        'tw-text-secondaryHeading': !isPrimaryVariant,
      })}
    >
      {maskedCardNumber}
    </p>
    <div
      className={cx({
        'tw-text-white': isPrimaryVariant,
        'tw-text-opacityGray': !isPrimaryVariant,
      })}
    >
      <CardTypeIcon />
    </div>
  </div>
)
