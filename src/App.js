import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'
import Signup from './Signup'
import Login from './Login'
import TaskDashboard from './TaskDashboard'
import StreakTracker from './StreakTracker'


function App() {
  const [user, setUser] = useState(null)
  const [showLogin, setShowLogin] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
    })

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
      }
    )

    return () => listener?.subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

  if (user) {
    return (
      <div className="min-h-screen bg-purple-50">
        <div className="p-4 text-right">
          <span className="mr-4 text-sm text-gray-700">{user.email}</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded text-sm"
          >
            Log Out
          </button>
        </div>
        <TaskDashboard user={user} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-purple-100 flex flex-col justify-center items-center">
      {showLogin ? <Login /> : <Signup />}
      <button
        onClick={() => setShowLogin(!showLogin)}
        className="mt-4 text-sm text-purple-700 underline"
      >
        {showLogin ? 'Need to sign up?' : 'Already have an account? Log in'}
      </button>
    </div>
  )
}

export default App
