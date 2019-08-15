import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  const todos = props.todos.map(todo => {
    return (
      <Todo
        key={todo.id}
        todoId={todo.id}
        todoName={todo.name}
        todoDesc={todo.desc}
        completed={todo.completed}
        deleteTodo={props.deleteTodo}
        markTodo={props.markTodo}
        checkbox={todo.checkbox}
        toggleCheckbox={props.toggleCheckbox}
      />
    );
  });

  return (
    <ul className="list-group d-inline-block" id="todo-list">
      {todos}
    </ul>
  );
}

export default TodoList;
