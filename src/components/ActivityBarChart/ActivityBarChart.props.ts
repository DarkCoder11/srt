import { ChartDataset } from 'chart.js'

export type ActivityBarChartFrequency = 'weekly' | 'monthly' | 'yearly'

export type ActivityBarChartProps = {
  frequency: ActivityBarChartFrequency
  chartData: ChartDataset<'bar'>[]
}
