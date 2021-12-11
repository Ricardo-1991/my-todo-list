import { useState } from 'react'
import '../Main/StyleMain.css'

interface Tasks {
  id: number
  title: string
  isComplete: boolean
}

export function Main() {
  const [tasks, setTasks] = useState<Tasks[]>([])
  const [newTitle, setNewTitle] = useState('')

  function handleNewTask() {
    if (!newTitle) return

    const newTask = {
      id: Math.random(),
      title: newTitle,
      isComplete: false
    }

    setTasks(oldState => [...oldState, newTask])
  }

  return (
    <main>
      <div className="toDoMain">
        <form action="">
          <input
            type="text"
            name="text"
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
            placeholder="Insira uma atividade"
          />
        </form>
        <button onClick={handleNewTask}>Listar Atividade</button>
      </div>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <div>
              <p>{task.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
