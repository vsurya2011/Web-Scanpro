import React, { useState } from 'react'
import { startScan } from '../api/mockApi'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

export default function StartScan(){
  const [url, setUrl] = useState('')
  const [type, setType] = useState('Full Scan')
  const [enableML, setEnableML] = useState(true)
  const [model, setModel] = useState('v1')
  const nav = useNavigate()

  async function handleStart(){
    if(!url) return alert('Enter URL')
    const resp = await startScan({ url, type, enableML, model })
    // save selected settings to sessionStorage for progress page
    sessionStorage.setItem('currentScan', JSON.stringify({ scanId: resp.scanId, url, type }))
    nav('/progress')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="card">
        <h2 className="text-xl font-semibold">Start New Scan</h2>
        <div className="mt-3 space-y-3">
          <input className="w-full p-2 border rounded" placeholder="https://example.com" value={url} onChange={e=>setUrl(e.target.value)} />
          <select className="w-full p-2 border rounded" value={type} onChange={e=>setType(e.target.value)}>
            <option>Full Scan</option>
            <option>SQLi Only</option>
            <option>XSS Only</option>
            <option>Authentication Test</option>
            <option>IDOR Test</option>
          </select>
          <div className="flex items-center space-x-3">
            <label className="flex items-center space-x-2">
              <input type="checkbox" checked={enableML} onChange={e=>setEnableML(e.target.checked)} />
              <span>Enable ML-based detection</span>
            </label>
            <select className="p-2 border rounded" value={model} onChange={e=>setModel(e.target.value)}>
              <option value="v1">v1</option>
              <option value="v2">v2</option>
              <option value="custom">Custom</option>
            </select>
          </div>
          <div className="flex gap-2 mt-2">
            <Button onClick={handleStart}>Start Scan</Button>
            <button className="px-4 py-2 border rounded" onClick={()=>{ setUrl('https://example.com') }}>Fill Example</button>
          </div>
        </div>
      </div>
    </div>
  )
}
