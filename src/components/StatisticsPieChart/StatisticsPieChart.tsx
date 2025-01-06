import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Pie } from 'react-chartjs-2'

import { STATISTICS_PIE_CHART_OPTIONS } from './StatisticsPieChart.const'
import { StatisticsPieChartProps } from './StatisticsPieChart.props'

export const StatisticsPieChart = ({
  labels,
  datasets,
}: StatisticsPieChartProps) => (
  <Pie
    data={{
      labels,
      datasets,
    }}
    plugins={[ChartDataLabels]}
    options={STATISTICS_PIE_CHART_OPTIONS}
  />
)
