import { useMemo, useRef } from 'react'

import { Chart as ChartJS, ChartData } from 'chart.js'
import _map from 'lodash/map'
import { Bar } from 'react-chartjs-2'

import { useEventListener } from 'hooks'

import { ACTIVITY_BAR_CHART_OPTIONS } from './ActivityBarChart.const'
import { ActivityBarChartProps } from './ActivityBarChart.props'
import { generateActivityBarChartLabels } from './ActivityBarChart.utils'

export const ActivityBarChart = ({
  frequency,
  chartData,
}: ActivityBarChartProps) => {
  const chartRef = useRef<ChartJS<'bar'> | null>(null)

  const labels = useMemo(() => generateActivityBarChartLabels(frequency), [frequency])

  const data: ChartData<'bar'> = useMemo(() => ({
    labels,
    datasets: _map(chartData, (dataset) => ({
      ...dataset,
      barPercentage: 0.8,
      categoryPercentage: 0.4,
    })),
  }), [labels, chartData])

  const updateChart = () => chartRef?.current?.update()

  useEventListener('load', updateChart)
  useEventListener('resize', updateChart)

  return (
    <Bar
      data={data}
      width={667}
      height={266}
      ref={chartRef}
      options={ACTIVITY_BAR_CHART_OPTIONS}
    />
  )
}
