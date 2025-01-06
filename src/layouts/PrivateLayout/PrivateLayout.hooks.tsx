import {
  LoansIcon,
  ServicesIcon,
  SettingsIcon,
  AccountsIcon,
  DashboardIcon,
  PrivilegesIcon,
  CreditCardsIcon,
  InvestmentsIcon,
  TransactionsIcon,
} from 'assets'
import { ROUTE_PATHS } from 'const'

export const navItems = [
  {
    children: 'Dashboard',
    icon: <DashboardIcon />,
    to: ROUTE_PATHS.DASHBOARD,
  },
  {
    children: 'Transactions',
    icon: <TransactionsIcon />,
    to: ROUTE_PATHS.TRANSACTIONS,
  },
  {
    children: 'Accounts',
    icon: <AccountsIcon />,
    to: ROUTE_PATHS.ACCOUNTS,
  },
  {
    children: 'Investments',
    icon: <InvestmentsIcon />,
    to: ROUTE_PATHS.INVESTMENTS,
  },
  {
    children: 'Credit Cards',
    icon: <CreditCardsIcon />,
    to: ROUTE_PATHS.CREDIT_CARDS,
  },
  {
    children: 'Loans',
    icon: <LoansIcon />,
    to: ROUTE_PATHS.LOANS,
  },
  {
    children: 'Services',
    icon: <ServicesIcon />,
    to: ROUTE_PATHS.SERVICES,
  },
  {
    children: 'My Privileges',
    icon: <PrivilegesIcon />,
    to: ROUTE_PATHS.MY_PRIVILEGES,
  },
  {
    children: 'Settings',
    icon: <SettingsIcon />,
    to: ROUTE_PATHS.SETTINGS,
  },
]
