import { useState } from 'react'
import { supabase } from './supabaseClient'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })
    if (error) setMessage(error.message)
    else setMessage('Check your email to confirm sign-up!')
  }

  return (
    <div className="p-4 max-w-md mx-auto mt-10 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Sign Up</h2>
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
        onClick={handleSignup}
        className="bg-purple-600 text-white w-full p-2 rounded"
      >
        Sign Up
      </button>
      {message && <p className="mt-3 text-center text-sm">{message}</p>}
    </div>
  )
}
