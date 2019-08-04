import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";
import "./todo-app.css";

function TodoListAppView(props) {
  return (
    <div className="todoList">
      <TodoList />
    </div>
  );
}

export default TodoListAppView;
