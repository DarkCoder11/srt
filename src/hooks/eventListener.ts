import { RefObject, useLayoutEffect, useEffect, useRef } from 'react'

export const useEventListener = <
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  T extends HTMLElement | null | void = void,
>(
    eventName: KW | KH,
    handler: (event: WindowEventMap[KW] | HTMLElementEventMap[KH] | Event) => void,
    element?: RefObject<T>,
  ): void => {
  const savedHandler = useRef(handler)

  useLayoutEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    const targetElement: T | Window = element?.current || window

    if (!targetElement || !targetElement.addEventListener) {
      return
    }

    const eventListener: typeof handler = (event) => savedHandler.current(event)

    targetElement.addEventListener(eventName, eventListener, true)

    return () => {
      targetElement.removeEventListener(eventName, eventListener, true)
    }
  }, [eventName, element])
}
