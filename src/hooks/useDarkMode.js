import { useEffect, useState } from 'react'

export default function useDarkMode() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('ws_dark')
    return saved ? JSON.parse(saved) : true
  })

  useEffect(() => {
    localStorage.setItem('ws_dark', JSON.stringify(dark))
  }, [dark])

  return [dark, setDark]
}
