import React from 'react'

export default function Card({ title, children, className='' }) {
  return (
    <div className={`card ${className}`}>
      {title && <h3 className="font-semibold mb-2">{title}</h3>}
      <div>{children}</div>
    </div>
  )
}
