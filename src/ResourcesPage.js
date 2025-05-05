// File: ResourcesPage.js
export default function ResourcesPage() {
    return (
      <div className="min-h-screen bg-purple-50 p-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
            🧰 ADHD Support Resources
          </h1>
          <p className="text-center text-gray-600 mb-8">
            A few calming, helpful tools and reads for ADHD and anxiety support.
          </p>
  
          <ul className="space-y-6">
            <li className="bg-white p-4 rounded-md shadow">
              <h2 className="text-xl font-semibold mb-1">📘 Understanding ADHD</h2>
              <p className="text-sm text-gray-700">
                A short intro from ADDitude Magazine on how ADHD affects the brain. Helpful for students, parents and friends.
              </p>
              <a
                href="https://www.additudemag.com/what-is-adhd-symptoms-causes-treatments/"
                className="text-purple-600 text-sm underline mt-2 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Article
              </a>
            </li>
  
            <li className="bg-white p-4 rounded-md shadow">
              <h2 className="text-xl font-semibold mb-1">🧘‍♀️ Guided Breathing Exercise</h2>
              <p className="text-sm text-gray-700">
                A 3-minute breathing video for grounding. Great before tackling your tasks.
              </p>
              <a
                href="https://www.youtube.com/watch?v=SEfs5TJZ6Nk"
                className="text-purple-600 text-sm underline mt-2 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch on YouTube
              </a>
            </li>
  
            <li className="bg-white p-4 rounded-md shadow">
              <h2 className="text-xl font-semibold mb-1">📋 ADHD Planner Templates</h2>
              <p className="text-sm text-gray-700">
                Download printable or digital planners made for ADHD minds – colourful, forgiving, flexible.
              </p>
              <a
                href="https://www.etsy.com/uk/market/adhd_planner"
                className="text-purple-600 text-sm underline mt-2 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Templates
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
  