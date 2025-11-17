import React from 'react'

export default function SkeletonLoader({ rows=4 }) {
  return (
    <div className="space-y-2">
      {Array.from({length: rows}).map((_,i)=>(
        <div key={i} className="animate-pulse bg-gray-200 dark:bg-gray-700 h-10 rounded"></div>
      ))}
    </div>
  )
}
