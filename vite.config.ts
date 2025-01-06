import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import dts from 'vite-plugin-dts'
import _reduce from 'lodash/reduce'

const SRC_DIRS = [
  'assets',
  'api',
  'const',
  'components',
  'containers',
  'contexts',
  'layouts',
  'modules',
  'routes',
  'hooks',
  'store',
  'styles',
  'utils',
  'tools',
]

const ENV_VARS = [
  {
    key: 'API_PATH',
  }
]

export default defineConfig(() => {
  const commonEnv = loadEnv('common', process.cwd(), '')

  return {
    define: _reduce(
      ENV_VARS,
      (acc, { key }) => {
        acc[`process.env.${key}`] = JSON.stringify(commonEnv[key])

        return acc
      },
      {},
    ),
    plugins: [
      dts(),
      react(),
      svgr({
        svgrOptions: {
          exportType: 'default',
          ref: true,
          svgo: false,
          titleProp: true,
        },
        include: '**/*.svg',
      }),
    ],
    resolve: {
      alias: _reduce(
        SRC_DIRS,
        (acc, dir) => {
          acc[dir] = `/src/${dir}`

          return acc
        },
        {},
      ),
    }
  }
})
