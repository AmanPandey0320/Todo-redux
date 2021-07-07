import ReactDOM from "react-dom";
import configureStore from "./custom-store/todoStore";
import TodoContextProvider from "./context/todoContext";
import "./styles.css";
import App from "./App";

configureStore();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>,
  rootElement
);
