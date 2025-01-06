import { ChartOptions } from 'chart.js'
import _filter from 'lodash/filter'
import { toast } from 'react-toastify'

export const ACTIVITY_BAR_CHART_OPTIONS: ChartOptions<'bar'> = {
  responsive: true,
  plugins: {
    legend: {
      align: 'end',
      position: 'top',
      labels: {
        pointStyle: 'circle',
        boxWidth: 15,
        borderRadius: 7.5,
        useBorderRadius: true,
        font: {
          size: 15,
          lineHeight: '18px',
        },
      },
      onClick(_event, legendItem, legend) {
        const { chart } = legend
        const { datasetIndex } = legendItem

        const visibleDatasetCount = _filter(
          chart.data.datasets,
          (_, index) => !chart.getDatasetMeta(index).hidden,
        ).length

        if (datasetIndex !== undefined) {
          if (chart.getDatasetMeta(datasetIndex).hidden) {
            chart.show(datasetIndex)
          } else if (visibleDatasetCount > 1) {
            chart.hide(datasetIndex)
          } else {
            toast.info('At least one dataset must be visible.')
          }
        }
      },
    },
  },
  elements: {
    bar: {
      borderRadius: 30,
      borderSkipped: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
      ticks: {
        color: '#718EBF',
        font: {
          size: 13,
          lineHeight: '15.73px',
        },
      },
    },
    y: {
      grid: {
        offset: true,
      },
      border: {
        display: false,
      },
      ticks: {
        font: {
          size: 13,
          lineHeight: '15.73px',
        },
        stepSize: 100,
        color: '#718EBF',
        callback(val) {
          return `   ${this.getLabelForValue(Number(val))}`
        },
      },
    },
  },
}
