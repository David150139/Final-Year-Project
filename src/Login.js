import { useState } from 'react'
import { supabase } from './supabaseClient'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) setMessage(error.message)
    else setMessage('Logged in successfully!')
  }

  return (
    <div className="p-4 max-w-md mx-auto mt-10 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Log In</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="border w-full p-2 mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="border w-full p-2 mb-2"
      />
      <button
        onClick={handleLogin}
        className="bg-purple-600 text-white w-full p-2 rounded"
      >
        Log In
      </button>
      {message && <p className="mt-3 text-center text-sm">{message}</p>}
    </div>
  )
}
