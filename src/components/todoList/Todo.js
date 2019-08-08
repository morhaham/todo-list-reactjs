import React from "react";
function Todo(props) {
  const completed = props.completed ? "completed" : "";
  return (
    <li className={"todo " + completed}>
      <h2 className="todo-name">{props.todoName}</h2>
      <p className="todo-desc">{props.todoDesc}</p>
      <button
        onClick={() => props.deleteTodo(props.todoId)}
        className="delete-todo"
      >
        delete
      </button>
      <button
        onClick={() => props.markTodo(props.todoId)}
        className="mark-done"
      >
        mark as done
      </button>
    </li>
  );
}

export default Todo;
