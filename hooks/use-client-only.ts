"use client"

import { useState, useEffect } from "react"

export function useClientOnly<T>(initialValue: T, getValue: () => T): T {
  const [value, setValue] = useState<T>(initialValue)

  useEffect(() => {
    setValue(getValue())
  }, [getValue])

  return value
}

export function useIsMobile(breakpoint = 768): boolean {
  return useClientOnly(false, () => {
    return window.innerWidth < breakpoint
  })
}

export function useWindowSize() {
  return useClientOnly({ width: 0, height: 0 }, () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  })
}
