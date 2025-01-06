import { ChartDataset } from 'chart.js'

export type StatisticsPieChartProps = {
  labels: string[]
  datasets: ChartDataset<'pie'>[]
}
