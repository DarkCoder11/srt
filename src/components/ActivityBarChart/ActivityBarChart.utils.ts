import _findIndex from 'lodash/findIndex'
import _map from 'lodash/map'

import { ActivityBarChartFrequency } from './ActivityBarChart.props'

export const generateActivityBarChartLabels = (
  frequency: ActivityBarChartFrequency,
): string[] => {
  const now = new Date()

  switch (frequency) {
    case 'weekly': {
      const weekdays = Array.from({ length: 7 }, (_, i) => {
        const day = new Date()
        day.setDate(now.getDate() - (6 - i))
        return day.toLocaleDateString('en-US', { weekday: 'short' })
      })

      const satIndex = _findIndex(weekdays, (day) => day === 'Sat')
      return [...weekdays.slice(satIndex), ...weekdays.slice(0, satIndex)]
    }

    case 'monthly': {
      const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
      return Array.from({ length: daysInMonth }, (_, i) => (i + 1).toString())
    }

    case 'yearly': {
      return _map(Array.from({ length: 12 }), (_, i) => new Date(0, i).toLocaleDateString('en-US', { month: 'short' }))
    }

    default:
      return []
  }
}
