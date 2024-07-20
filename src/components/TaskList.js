import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';
import { List, ListItem, ListItemText, IconButton, Button, TextField, Checkbox, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import '../styles.css';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [editMode, setEditMode] = React.useState(null);
  const [newTask, setNewTask] = React.useState('');

  const handleEdit = (id, text) => {
    setEditMode(id);
    setNewTask(text);
  };

  const handleSave = (id) => {
    dispatch(editTask(id, { text: newTask }));
    setEditMode(null);
  };

  const handleToggle = (task) => {
    dispatch(editTask(task.id, { completed: !task.completed }));
  };

  const incompleteTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="task-list">
      <Typography variant="h6">Incomplete Tasks</Typography>
      <List>
        {incompleteTasks.map(task => (
          <ListItem key={task.id} button className="task">
            <Checkbox checked={task.completed} onChange={() => handleToggle(task)} />
            {editMode === task.id ? (
              <>
                <TextField
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  fullWidth
                />
                <Button onClick={() => handleSave(task.id)}>Save</Button>
              </>
            ) : (
              <>
                <ListItemText primary={task.text} />
                <IconButton onClick={() => handleEdit(task.id, task.text)}>
                  <EditIcon />
                </IconButton>
              </>
            )}
            <IconButton onClick={() => dispatch(deleteTask(task.id))}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      {completedTasks.length > 0 && (
        <>
          <Typography variant="h6">Completed Tasks</Typography>
          <List>
            {completedTasks.map(task => (
              <ListItem key={task.id} button className="task completed-task">
                <Checkbox checked={task.completed} onChange={() => handleToggle(task)} />
                {editMode === task.id ? (
                  <>
                    <TextField
                      value={newTask}
                      onChange={(e) => setNewTask(e.target.value)}
                      fullWidth
                    />
                    <Button onClick={() => handleSave(task.id)}>Save</Button>
                  </>
                ) : (
                  <>
                    <ListItemText primary={task.text} />
                    <IconButton onClick={() => handleEdit(task.id, task.text)}>
                      <EditIcon />
                    </IconButton>
                  </>
                )}
                <IconButton onClick={() => dispatch(deleteTask(task.id))}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </div>
  );
};

export default TaskList;
