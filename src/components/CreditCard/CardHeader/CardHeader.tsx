import cx from 'classnames'

import { CardChipImage, CardChipLightImage } from 'assets'

import { CardHeaderProps } from './CardHeader.props'

export const CardHeader = ({
  formattedBalance,
  isPrimaryVariant,
}: CardHeaderProps) => (
  <div className='tw-flex tw-justify-between'>
    <div className='tw-flex tw-flex-col'>
      <span
        className={cx('tw-font-lato tw-text-[11px] m:tw-text-[12px] tw-leading-[13px] m:tw-leading-[14px]', {
          'tw-text-labelText': !isPrimaryVariant,
        })}
      >
        Balance
      </span>
      <p
        className={cx('tw-font-lato tw-font-medium tw-text-[16px] m:tw-text-[20px] tw-leading-[19px] m:tw-leading-[24px]', {
          'tw-text-secondaryHeading': !isPrimaryVariant,
        })}
      >
        {formattedBalance}
      </p>
    </div>
    <div>
      <img
        className='tw-w-[29px] m:tw-w-[34px]'
        alt={`card-chip-${isPrimaryVariant ? 'dark' : 'light'}`}
        src={isPrimaryVariant ? CardChipImage : CardChipLightImage}
      />
    </div>
  </div>
)
