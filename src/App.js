// File: App.js
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { supabase } from './supabaseClient'
import Signup from './Signup'
import Login from './Login'
import TaskDashboard from './TaskDashboard'
import HomePage from './HomePage'
import NavBar from './NavBar'
import AboutPage from './AboutPage'
import ResourcesPage from './ResourcesPage'
import StreakTracker from './StreakTracker'
import ProgressBar from './ProgressBar'
import AffirmationBanner from './AffirmationBanner'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => listener?.subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

  if (loading) return <div className="p-6 text-center">Loading...</div>

  return (
    <Router>
      <NavBar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route
          path="/dashboard"
          element={user ? <TaskDashboard user={user} /> : <Login />}
        />
      </Routes>
    </Router>
  )
}

export default App
