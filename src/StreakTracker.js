import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'
import dayjs from 'dayjs'

export default function StreakTracker({ user }) {
  const [streak, setStreak] = useState(0)

  useEffect(() => {
    getStreak()
  }, [])

  async function getStreak() {
    const { data, error } = await supabase
      .from('tasks')
      .select('date_key')
      .eq('user_id', user.id)
      .eq('is_done', true)

    if (error) {
      console.error(error)
      return
    }

    // Get unique completed dates
    const dates = Array.from(
      new Set(data.map((task) => dayjs(task.date_key).format('YYYY-MM-DD')))
    ).sort((a, b) => (dayjs(a).isBefore(b) ? 1 : -1)) // latest first

    let count = 0
    let currentDate = dayjs()

    for (let i = 0; i < dates.length; i++) {
      if (dayjs(dates[i]).isSame(currentDate, 'day')) {
        count++
        currentDate = currentDate.subtract(1, 'day')
      } else {
        break
      }
    }

    setStreak(count)
  }

  return (
    <div className="text-center mb-6">
      <p className="text-lg font-semibold">
        🔥 Daily Streak: <span className="text-purple-700">{streak} day{streak === 1 ? '' : 's'}</span>
      </p>
    </div>
  )
}
