export const initialState = {
    tasks: [],
    taskCount: 0,
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
          taskCount: state.taskCount + 1,
        };
      case 'REMOVE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter((task, index) => index !== action.payload),
          taskCount: state.taskCount - 1,
        };
      default:
        return state;
    }
  };
  