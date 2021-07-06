import ReactDOM from "react-dom";
import configureStore from "./custom-store/todoStore";
import "./styles.css";
import App from "./App";

configureStore();

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
