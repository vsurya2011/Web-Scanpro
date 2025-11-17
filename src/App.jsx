import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import StartScan from './pages/StartScan'
import Progress from './pages/Progress'
import Results from './pages/Results'
import VulnerabilityDetail from './pages/VulnerabilityDetail'
import Reports from './pages/Reports'
import Docs from './pages/Docs'
import Login from './auth/Login'
import { ThemeProvider } from './context/ThemeContext'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/start-scan" element={<StartScan/>} />
            <Route path="/progress" element={<Progress/>} />
            <Route path="/results" element={<Results/>} />
            <Route path="/vuln/:id" element={<VulnerabilityDetail/>} />
            <Route path="/reports" element={<Reports/>} />
            <Route path="/docs" element={<Docs/>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
