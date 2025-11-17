import React from 'react'
import { Link } from 'react-router-dom'

export default function Table({ data = [] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left">
        <thead>
          <tr className="text-sm text-gray-500">
            <th className="p-2">Type</th>
            <th className="p-2">URL</th>
            <th className="p-2">Param</th>
            <th className="p-2">ML</th>
            <th className="p-2">Severity</th>
            <th className="p-2">Status</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(v => (
            <tr key={v.id} className="border-t">
              <td className="p-2">{v.type}</td>
              <td className="p-2">{v.url}</td>
              <td className="p-2">{v.parameter}</td>
              <td className="p-2">{v.mlConfidence}</td>
              <td className="p-2">{v.severity}</td>
              <td className="p-2">{v.status}</td>
              <td className="p-2"><Link className="text-blue-600" to={`/vuln/${v.id}`}>View</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
