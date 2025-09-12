"use client"

import { useState, useEffect, useCallback } from "react"

interface MousePosition {
  x: number | null
  y: number | null
}

export function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: null, y: null })

  // Use useCallback to memoize the event handler
  const updateMousePosition = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [updateMousePosition]) // Include the memoized callback in dependencies

  return mousePosition
}
