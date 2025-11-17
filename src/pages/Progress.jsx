import React, { useEffect, useState } from 'react'
import { getScanProgress, fetchResults } from '../api/mockApi'
import { useNavigate } from 'react-router-dom'

export default function Progress(){
  const [step, setStep] = useState(0)
  const [info, setInfo] = useState(null)
  const nav = useNavigate()

  useEffect(()=> {
    const cur = JSON.parse(sessionStorage.getItem('currentScan') || '{}')
    if(!cur.scanId) {
      nav('/start-scan')
      return
    }
    let t = 0
    const interval = setInterval(async ()=>{
      t += 1
      setStep(t)
      const p = await getScanProgress(cur.scanId, t)
      setInfo(p)
      if(p.progress >= 100) {
        clearInterval(interval)
        // small delay then go to results
        setTimeout(()=> {
          // update local history with fake results
          const history = JSON.parse(localStorage.getItem('scanHistory') || '[]')
          history[0].vulns = Math.floor(Math.random()*6)
          history[0].riskScore = Math.floor(Math.random()*40 + 40)
          history[0].timestamp = Date.now()
          localStorage.setItem('scanHistory', JSON.stringify(history))
          nav('/results')
        }, 800)
      }
    }, 900)
    return ()=> clearInterval(interval)
  }, [])

  if(!info) return <div className="card">Starting scan...</div>

  return (
    <div className="max-w-3xl mx-auto">
      <div className="card">
        <h2 className="text-xl font-semibold">Scanning Dashboard</h2>
        <p className="mt-2 text-sm text-gray-500">Current: {info.currentMessage}</p>
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded h-4">
            <div className="bg-accent h-4 rounded" style={{width: `${info.progress}%`}}></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <div>Progress: {info.progress}%</div>
            <div>URLs: {info.urlsScanned}</div>
            <div>Vulns: {info.vulnerabilitiesFound}</div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold">Realtime Logs</h3>
          <pre className="mt-2">{info.currentMessage}</pre>
        </div>

        <div className="mt-4 flex gap-2">
          <button className="px-3 py-1 border rounded">Pause</button>
          <button className="px-3 py-1 border rounded">Stop</button>
        </div>
      </div>
    </div>
  )
}
