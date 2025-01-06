import { useCallback, useRef, useState } from 'react'

import cx from 'classnames'
import { toast } from 'react-toastify'

import { ArrowIcon, SendIcon } from 'assets'
import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { List } from 'components/List'

import { QuickTransferProps, QuickTransferUser } from './QuickTransfer.props'

export const QuickTransfer = ({ users }: QuickTransferProps) => {
  const [amount, setAmount] = useState<number | null>(null)
  const [selectedUser, setSelectedUser] = useState<QuickTransferUser>(
    users[0],
  )
  const [isAtEnd, setIsAtEnd] = useState(false)
  const listRef = useRef<HTMLDivElement | null>(null)

  const handleSendTransfer = useCallback((event: React.FormEvent) => {
    event.preventDefault()

    if (selectedUser && amount && amount > 0) {
      toast.success('Transfer sent')
    } else {
      toast.error('Invalid amount')
    }
  }, [amount, selectedUser])

  const handleScroll = useCallback(() => {
    if (!listRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = listRef.current
    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1)
  }, [])

  const handleArrowClick = useCallback(() => {
    if (!listRef.current) return

    if (isAtEnd) {
      listRef.current.scrollTo({ left: 0, behavior: 'smooth' })
    } else {
      listRef.current.scrollTo({ left: listRef.current.scrollWidth, behavior: 'smooth' })
    }
  }, [isAtEnd])

  return (
    <div className='tw-flex tw-flex-col tw-gap-[29px]'>
      <div className='tw-flex tw-items-center tw-gap-10'>
        <div
          ref={listRef}
          onScroll={handleScroll}
          className='tw-max-w-[394px] tw-overflow-x-auto tw-scrollbar-hide'
        >
          <List
            className='tw-gap-[33px]'
            items={users}
            render={(user) => {
              const isSelectedUser = selectedUser && selectedUser.id === user.id

              return (
                <li>
                  <Button
                    variant='secondary'
                    onClick={() => setSelectedUser(user)}
                    className='tw-flex tw-min-w-[97px] tw-flex-col tw-items-center tw-px-0 tw-gap-[15px]'
                    label={(
                      <>
                        <div className='tw-px-12'>
                          <div className='tw-w-[70px] tw-h-[70px]'>
                            <img
                              alt={user.name}
                              src={user.avatar}
                              className='tw-object-cover tw-rounded-[50%] tw-object-right-top'
                            />
                          </div>
                        </div>

                        <div className='tw-flex tw-flex-col tw-gap-[5px]'>
                          <p
                            className={cx(
                              'tw-text-[16px] tw-leading-[19px] tw-text-primaryBlack tw-whitespace-nowrap',
                              isSelectedUser && 'tw-font-bold',
                            )}
                          >
                            {user.name}
                          </p>
                          <p className={cx(
                            'tw-text-[15px] tw-leading-[18px] tw-text-labelText',
                            isSelectedUser && 'tw-font-bold',
                          )}
                          >
                            {user.role}
                          </p>
                        </div>
                      </>
              )}
                  />
                </li>
              )
            }}
          />
        </div>

        <Button
          icon={<ArrowIcon className={cx(isAtEnd && 'tw-rotate-180')} />}
          variant='secondary'
          onClick={handleArrowClick}
          className='tw-w-[50px] tw-h-50 tw-rounded-[25px] tw-shadow-custom-light tw-flex tw-items-center tw-justify-center'
        />
      </div>

      <div className='tw-flex tw-justify-between tw-items-center'>
        <span className='tw-text-labelText tw-text-16 tw-leading-[19px]'>Write Amount</span>

        <form onSubmit={handleSendTransfer} className='tw-flex tw-relative tw-max-w-[265px] tw-w-full'>
          <Input
            type='number'
            placeholder='525.50'
            className='tw-rounded-[50px] tw-pl-30'
            onChange={(nextValue) => setAmount(Number(nextValue))}
          />
          <Button
            type='submit'
            icon={<SendIcon />}
            disabled={!selectedUser || !amount}
            label={<span className='tw-text-16 tw-leading-[19px] tw-font-medium'>Send</span>}
            className='tw-absolute tw-right-0 tw-rounded-[50px] tw-gap-12 tw-px-24 tw-py-14'
          />
        </form>
      </div>
    </div>
  )
}
