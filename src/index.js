import React from "react";
import ReactDOM from "react-dom";
import TodoListApp from "./components/todoList/TodoListApp";

function App(props) {
  return <TodoListApp />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
