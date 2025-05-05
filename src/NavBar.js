// File: NavBar.js
import { Link } from 'react-router-dom'

export default function NavBar({ user, onLogout }) {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <div className="space-x-4">
        <Link to="/" className="font-bold text-purple-700">ADHD Planner</Link>
        <Link to="/about" className="text-sm text-gray-700 hover:text-purple-700">About</Link>
        <Link to="/resources" className="text-sm text-gray-700 hover:text-purple-700">Resources</Link>
      </div>
      <div>
        {user ? (
          <>
            <span className="mr-4 text-sm text-gray-600">{user.email}</span>
            <button
              onClick={onLogout}
              className="bg-red-500 text-white px-3 py-1 rounded text-sm"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-3 text-sm text-purple-700 hover:underline">Login</Link>
            <Link to="/signup" className="text-sm text-purple-700 hover:underline">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  )
}
