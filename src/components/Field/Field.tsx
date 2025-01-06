import cx from 'classnames'

import { FieldProps } from './Field.props'

export const Field = ({
  label,
  children,
  hint = '',
  error = '',
  className = '',
  required = false,
}: FieldProps) => (
  <div className={cx('tw-flex tw-flex-col tw-gap-2 tw-flex-1', className)}>
    <span className='tw-text-xs tw-font-semibold tw-leading-4 tw-text-gray-500'>
      {label}
      {required && <span className='tw-text-red-500'>*</span>}
    </span>
    <div
      className={cx(
        'tw-flex tw-flex-col tw-rounded-full tw-border tw-border-transparent tw-transition-colors tw-duration-400',
        {
          'tw-border-red-500': error,
        },
      )}
    >
      {children}
    </div>
    {error && (
      <span className='tw-flex tw-text-xs tw-font-semibold tw-leading-4 tw-text-red-500 tw-mt-[-4px]'>
        {error}
      </span>
    )}
    {hint && (
      <span className='tw-flex tw-text-xs tw-font-semibold tw-leading-4 tw-text-gray-400 tw-mt-[-4px]'>
        {hint}
      </span>
    )}
  </div>
)
