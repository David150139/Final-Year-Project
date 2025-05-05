export default function HomePage() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-white text-gray-800">
        <header className="text-center py-16 px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-purple-700">
            ADHD Daily – A Gentle Routine Companion
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Built to help people with ADHD and anxiety manage daily tasks in a calm, focused space – no pressure, no clutter, just small wins.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="/signup" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
              Get Started
            </a>
            <a href="/login" className="border border-purple-600 text-purple-700 px-6 py-3 rounded-lg hover:bg-purple-100 transition">
              Log In
            </a>
          </div>
        </header>
  
        <section className="px-6 py-12 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Why This App?</h2>
            <p className="text-base leading-relaxed">
              ADHD can make routine feel overwhelming. Traditional productivity tools often cause more stress. This platform was developed as part of a university final year project to support emotional simplicity, routine anchoring, and confidence-building — one small task at a time.
            </p>
          </div>
        </section>
  
        <section className="px-6 py-12 bg-purple-50">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">✅ Streak Tracker</h3>
              <p>Build momentum through gentle, visual daily streaks – no guilt if you miss a day.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">📅 Daily Tasks</h3>
              <p>Plan and check off only what matters to you. Prioritise, don’t overload.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">🧠 ADHD Friendly Design</h3>
              <p>Minimal, warm UI with soft colours, rounded corners, and zero clutter distractions.</p>
            </div>
          </div>
        </section>
  
        <footer className="text-center py-8 text-sm text-gray-500">
          Developed for a university final year project | Free & open to all 💜
        </footer>
      </div>
    )
  }
  