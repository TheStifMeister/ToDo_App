/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button, Checkbox, Icon, Classes, Dialog, TextArea, InputGroup } from '@blueprintjs/core';

const TaskItem = ({ task, onClick, onDelete, onSave, isSelected }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editedTask, setEditedTask] = useState(task)

  const handleEditClick = () => {
    setIsDialogOpen(true)
    setEditedTask(task)
  }
  const handleDeleteClick = () => {
    onDelete(task.id)
    setIsDialogOpen(false)
  }

  const handleSaveClick = () => {
    onSave(editedTask)
    setIsDialogOpen(false)
  }
  
  return (
    <div
      className={`flex items-center justify-between p-2 bg-white rounded ${isSelected ? 'bg-blue-100' : ''}`}
      onClick={() => onClick(task)}
    >
      <div className="flex items-center">
        <Checkbox className={`mr-2 ${isSelected ? 'bp3-intent-primary' : ''}`} checked={isSelected} onClick={() => onClick(task)}/>
        <div>
          <div className="font-bold">{task.title}</div>
          <div className="text-gray-600">{task.description}</div>
        </div>
      </div>
      <div>
        <Button minimal icon={<Icon icon="edit" />} className="mr-2" onClick={handleEditClick}/>
        <Button minimal icon={<Icon icon="trash" />} onClick={handleDeleteClick}/>
      </div>

      <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} className={Classes.DARK}>
        <div className={Classes.DIALOG_HEADER}>Modifica attività</div>
        <div className={Classes.DIALOG_BODY}>
          <InputGroup value={editedTask.title} onChange={(e) => setEditedTask({...editedTask, title: e.target.value})} />
          <TextArea value={editedTask.description} onChange={(e) => setEditedTask ({...editedTask, description: e.target.value})} />
        </div>
        <div className={Classes.DIALOG_FOOTER}>
          <div className={Classes.DIALOG_FOOTER_ACTIONS}>
            <Button intent='primary' onClick={handleSaveClick}>
              Salva
            </Button>
            <Button onClick={handleDeleteClick}>
              Elimina
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default TaskItem;