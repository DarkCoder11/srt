import { ChartDataset } from 'chart.js'

import { UserAustinAvatarImage, UserLiviaAvatarImage, UserMincaAvatarImage, UserRandyAvatarImage, UserWorkmanAvatarImage } from 'assets'
import { QuickTransferUser, RecentTransactionProps, StatisticsPieChartProps } from 'components'

export const TRANSACTIONS_MOCK: RecentTransactionProps[] = [
  {
    id: 1,
    type: 'debit',
    description: 'Deposit from my Card',
    date: Date.parse('28 January 2021'),
    amount: -850,
  },
  {
    id: 2,
    type: 'paypal',
    description: 'Deposit Paypal',
    date: Date.parse('25 January 2021'),
    amount: 2500,
  },
  {
    id: 3,
    type: 'wire',
    description: 'Jemi Wilson',
    date: Date.parse('21 January 2021'),
    amount: 5400,
  },
]

export const WEEKLY_ACTIVITY_MOCK: ChartDataset<'bar'>[] = [
  {
    label: 'Withdraw',
    data: [
      340,
      110,
      463,
      218,
      490,
      182,
      219,
    ],
    backgroundColor: '#232323',
  },
  {
    label: 'Deposit',
    data: [
      490,
      371,
      333,
      495,
      234,
      450,
      196,
    ],
    backgroundColor: '#396AFF',
  },
]

export const EXPENSE_STATISTICS_MOCK: StatisticsPieChartProps = {
  labels: ['Entertainment', 'Bill Expense', 'Others', 'Investment'],
  datasets: [
    {
      data: [30, 15, 35, 20],
      offset: 3,
      spacing: 8,
      rotation: 305,
      backgroundColor: ['#343C6A', '#FC7900', '#232323', '#396AFF'],
    },
  ],
}

export const QUICK_TRANSFER_USERS: QuickTransferUser[] = [
  {
    id: 1,
    name: 'Livia Bator',
    role: 'CEO',
    avatar: UserLiviaAvatarImage,
  },
  {
    id: 2,
    name: 'Randy Press',
    role: 'Director',
    avatar: UserRandyAvatarImage,
  },
  {
    id: 3,
    name: 'Workman',
    role: 'Designer',
    avatar: UserMincaAvatarImage,
  },
  {
    id: 4,
    name: 'Workman',
    role: 'Designer',
    avatar: UserWorkmanAvatarImage,
  },
  {
    id: 5,
    name: 'Workman',
    role: 'Designer',
    avatar: UserMincaAvatarImage,
  },
  {
    id: 6,
    name: 'Workman',
    role: 'Designer',
    avatar: UserAustinAvatarImage,
  },
]
