import React from "react";
function Todo(props) {
  const classCompleted = props.completed ? "completed" : "";
  const toDisplayCheckbox = props.checkbox.toDisplay
    ? "d-inline-block"
    : "d-none";
  return (
    <li className="todo list-group-item">
      <div className={"todo-content " + classCompleted}>
        <input
          type="checkbox"
          className={"" + toDisplayCheckbox}
          checked={props.checkbox.isChecked}
          onChange={() => props.toggleCheckbox(props.todoId)}
        />
        <h2 className="todo-name">{props.todoName}</h2>
        <p className="todo-desc">{props.todoDesc}</p>
      </div>
      <div className="btn-group">
        <button
          onClick={() => props.deleteTodo(props.todoId)}
          className="btn btn-danger"
        >
          Delete
        </button>
        <button
          onClick={() => props.markTodo(props.todoId)}
          className="btn btn-success"
        >
          Mark Completed
        </button>
      </div>
    </li>
  );
}

export default Todo;
