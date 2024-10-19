import React, { useReducer, useState } from 'react';
import { initialState, reducer } from './Reducer';

const ToDoListReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      dispatch({ type: 'ADD_TASK', payload: task });
      setTask('');
    }
  };

  const removeTask = (index) => {
    dispatch({ type: 'REMOVE_TASK', payload: index });
  };

  return (
    <div class="container">
      <h1>Todo List Using Redux</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {state.tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Tasks: {state.taskCount}</p>
    </div>
  );
};

export default ToDoListReducer;
