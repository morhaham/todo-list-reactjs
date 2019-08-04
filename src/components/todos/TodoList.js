import React from "react";
import { render } from "react-dom";
import Todo from "./TodoView";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 0,
          name: "first todo",
          completed: false
        },
        {
          id: 1,
          name: "second todo",
          completed: false
        }
      ]
    };
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return <Todo key={todo.id} name={todo.name} />;
    });

    return <ul>{todos}</ul>;
  }
}

export default TodoList;
