import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import ThemeSelector from '../components/ThemeSelector'
import ScanHistory from '../components/ScanHistory'

export default function Home(){
  return (
    <div>
      <section className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-3xl font-bold">WebScanPro</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">AI-Powered Automated Web Security Scanner</p>
          <div className="mt-4 flex items-center gap-3">
            <Link to="/start-scan" className="px-4 py-2 bg-accent text-white rounded">Start Scan</Link>
            <Link to="/docs" className="px-4 py-2 border rounded">Documentation</Link>
            <ThemeSelector />
          </div>
        </div>
        <div>
          <div className="card">
            <h3 className="font-semibold">Demo Preview</h3>
            <div className="h-48 bg-gray-100 dark:bg-gray-700 rounded mt-3 flex items-center justify-center">Video/GIF placeholder</div>
          </div>
        </div>
      </section>

      <section className="mt-6 grid md:grid-cols-3 gap-4">
        <Card title="SQL Injection Detection">Detects SQL injection payloads and reports probability scores.</Card>
        <Card title="XSS Detection">Finds reflected/stored XSS and suggests mitigations.</Card>
        <Card title="IDOR & Access Control">Analyzes access control issues and anomalies.</Card>
        <Card title="Authentication Security">Simulates auth flows and identifies weaknesses.</Card>
        <Card title="ML Anomaly Detection">Uses models to flag suspicious behavior with confidence scores.</Card>
        <Card title="Automated Reporting">Generate PDF/HTML/JSON reports for clients.</Card>
      </section>

      <section className="mt-6 grid md:grid-cols-2 gap-4">
        <Card title="How it works">
          <ol className="list-decimal pl-5">
            <li>Input URL</li>
            <li>Crawl target</li>
            <li>Run test modules (SQLi/XSS/Auth/IDOR)</li>
            <li>ML scoring & aggregation</li>
            <li>Generate AI-enhanced report</li>
          </ol>
        </Card>
        <Card title="Recent Scans">
          <ScanHistory />
        </Card>
      </section>
    </div>
  )
}
