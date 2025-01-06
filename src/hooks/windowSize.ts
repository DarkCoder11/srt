import { useCallback, useLayoutEffect, useMemo, useState } from 'react'

import { useEventListener } from './eventListener'

type WindowSize = {
  windowWidth: number
  windowHeight: number
}

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  useEventListener('resize', handleResize)

  useLayoutEffect(() => {
    handleResize()
  }, [handleResize])

  return useMemo(() => {
    const { width, height } = windowSize

    return {
      windowWidth: width,
      windowHeight: height,
    }
  }, [windowSize])
}
