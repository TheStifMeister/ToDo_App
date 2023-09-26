import React, { useState } from 'react'
import Sidebar from './Sidebar'
import TaskBar from './TaskBar'
import TaskDetail from './TaskDetail'

const App = () => {
  const [selectedTask, setSelectedTask] = useState(null)

  return (
    <div className="flex">
      <Sidebar />
      <TaskBar setSelectedTask={setSelectedTask} />
      <TaskDetail selectedTask={selectedTask} setSelectedTask={setSelectedTask} />
    </div>
  )
}

export default App