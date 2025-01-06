import { ChartOptions } from 'chart.js'

export const STATISTICS_PIE_CHART_OPTIONS: ChartOptions<'pie'> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
    datalabels: {
      color: 'white',
      formatter(value, context) {
        if (!context.chart.data.labels) return value

        return `${value}% \n ${context.chart.data.labels[context.dataIndex]}`
      },
      textAlign: 'center',
      font: {
        family: 'Inter',
        size: 13,
        weight: 'bold',
        lineHeight: '18px',
      },
    },
  },
}
