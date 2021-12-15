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

  function handleCheck(id: number) {
    const filteredTask = tasks.map(tasks =>
      tasks.id === id
        ? {
            ...tasks,
            isComplete: !tasks.isComplete
          }
        : tasks
    )

    setTasks(filteredTask)
  }

  function handleTaskRemove(id: number) {
    const filteredTask = tasks.filter(tasks => tasks.id !== id)
    setTasks(filteredTask)
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

      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id}>
            <div>
              <p className={task.isComplete ? 'isComplete' : ''}>
                {task.title}
              </p>
              <button type="submit" onClick={() => handleCheck(task.id)}>
                Checked
              </button>
              <button type="submit" onClick={() => handleTaskRemove(task.id)}>
                Remover Atividade
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
