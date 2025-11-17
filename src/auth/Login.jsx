import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const nav = useNavigate()

  function handleLogin(e){
    e.preventDefault()
    // simple UI-only login: save user and redirect
    localStorage.setItem('ws_user', JSON.stringify({ email }))
    nav('/')
  }

  return (
    <div className="max-w-md mx-auto mt-12 card">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="space-y-3">
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border rounded" />
        <input value={pass} onChange={e=>setPass(e.target.value)} placeholder="Password" type="password" className="w-full p-2 border rounded" />
        <div className="flex items-center justify-between">
          <button className="px-4 py-2 bg-accent text-white rounded">Login</button>
          <button type="button" className="text-sm text-gray-500">Forgot?</button>
        </div>
      </form>
    </div>
  )
}
