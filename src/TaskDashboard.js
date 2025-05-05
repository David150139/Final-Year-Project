import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'
import StreakTracker from './StreakTracker'
import ProgressBar from './ProgressBar'

export default function TaskDashboard({ user }) {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [priority, setPriority] = useState('Low')

  useEffect(() => {
    fetchTasks()
  }, [])

  async function fetchTasks() {
    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })

    if (error) console.error(error)
    else setTasks(data)
  }

  async function addTask() {
    if (!newTask) return
    const { error } = await supabase.from('tasks').insert([
      {
        user_id: user.id,
        content: newTask,
        is_done: false,
        priority: priority,
        date_key: new Date().toISOString().split('T')[0],
      },
    ])
    if (error) console.error(error)
    else {
      setNewTask('')
      setPriority('Low')
      fetchTasks()
    }
  }

  async function toggleTaskDone(id, currentStatus) {
    const { error } = await supabase
      .from('tasks')
      .update({ is_done: !currentStatus })
      .eq('id', id)
    if (error) console.error(error)
    else fetchTasks()
  }

  const getPriorityColor = (level) => {
    switch (level) {
      case 'High':
        return 'bg-red-200 text-red-800'
      case 'Medium':
        return 'bg-yellow-200 text-yellow-800'
      case 'Low':
        return 'bg-green-200 text-green-800'
      default:
        return 'bg-gray-200 text-gray-800'
    }
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">🧠 Your Routine</h2>

      <StreakTracker user={user} />
      <ProgressBar user={user} />

      <div className="flex mb-4 gap-2">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 border p-2 rounded text-sm"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border p-2 rounded text-sm"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <button
          onClick={addTask}
          className="bg-purple-600 text-white px-4 rounded text-sm hover:bg-purple-700"
        >
          Add
        </button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`p-3 mb-3 rounded shadow flex justify-between items-center transition-all ${
              task.is_done ? 'bg-green-100 text-gray-600' : 'bg-white'
            }`}
          >
            <div>
              <span
                className={`block text-base ${
                  task.is_done ? 'line-through italic' : 'font-medium'
                }`}
              >
                {task.is_done ? `✅ ${task.content}` : task.content}
              </span>
              <span
                className={`inline-block mt-1 px-2 py-0.5 rounded text-xs font-semibold ${getPriorityColor(
                  task.priority
                )}`}
              >
                {task.priority}
              </span>
            </div>
            <button
              onClick={() => toggleTaskDone(task.id, task.is_done)}
              className="text-xs text-purple-600 underline hover:text-purple-800"
            >
              {task.is_done ? 'Undo' : 'Done'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
