import { forwardRef } from 'react'

import cx from 'classnames'

import { SearchIcon } from 'assets'
import { Input, InputProps } from 'components/Input'

export const SearchInput = forwardRef<HTMLInputElement, InputProps>(({
  value,
  variant,
  onChange,
  className = '',
  placeholder = 'Search for something',
}, ref) => (
  <div
    className={cx(
      'tw-flex tw-items-center tw-relative tw-text-[15px] tw-h-50',
      'tw-max-w-[min(255px,_100%)]',
      className,
    )}
  >
    <SearchIcon
      className='tw-absolute tw-left-4 tw-text-black tw-pointer-events-none tw-ml-24'
    />
    <Input
      ref={ref}
      className={cx(
        'tw-w-full tw-pl-60 tw-pr-20 tw-border-none tw-rounded-[40px] tw-placeholder-opacity-90',
        className,
      )}
      value={value}
      variant={variant}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
))
