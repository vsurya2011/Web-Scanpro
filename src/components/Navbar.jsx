import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export default function Navbar(){
  const nav = useNavigate()
  const { dark, setDark } = useTheme()
  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button onClick={()=> nav('/')} className="font-bold text-lg">WebScanPro</button>
          <span className="text-sm text-gray-500 dark:text-gray-300">AI-Powered Web Security Scanner</span>
        </div>
        <div className="flex items-center space-x-3">
          <Link to="/" className="text-sm hidden md:inline">Home</Link>
          <Link to="/start-scan" className="text-sm hidden md:inline">Start Scan</Link>
          <Link to="/results" className="text-sm hidden md:inline">Dashboard</Link>
          <Link to="/reports" className="text-sm hidden md:inline">Reports</Link>
          <Link to="/docs" className="text-sm hidden md:inline">Docs</Link>
          <button onClick={()=> setDark(!dark)} className="px-3 py-1 border rounded text-sm">
            {dark ? 'Light' : 'Dark'}
          </button>
          <Link to="/login" className="px-3 py-1 bg-accent text-white rounded text-sm">Login</Link>
        </div>
      </div>
    </nav>
  )
}
