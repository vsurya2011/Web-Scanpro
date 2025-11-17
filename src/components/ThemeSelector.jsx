import React from 'react'
import { useTheme } from '../context/ThemeContext'

const themes = [
  { name: 'CyberGreen', color:'#16a34a' },
  { name: 'SecurityBlue', color:'#2563EB' },
  { name: 'RedAlert', color:'#DC2626' },
  { name: 'VioletTech', color:'#7C3AED' }
]

export default function ThemeSelector(){
  const { setAccent } = useTheme()
  return (
    <div className="flex items-center space-x-2">
      {themes.map(t=>(
        <button key={t.name} style={{ background: t.color }}
          className="w-6 h-6 rounded-full" aria-label={t.name}
          onClick={() => setAccent(t.color)} />
      ))}
    </div>
  )
}
