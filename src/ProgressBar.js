import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'
import dayjs from 'dayjs'

export default function ProgressBar({ user }) {
  const [doneCount, setDoneCount] = useState(0)
  const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    if (user) {
      getTodayProgress()
    }
  }, [user])

  async function getTodayProgress() {
    const today = dayjs().format('YYYY-MM-DD')

    const { data, error } = await supabase
      .from('tasks')
      .select('is_done, date_key, user_id')
      .eq('user_id', user.id)
      .eq('date_key', today)

    // Debugging output
    console.log('TODAY:', today)
    console.log('RESULTS:', data)

    if (error) {
      console.error('ProgressBar error:', error)
      return
    }

    const total = data.length
    const done = data.filter((task) => task.is_done).length

    setTotalCount(total)
    setDoneCount(done)
  }

  const percent = totalCount === 0 ? 0 : Math.round((doneCount / totalCount) * 100)

  return (
    <div className="mb-6">
      <p className="text-sm text-center mb-1">
        Today's Progress:{' '}
        <span className="font-semibold">{doneCount}</span> / {totalCount} tasks
      </p>
      <div className="w-full bg-gray-200 rounded h-3">
        <div
          className="bg-purple-600 h-3 rounded transition-all duration-300"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  )
}
