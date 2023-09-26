import React, { useState } from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks, setSelectedTask, onSave, onDelete }) => {
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const handleTaskClick = (task) => {
    if (selectedTaskId !== task.id) {
      setSelectedTask(task)
      setSelectedTaskId(task.id)
    } else {
      setSelectedTask(null)
      setSelectedTaskId(null)
    }
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onClick={() => handleTaskClick(task)}
          onSave={onSave}
          onDelete={onDelete}
          isSelected={task.id === selectedTaskId}
        />
      ))}
    </div>
  )
}

export default TaskList