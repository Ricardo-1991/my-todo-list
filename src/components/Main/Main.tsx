import { useState } from 'react'
import '../Main/StyleMain.css'

import { BsTrash } from 'react-icons/bs'

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
    setNewTitle('')
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
            className="input-class"
            placeholder="Adicione uma atividade..."
          />
        </form>
        <button onClick={handleNewTask}>+</button>
      </div>

      <ul className="list-container">
        {tasks.map(task => (
          <li key={task.id}>
            <div className="task-list">
              <div className="task-checkBox">
                <input type="checkbox" />
                <label
                  className={task.isComplete ? 'task-checked' : ''}
                  onClick={() => handleCheck(task.id)}
                ></label>
                <p className={task.isComplete ? 'isComplete' : ''}>
                  {task.title}
                </p>
              </div>
              <button type="submit" onClick={() => handleTaskRemove(task.id)}>
                <BsTrash size={23} color="red" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
