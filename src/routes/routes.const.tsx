import { createBrowserRouter } from 'react-router-dom'

import { ROUTE_PATHS } from 'const'
import {
  Accounts,
  CreditCards,
  Investments,
  Dashboard,
  Loans,
  MyPrivileges,
  Services,
  Settings,
  Transactions,
} from 'containers'

export const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: ROUTE_PATHS.ACCOUNTS,
    element: <Accounts />,
  },
  {
    path: ROUTE_PATHS.CREDIT_CARDS,
    element: <CreditCards />,
  },
  {
    path: ROUTE_PATHS.INVESTMENTS,
    element: <Investments />,
  },
  {
    path: ROUTE_PATHS.LOANS,
    element: <Loans />,
  },
  {
    path: ROUTE_PATHS.MY_PRIVILEGES,
    element: <MyPrivileges />,
  },
  {
    path: ROUTE_PATHS.SERVICES,
    element: <Services />,
  },
  {
    path: ROUTE_PATHS.SETTINGS,
    element: <Settings />,
  },
  {
    path: ROUTE_PATHS.TRANSACTIONS,
    element: <Transactions />,
  },
])
