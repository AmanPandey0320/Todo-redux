const initState = [];

const useReducer = (state = initState, action) => {
  if (action.type === "ADD_TODO") {
    const todo = {
      id: Date.now(),
      task: action.data,
      done: false
    };
    return [...state, todo];
  } else if (action.type === "DONE_TODO") {
    return state.map((todo) => {
      if (todo.id === action.id) {
        todo.done = true;
      }
      return todo;
    });
  } else if (action.type === "UNDONE_TODO") {
    return state.map((todo) => {
      if (todo.id === action.id) {
        todo.done = false;
      }
      return todo;
    });
  }
  return state;
};

export default useReducer;
