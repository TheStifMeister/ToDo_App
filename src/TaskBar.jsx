import React, { useState } from 'react'
import { Button, InputGroup } from '@blueprintjs/core'
import TaskList from './TaskList'

const TaskBar = ({ setSelectedTask }) => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Description for Task 1' },
    { id: 2, title: 'Task 2', description: 'Description for Task 2' },
  ])

  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
  })

  const handleAddTask = () => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }])
    setNewTask({ title: '', description: '' })
  }

  const handleSaveClick = (editedTask) => {
    const taskIndex = tasks.findIndex((task) => task.id === editedTask.id)
    if (taskIndex !== -1) {
      const updatedTasks = [...tasks]
      updatedTasks[taskIndex] = editedTask
      setTasks(updatedTasks)
    }
  }

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(updatedTasks)
  }

  return (
    <div className="w-4/5 h-screen bg-gray-200 p-4">
      <div className="flex justify-between items-center mb-4">
        <InputGroup
          type="text"
          placeholder="Task title"
          className="w-4/5"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <Button onClick={handleAddTask} className="p-2 bg-blue-500 text-white rounded">
          Add Task
        </Button>
      </div>
      <div className="mt-4">
        <TaskList tasks={tasks} setSelectedTask={setSelectedTask} onSave={handleSaveClick} onDelete={handleDeleteTask}/>
      </div>
    </div>
  )
}

export default TaskBar