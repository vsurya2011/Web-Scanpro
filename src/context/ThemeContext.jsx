import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [accent, setAccent] = useState(() => localStorage.getItem('ws_accent') || '#16a34a')
  const [dark, setDark] = useState(() => JSON.parse(localStorage.getItem('ws_dark') || 'true'))

  useEffect(()=> {
    document.documentElement.style.setProperty('--accent-color', accent)
    localStorage.setItem('ws_accent', accent)
    localStorage.setItem('ws_dark', JSON.stringify(dark))
  }, [accent, dark])

  return (
    <ThemeContext.Provider value={{ accent, setAccent, dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
