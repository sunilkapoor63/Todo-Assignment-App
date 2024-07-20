export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';

export const addTask = (text) => ({
  type: ADD_TASK,
  payload: { id: Date.now(), text, completed: false },
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const editTask = (id, updates) => ({
  type: EDIT_TASK,
  payload: { id, updates },
});
