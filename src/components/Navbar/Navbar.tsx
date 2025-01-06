import cx from 'classnames'

import { AppLogo } from 'assets'
import { List } from 'components/List'
import { NavLink } from 'components/NavLink'

import { NavbarProps } from './Navbar.props'

export const Navbar = ({
  items,
  className = '',
}: NavbarProps) => (
  <nav
    className={cx(
      'tw-hidden xl:tw-flex xl:tw-flex-col tw-w-max tw-user-select-none tw-bg-white tw-border-r tw-border-gray tw-gap-9',
      className,
    )}
  >
    <div className='tw-w-full tw-py-20 tw-pl-[38px] tw-pr-[45px]'>
      <div className='tw-pt-13 tw-pb-12'>
        <AppLogo />
      </div>
    </div>
    <List
      items={items}
      className='tw-flex-col tw-mt-14'
      render={(item, index) => (
        <NavLink
          to={item.to}
          icon={item.icon}
          onClick={item.onClick}
          key={item.to || `nav_item.${index}`}
          className={cx('tw-relative tw-flex tw-items-center tw-gap-24 tw-pl-44 tw-py-16', item.className)}
          activeClassName='before:tw-content-[""] before:tw-absolute before:tw-top-0 before:tw-left-0 before:tw-h-full before:tw-w-[6px] before:tw-bg-primaryBlack before:tw-rounded-r-[10px]'
        >
          <span className='tw-text-lg tw-font-medium tw-leading-[1.375rem] tw-ml-2'>
            {item.children}
          </span>
        </NavLink>
      )}
    />
  </nav>
)
