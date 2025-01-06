export const formatBalance = (balance: number): string => new Intl.NumberFormat('en-US', {
  useGrouping: true,
  currency: 'USD',
  style: 'currency',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
  notation: balance >= 1e6 ? 'compact' : 'standard',
}).format(balance)
