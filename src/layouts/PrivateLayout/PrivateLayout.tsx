import cx from 'classnames'
import _noop from 'lodash/noop'

import { Header, PageHelmet, Navbar } from 'components'

import { navItems } from './PrivateLayout.hooks'
import { PrivateLayoutProps } from './PrivateLayout.props'

export const PrivateLayout = ({
  className = '',
  routeKey,
  children,
}: PrivateLayoutProps) => (
  <>
    <PageHelmet routeKey={routeKey} />
    <Navbar items={navItems} />
    <section className='tw-w-full'>
      <Header
        onSearch={_noop}
        mobileNavItems={navItems}
      />
      <div className={cx('tw-container max-xl:tw-max-w-full', className)}>
        {children}
      </div>
    </section>
  </>
)
