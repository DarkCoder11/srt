import cx from 'classnames'
import { Link } from 'react-router-dom'

import { ActivityBarChart, CreditCard, List, QuickTransfer, RecentTransaction, StatisticsPieChart } from 'components'
import { ROUTE_PATHS } from 'const'
import { PrivateLayout } from 'layouts'

import { EXPENSE_STATISTICS_MOCK, QUICK_TRANSFER_USERS, TRANSACTIONS_MOCK, WEEKLY_ACTIVITY_MOCK } from './Dashboard.const'

export const Dashboard = () => (
  <PrivateLayout className='tw-flex tw-flex-col tw-gap-24' routeKey='DASHBOARD'>
    <div className='tw-flex tw-gap-[22px] m:tw-gap-30 max-xl:tw-flex-col'>
      <div className='tw-flex tw-flex-col tw-gap-20 tw-h-full tw-w-full'>
        <div className='tw-flex tw-items-center tw-justify-between'>
          <h2 className='tw-font-semibold tw-text-secondaryHeading tw-leading-[27px] tw-text-[22px]'>My Cards</h2>
          <Link
            to={ROUTE_PATHS.CREDIT_CARDS}
            className={cx(
              'tw-text-[17px] tw-text-secondaryHeading tw-leading-[21px] tw-font-semibold tw-pt-[5px] tw-mr-[7px]',
              'tw-relative after:tw-bg-secondaryHeading after:tw-absolute after:tw-h-1 after:tw-w-0 after:tw-bottom-0 after:tw-left-0 hover:after:tw-w-full after:tw-transition-all after:tw-duration-300',
            )}
          >
            See All
          </Link>
        </div>

        <div className='tw-flex tw-gap-20 m:tw-gap-30 max-m:tw-mx-[-25px] max-m:tw-px-[25px] max-xl:tw-scrollbar-hide max-xl:tw-overflow-x-auto'>
          <CreditCard
            balance={5756}
            cardHolder='Eddy Cusuma'
            cardNumber='3778123412341234'
            validThru={Date.parse('2022-12-01')}
          />
          <CreditCard
            variant='secondary'
            balance={1234.56}
            cardHolder='Eddy Cusuma'
            cardNumber='1234567890123456'
            validThru={Date.parse('2027-09-01')}
          />
        </div>
      </div>

      <div className='tw-flex tw-flex-col tw-gap-20 tw-min-w-[min(350px,_100%)]'>
        <h2 className='tw-font-semibold tw-text-secondaryHeading tw-leading-[27px] tw-text-[22px]'>Recent Transactions</h2>
        <List
          items={TRANSACTIONS_MOCK}
          className='tw-flex-col tw-gap-10 tw-max-h-[235px] tw-overflow-y-auto xl:tw-bg-white tw-py-20 xl:tw-py-[25px] xl:tw-pl-[25px] xl:tw-pr-24 xl:tw-rounded-[25px]'
          render={({ id, amount, date, description, type }) => (
            <RecentTransaction
              id={id}
              date={date}
              type={type}
              amount={amount}
              description={description}
            />
          )}
        />
      </div>
    </div>

    <div className='tw-flex tw-gap-[22px] m:tw-gap-30 max-xl:tw-flex-col'>
      <div className='tw-flex tw-flex-col tw-gap-20 tw-h-full tw-w-full'>
        <h2 className='tw-font-semibold tw-text-secondaryHeading tw-leading-[27px] tw-text-[22px]'>Weekly Activity</h2>
        <div className='xl:tw-pl-[33px] xl:tw-pr-[30px] tw-py-28 xl:tw-bg-white xl:tw-rounded-[25px] tw-h-[322px] tw-flex xl:tw-justify-center'>
          <ActivityBarChart frequency='weekly' chartData={WEEKLY_ACTIVITY_MOCK} />
        </div>
      </div>

      <div className='tw-flex tw-flex-col tw-gap-20 tw-min-w-[min(350px,_100%)]'>
        <h2 className='tw-font-semibold tw-text-secondaryHeading tw-leading-[27px] tw-text-[22px]'>Expense Statistics</h2>
        <div className='xl:tw-pl-[41px] xl:tw-pr-40 tw-py-[31px] xl:tw-bg-white xl:tw-rounded-[25px] tw-h-[322px]'>
          <StatisticsPieChart
            labels={EXPENSE_STATISTICS_MOCK.labels}
            datasets={EXPENSE_STATISTICS_MOCK.datasets}
          />
        </div>
      </div>
    </div>

    <div className='tw-flex tw-gap-[22px] m:tw-gap-30'>
      <div className='tw-flex tw-flex-col tw-gap-20 tw-min-w-[min(445px,_100%)]'>
        <h2 className='tw-font-semibold tw-text-secondaryHeading tw-leading-[27px] tw-text-[22px]'>Quick Transfer</h2>
        <div className='tw-px-18 xl:tw-px-[25px] tw-py-20 xl:tw-py-[35px] xl:tw-bg-white xl:tw-rounded-[25px]'>
          <QuickTransfer users={QUICK_TRANSFER_USERS} />
        </div>
      </div>
    </div>
  </PrivateLayout>
)
