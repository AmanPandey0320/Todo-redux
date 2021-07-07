import { Button, TextField } from "@material-ui/core";
import { useState, Fragment } from "react";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import useStyles from "../UI/todo.styles";
import useStore from "../custom-store/store";
const Todo = (props) => {
  const [task, setTask] = useState("");
  const classes = useStyles();
  const [store, dispatch] = useStore();

  const handleAdd = (event) => {
    dispatch("ADD_TODO", task);
    setTask("");
  };
  const handleTodo = (done, id) => (e) => {
    const type = done ? "UNDONE_TODO" : "DONE_TODO";
    dispatch(type, id);
  };
  return (
    <Fragment>
      <span>With Custom store</span>
      <div className={classes.addtask}>
        <TextField
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Type a task"
        />
        <Button onClick={handleAdd} color="primary" variant="contained">
          Add
        </Button>
      </div>
      <div className={classes.list}>
        {store.todo.map((todo, index) => {
          return (
            <div className={classes.listItem} key={todo.id}>
              <span>
                {index + 1}. {todo.task}
              </span>
              <span>
                <Button
                  onClick={handleTodo(todo.done, todo.id)}
                  color={todo.done ? "primary" : "secondary"}
                  variant="outlined"
                >
                  {todo.done ? (
                    <>
                      <FaRegThumbsUp />
                      &nbsp;undo
                    </>
                  ) : (
                    <>
                      <FaRegThumbsDown />
                      &nbsp;Done
                    </>
                  )}
                </Button>
              </span>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Todo;
