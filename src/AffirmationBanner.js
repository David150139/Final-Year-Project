// File: AffirmationBanner.js
import { useEffect, useState } from 'react'

const affirmations = [
  "You're doing great 💜",
  "Small steps count 👣",
  "You're not behind — you're on your own timeline ✨",
  "Focus on progress, not perfection 🌱",
  "One task at a time. You’ve got this 💪"
]

export default function AffirmationBanner() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const index = Math.floor(Math.random() * affirmations.length)
    setMessage(affirmations[index])
  }, [])

  return (
    <div className="bg-purple-100 border border-purple-300 text-purple-800 text-sm text-center py-2 px-4 rounded mb-6">
      {message}
    </div>
  )
}
