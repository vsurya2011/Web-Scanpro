import React from 'react'
import Card from '../components/Card'

export default function Docs(){
  return (
    <div>
      <h2 className="text-2xl font-semibold">Documentation</h2>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <Card title="Architecture Diagram">
          <div className="h-40 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center">Diagram placeholder</div>
        </Card>

        <Card title="ML Modules">
          <ul className="list-disc pl-5">
            <li>SQL Injection Classifier (probability)</li>
            <li>XSS Detector (confidence score)</li>
            <li>IDOR Anomaly Detector (anomaly score)</li>
          </ul>
        </Card>

        <Card title="Scanner Pipeline">
          <ol className="list-decimal pl-5">
            <li>Input / Crawl</li>
            <li>Module Tests (SQLi/XSS/Auth/IDOR)</li>
            <li>Model Scoring</li>
            <li>Aggregate & Report</li>
          </ol>
        </Card>

        <Card title="API Endpoints (Placeholder)">
          <pre>/api/start-scan  POST
/api/progress     GET
/api/results      GET
/api/vuln/:id     GET</pre>
        </Card>
      </div>
    </div>
  )
}
