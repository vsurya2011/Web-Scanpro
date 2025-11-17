import React, { useEffect, useState } from 'react'
import { fetchResults } from '../api/mockApi'
import { VulnerabilitiesBar, SeverityPie } from '../components/ChartWrapper'
import Table from '../components/Table'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

export default function Results(){
  const [data, setData] = useState(null)
  useEffect(()=> {
    fetchResults().then(setData)
  },[])

  if(!data) return <div className="card">Loading results...</div>

  return (
    <div>
      <h2 className="text-2xl font-semibold">Vulnerability Summary</h2>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <div className="md:col-span-2">
          <Card title="Vulnerabilities by Type">
            <VulnerabilitiesBar data={data.summary.byType} />
          </Card>

          <Card className="mt-4" title="Detailed Findings">
            <Table data={data.vulnerabilities} />
          </Card>
        </div>

        <div>
          <Card title="Summary">
            <div className="text-lg font-bold">{data.summary.totalVulnerabilities} Vulnerabilities</div>
            <div className="mt-2">Risk Score: <span className="font-semibold">{data.summary.riskScore}</span></div>
            <div className="mt-3">
              <h4 className="font-semibold">Severity</h4>
              <SeverityPie data={data.summary.severity} />
            </div>
          </Card>

          <Card className="mt-4" title="ML Insights">
            <ul className="text-sm space-y-1">
              <li>SQLi: Probability Score — aggregated per finding</li>
              <li>XSS: Confidence Score — aggregated</li>
              <li>IDOR: Anomaly Score</li>
            </ul>
            <div className="mt-3">
              <Link to="/reports" className="text-sm text-blue-600">Download Reports</Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
