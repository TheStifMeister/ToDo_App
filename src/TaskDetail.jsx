/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react'
import { FormGroup, InputGroup, HTMLSelect, Button } from '@blueprintjs/core'
import { AuthContext } from './AuthContext'

const TaskDetail = ({ selectedTask, setSelectedTask }) => {
  const { user } = useContext(AuthContext)
  const [isEditing, setIsEditing] = useState(false)
  const [editedTask, setEditedTask] = useState(selectedTask)

  useEffect(() => {
    setEditedTask(selectedTask)
  }, [selectedTask])

  const handleStatusChange = (status) => {
    setEditedTask({ ...editedTask, status })
  }

  const handleSaveClick = () => {
    setIsEditing(false)
    setSelectedTask(editedTask)
  }

  return (
    <div className="w-4/5 h-screen bg-white p-4">
      { user && selectedTask ? (
        <>
          <div className="font-bold text-xl">
            {isEditing ? (
              <InputGroup
                value={editedTask.title}
                onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })
                }
              />
            ) : (selectedTask.title)}
          </div>
          <div className="text-gray-600">
            {isEditing ? (
              <FormGroup label="Descrizione">
                <InputGroup
                  value={editedTask.description}
                  onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value, })
                  }
                />
              </FormGroup>
            ) : (selectedTask.description)}
          </div>
          <div className="mt-4">
            {isEditing ? (
              <>
                <FormGroup label="Stato">
                  <HTMLSelect
                    value={editedTask.status}
                    onChange={(e) => handleStatusChange(e.target.value)}
                  >
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </HTMLSelect>
                </FormGroup>
                <Button intent="success" onClick={handleSaveClick}>Salva</Button>
              </>
            ) : (
              <div>Status: {selectedTask.status}</div>
            )}
          </div>
        </>
      ) : (
        <div className="text-gray-600 italic">
          Seleziona un'attività per visualizzare i dettagli.
        </div>
      )}
    </div>
  )
}

export default TaskDetail;