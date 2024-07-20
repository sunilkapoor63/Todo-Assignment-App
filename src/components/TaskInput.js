import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import { TextField, Button } from '@material-ui/core';
import '../styles.css';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <TextField
        label="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
      />
      <Button type="submit" className="add-task-button">Add Task</Button>
    </form>
  );
};

export default TaskInput;
