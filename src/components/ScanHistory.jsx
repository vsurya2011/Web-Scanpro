import React, { useEffect, useState } from 'react'
export default function ScanHistory(){
  const [history, setHistory] = useState([])
  useEffect(()=> {
    const h = JSON.parse(localStorage.getItem('scanHistory') || '[]')
    setHistory(h)
  }, [])
  if(!history.length) return <div className="p-3 text-sm text-gray-500">No saved scans yet.</div>
  return (
    <div className="space-y-2">
      {history.map(h=>(
        <div key={h.scanId} className="p-2 bg-white dark:bg-gray-800 rounded flex justify-between">
          <div>
            <div className="font-medium">{h.url}</div>
            <div className="text-xs text-gray-500">Scanned on: {new Date(h.timestamp).toLocaleString()}</div>
          </div>
          <div className="text-sm text-gray-500">{h.vulns} vulns • Score {h.riskScore || '-'}</div>
        </div>
      ))}
    </div>
  )
}
