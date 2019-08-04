import React from "react";

function Todo(props) {
  return (
    <li className="todo">
      <h2>{props.name}</h2>
    </li>
  );
}

export default Todo;
