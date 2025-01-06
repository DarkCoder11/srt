export const ROUTE_SUBPATHS = {
  SETTING_EDIT_PROFILE: '/edit-profile',
  SETTING_PREFERENCES: '/preferences',
  SETTING_SECURITY: '/security',
}

export const ROUTE_PATHS = {
  DASHBOARD: '/',
  TRANSACTIONS: '/transactions',
  ACCOUNTS: '/accounts',
  INVESTMENTS: '/investments',
  CREDIT_CARDS: '/credit-cards',
  LOANS: '/loans',
  SERVICES: '/services',
  MY_PRIVILEGES: '/my-privileges',
  SETTINGS: '/settings',
}

export type RouteKey = keyof typeof ROUTE_PATHS
