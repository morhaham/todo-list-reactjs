import React from "react";
import shortid from "shortid";
import TodoList from "./TodoList";
import NewTodo from "./NewTodo";
import "./todo-app.css";

class TodoListApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: shortid.generate(),
          name: "first todo",
          desc: "need to be there at 14:20",
          completed: false
        },
        {
          id: shortid.generate(),
          name: "second todo",
          desc: "need to be done at 15:00",
          completed: false
        }
      ]
    };
  }

  addTodo = (name, desc) => {
    const todos = this.state.todos.slice();
    this.setState({
      todos: todos.concat([
        {
          id: shortid.generate(),
          name: name,
          desc: desc,
          completed: false
        }
      ])
    });
  };

  deleteTodo = todoId => {
    let todos = this.state.todos.slice();
    todos.forEach((todo, i) => {
      if (todo.id === todoId) {
        todos.splice(i, 1);
        this.setState({
          todos: todos
        });
      }
    });
  };

  markTodo = todoId => {
    let todos = this.state.todos.slice();
    todos.forEach((todo, i) => {
      if (todo.id === todoId) {
        todo.completed = true;
        this.setState({
          todos: todos
        });
        console.log(todo);
      }
    });
  };

  render() {
    return (
      <div id="todo-list">
        <h1>Todo List App</h1>
        <TodoList
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          markTodo={this.markTodo}
        />
        <NewTodo onSubmit={this.addTodo} />
      </div>
    );
  }
}

export default TodoListApp;
