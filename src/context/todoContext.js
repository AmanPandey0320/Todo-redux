import React from "react";

export const TodoContext = React.createContext({
  todo: [],
  addTodo: (task) => {},
  done: (id) => {},
  undo: (id) => {},
});

export default (props) => {
  const [todo, setTodo] = React.useState([]);

  const addTodo = (task) => {
    const newTodo = {
      task,
      id: Date.now(),
      done: false,
    };
    setTodo([...todo, newTodo]);
  };
  const done = (id) => {
    const newTodos = todo.map((td) => {
      if (td.id === id) {
        return {
          ...td,
          done: true,
        };
      }
      return td;
    });
    setTodo([...newTodos]);
  };
  const undo = (id) => {
    const newTodos = todo.map((td) => {
      if (td.id === id) {
        return {
          ...td,
          done: true,
        };
      }
      return td;
    });

    setTodo([...newTodos]);
  };
  return (
    <TodoContext.Provider value={{ todo, addTodo, done, undo }}>
      {props.children}
    </TodoContext.Provider>
  );
};
