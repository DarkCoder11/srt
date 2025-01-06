import { useState } from 'react'

import cx from 'classnames'
import { useLocation } from 'react-router-dom'

import { AvatarImage, BurgerIcon, NotificationIcon, SettingsHeaderIcon } from 'assets'
import { Button } from 'components/Button'
import { MobileNav } from 'components/MobileNav'
import { SearchInput } from 'components/SearchInput'

import { HeaderProps } from './Header.props'
import { formatPathname } from './Header.utils'

export const Header = ({
  onSearch,
  className = '',
  mobileNavItems,
}: HeaderProps) => {
  const { pathname } = useLocation()

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <>
      <header
        className={cx(
          'tw-flex tw-items-center tw-w-full tw-py-20 tw-bg-white tw-border-b tw-border-gray max-xl:tw-px-[25px]',
          className,
        )}
      >
        <div className='tw-flex xl:tw-hidden tw-items-center tw-justify-between tw-w-full'>
          <Button
            variant='secondary'
            icon={<BurgerIcon />}
            onClick={() => setIsMobileNavOpen(true)}
            className='tw-flex tw-items-center tw-justify-center tw-w-18 tw-h-18 tw-p-2 tw-bg-transparent tw-border-none tw-cursor-pointer'
          />
        </div>

        <div className='tw-hidden xl:tw-flex tw-items-center tw-justify-between tw-w-full tw-px-40'>
          <h1 className='tw-text-secondaryHeading tw-text-[28px] tw-font-semibold tw-leading-[34px]'>
            {formatPathname(pathname)}
          </h1>
          <div className='tw-flex tw-flex-1 tw-justify-end tw-items-center'>
            <div className='tw-flex tw-items-center tw-gap-30'>
              <SearchInput
                variant='primary'
                onChange={onSearch}
              />
              <Button
                variant='secondary'
                icon={<SettingsHeaderIcon />}
                className='tw-flex tw-items-center tw-justify-center tw-w-50 tw-h-50 tw-rounded-[50%] tw-bg-bgGray'
              />
              <Button
                variant='secondary'
                icon={<NotificationIcon />}
                className='tw-flex tw-items-center tw-justify-center tw-w-50 tw-h-50 tw-rounded-[50%] tw-bg-bgGray'
              />
            </div>
            <div className='tw-ml-[35px]'>
              <img alt='avatar' src={AvatarImage} className='tw-object-cover tw-w-60 tw-h-60 tw-rounded-[50%] tw-object-right-top' />
            </div>
          </div>
        </div>
      </header>

      <MobileNav
        isOpen={isMobileNavOpen}
        items={mobileNavItems}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </>
  )
}
