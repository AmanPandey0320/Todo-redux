import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    ADD_TODO: (curState, task) => {
      const { todo } = curState;
      const newTodo = {
        task,
        id: Date.now(),
        done: false
      };
      return {
        todo: [...todo, newTodo]
      };
    },
    DONE_TODO: (state, id) => {
      const { todo } = state;
      const newTodo = todo.map((td) => {
        if (td.id === id) {
          return {
            ...td,
            done: true
          };
        } else {
          return td;
        }
      });
      return {
        todo: newTodo
      };
    },
    UNDONE_TODO: (state, id) => {
      const { todo } = state;
      const newTodo = todo.map((td) => {
        if (td.id === id) {
          return {
            ...td,
            done: false
          };
        } else {
          return td;
        }
      });
      return {
        todo: newTodo
      };
    }
  };
  initStore(actions, {
    todo: []
  });
};

export default configureStore;
