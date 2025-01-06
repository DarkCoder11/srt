import _padStart from 'lodash/padStart'
import _repeat from 'lodash/repeat'
import _replace from 'lodash/replace'
import _toString from 'lodash/toString'

export const maskCardNumber = (cardNumber: string): string => {
  const startDigits = cardNumber.slice(0, 4)
  const endDigits = cardNumber.slice(-4)
  const maskedSection = _replace(_repeat('*', cardNumber.length - 8), /(.{4})/g, '$1 ')

  return `${startDigits} ${maskedSection} ${endDigits}`
}

export const formatValidThru = (timestamp: number): string => {
  const date = new Date(timestamp)
  const month = date.getMonth() + 1
  const year = date.getFullYear().toString().slice(-2)

  return `${_padStart(_toString(month), 2, '0')}/${year}`
}
