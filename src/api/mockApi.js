// Simple mock API to simulate scanning lifecycle and results
import sample from '../data/sampleScanData.json'

export function startScan({ url, type, enableML, model }) {
  const scanId = 'scan-' + Date.now()
  // Save to localStorage history immediate
  const history = JSON.parse(localStorage.getItem('scanHistory'||'[]')) || []
  history.unshift({
    scanId, url, type, timestamp: Date.now(), vulns: 0, riskScore: 0
  })
  localStorage.setItem('scanHistory', JSON.stringify(history.slice(0,50)))
  return Promise.resolve({ scanId })
}

export function getScanProgress(scanId, step=0) {
  const pct = Math.min(100, step * 12)
  const logs = [
    "Crawling initial pages",
    "Testing SQL Injection...",
    "Testing XSS payloads...",
    "Testing Authentication flows...",
    "Analyzing ML Confidence Scores...",
    "Generating report..."
  ]
  return Promise.resolve({
    scanId,
    progress: pct,
    currentMessage: logs[Math.min(logs.length -1, Math.floor(step))],
    urlsScanned: Math.floor(pct / 5),
    vulnerabilitiesFound: Math.max(0, Math.floor((pct / 100) * 7 - Math.random()*1.5)),
    mlPredictions: {
      sqli: +(Math.random()*0.5 + 0.4).toFixed(2),
      xss: +(Math.random()*0.5 + 0.3).toFixed(2),
      idor: +(Math.random()*0.4 + 0.1).toFixed(2)
    }
  })
}

export function fetchResults() {
  return Promise.resolve(sample)
}

export function fetchVulnById(id) {
  const v = sample.vulnerabilities.find(x => x.id === id)
  return Promise.resolve(v)
}
