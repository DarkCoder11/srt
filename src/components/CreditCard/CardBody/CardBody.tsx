import cx from 'classnames'

import { CardBodyProps } from './CardBody.props'

export const CardBody = ({
  cardHolder,
  isPrimaryVariant,
  formattedValidThru,
}: CardBodyProps) => (
  <div className='tw-flex tw-gap-[67px] tw-mt-[33px]'>
    <div className='tw-flex tw-flex-col tw-gap-2'>
      <span
        className={cx('tw-font-lato tw-text-[10px] m:tw-text-[12px] tw-leading-[12px] m:tw-leading-[14px]', {
          'tw-opacity-70': isPrimaryVariant,
          'tw-text-labelText': !isPrimaryVariant,
        })}
      >
        CARD HOLDER
      </span>
      <p
        className={cx('tw-font-lato tw-text-[13px] m:tw-text-[15px] tw-leading-[16px] m:tw-leading-[18px] tw-mt-2 tw-font-medium', {
          'tw-text-secondaryHeading': !isPrimaryVariant,
        })}
      >
        {cardHolder}
      </p>
    </div>

    <div className='tw-flex tw-flex-col tw-gap-2'>
      <span
        className={cx('tw-font-lato tw-text-[10px] m:tw-text-[12px] tw-leading-[12px] m:tw-leading-[14px]', {
          'tw-opacity-70': isPrimaryVariant,
          'tw-text-labelText': !isPrimaryVariant,
        })}
      >
        VALID THRU
      </span>
      <p
        className={cx('tw-font-lato tw-text-[13px] m:tw-text-[15px] tw-leading-[16px] m:tw-leading-[18px] tw-mt-2 tw-font-medium', {
          'tw-text-secondaryHeading': !isPrimaryVariant,
        })}
      >
        {formattedValidThru}
      </p>
    </div>
  </div>
)
