import React from "react";
import ReactDOM from "react-dom";
import "./components/todos/TodoListAppView";
import TodoListAppView from "./components/todos/TodoListAppView";

function App(props) {
  return <TodoListAppView />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
