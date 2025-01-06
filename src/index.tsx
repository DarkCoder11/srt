import 'modern-css-reset'
import './styles/index.css'

import { StrictMode } from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import { createRoot } from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { store } from 'store'

import { router } from './routes'

ChartJS.defaults.font.family = 'Inter'

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
)

createRoot(
  document.getElementById('root')!,
).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
      <ToastContainer theme='colored' limit={2} />
    </ReduxProvider>
  </StrictMode>,
)
