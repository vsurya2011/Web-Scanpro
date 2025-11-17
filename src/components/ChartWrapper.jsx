import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

export function VulnerabilitiesBar({ data = [] }) {
  return (
    <div style={{ width: '100%', height: 250 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="type" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="var(--accent-color)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function SeverityPie({ data = {} }) {
  const colors = ['#ef4444','#f59e0b','#10b981']
  const items = Object.keys(data).map((k,i)=>({name:k,value:data[k], color: colors[i] || '#60a5fa'}))
  return (
    <div style={{ width: '100%', height: 220 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={items} dataKey="value" nameKey="name" innerRadius={40} outerRadius={80}>
            {items.map((entry, idx) => <Cell key={idx} fill={entry.color} />)}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
