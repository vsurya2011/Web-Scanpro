import React from 'react'
export default function Button({ children, className='', ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-md text-white bg-accent hover:opacity-90 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
