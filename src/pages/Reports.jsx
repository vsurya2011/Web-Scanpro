import React from 'react'
import { fetchResults } from '../api/mockApi'
import Card from '../components/Card'

function downloadJSON(data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = 'webscanpro-results.json'
  a.click()
}

export default function Reports(){
  const [data, setData] = React.useState(null)
  React.useEffect(()=> {
    fetchResults().then(setData)
  },[])

  if(!data) return <div className="card">Loading...</div>

  return (
    <div className="max-w-3xl mx-auto">
      <Card title="Download Reports">
        <div className="flex gap-3">
          <button onClick={()=> {
            // open small HTML preview
            const html = `<html><body><pre>${JSON.stringify(data,null,2)}</pre></body></html>`
            const w = window.open()
            w.document.write(html)
            w.document.close()
          }} className="px-4 py-2 border rounded">HTML Report</button>

          <button onClick={()=> downloadJSON(data)} className="px-4 py-2 border rounded">JSON Raw Data</button>

          <button onClick={()=>{
            // export PDF of JSON using html2pdf
            import('html2pdf.js').then(html2pdf => {
              html2pdf().from(`<pre>${JSON.stringify(data,null,2)}</pre>`).save('webscanpro-report.pdf')
            })
          }} className="px-4 py-2 bg-accent text-white rounded">PDF Report</button>
        </div>
      </Card>
    </div>
  )
}
