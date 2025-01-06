import { CreditCard } from 'components'
import { PrivateLayout } from 'layouts'

export const CreditCards = () => (
  <PrivateLayout routeKey='CREDIT_CARDS'>
    <div className='tw-flex tw-gap-30 max-m:tw-flex-col'>
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
  </PrivateLayout>
)
