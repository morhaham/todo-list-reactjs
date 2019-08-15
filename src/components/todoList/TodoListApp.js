import React from "react";
import shortid from "shortid";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import Delete from "./Delete";
import SelectAll from "./SelectAll";
import CancelSelection from "./CancelSelection";
import DeleteSelected from "./DeleteSelected";

class TodoListApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: shortid.generate(),
          name: "first todo",
          desc: "need to be there at 14:20",
          completed: false,
          checkbox: {
            toDisplay: false,
            isChecked: false
          }
        },
        {
          id: shortid.generate(),
          name: "second todo",
          desc: "need to be done at 15:00",
          completed: false,
          checkbox: {
            toDisplay: false,
            isChecked: false
          }
        }
      ],
      isDelBtnActive: false
    };
  }

  addTodo = (name, desc) => {
    const todos = this.state.todos.slice();
    this.cancelSelection();
    this.setState({
      todos: todos.concat([
        {
          id: shortid.generate(),
          name: name,
          desc: desc,
          completed: false,
          checkbox: {
            toDisplay: false,
            isChecked: false
          }
        }
      ]),
      isDelBtnActive: false
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
      }
    });
  };

  toggleCheckbox = todoId => {
    const todos = this.state.todos;
    for (let i = 0; i < todos.length; i++) {
      const todo = todos[i];
      if (todo.id === todoId) {
        todo.checkbox.isChecked = !todo.checkbox.isChecked;
      }
    }
    this.setState({
      todos: todos
    });
  };

  displayCheckboxes = () => {
    const todos = this.state.todos;
    todos.forEach(todo => {
      todo.checkbox.toDisplay = !todo.checkbox.toDisplay;
    });
    this.setState({
      todos: todos
    });
  };

  isAnyBoxChecked = () => {
    const todos = this.state.todos;
    for (let i = 0; i < todos.length; i++) {
      const todo = todos[i];
      if (todo.checkbox.isChecked) {
        return true;
      }
    }
    return false;
  };

  cancelSelection = () => {
    const todos = this.state.todos;
    todos.forEach(todo => {
      todo.checkbox.isChecked = false;
    });
    this.reset();
  };

  selectAll = () => {
    const todos = this.state.todos;
    todos.forEach(todo => {
      todo.checkbox.isChecked = true;
    });
    this.setState({
      todos: todos
    });
  };

  deleteSelected = () => {
    const todos = this.state.todos;
    for (let i = 0; i < todos.length; i++) {
      const todo = todos[i];
      if (todo.checkbox.isChecked) {
        todos.splice(i, 1);
        --i;
      }
    }
    this.reset();
  };

  reset = () => {
    const todos = this.state.todos;
    todos.forEach(todo => {
      todo.checkbox.toDisplay = false;
      todo.checkbox.isChecked = false;
    });
    this.setState({
      todos: todos,
      isDelBtnActive: false
    });
  };

  toggleDelBtn = () => {
    this.setState({
      isDelBtnActive: !this.state.isDelBtnActive
    });
  };

  isTodoListEmpty = () => {
    if (this.state.todos && this.state.todos.length) {
      return false;
    }
    return true;
  };

  render() {
    return (
      <div id="todo-list-app">
        <h1>Todo List App</h1>
        <div id="control-btns" className="btn-group btn-group-md">
          <Delete
            displayCheckboxes={this.displayCheckboxes}
            toggleDelBtn={this.toggleDelBtn}
            isTodoListEmpty={this.isTodoListEmpty}
          />
          <SelectAll
            isDelBtnActive={this.state.isDelBtnActive}
            selectAll={this.selectAll}
            isTodoListEmpty={this.isTodoListEmpty}
          />
          <CancelSelection
            isAnyBoxChecked={this.isAnyBoxChecked}
            cancelSelection={this.cancelSelection}
          />
          <DeleteSelected
            deleteSelected={this.deleteSelected}
            isAnyBoxChecked={this.isAnyBoxChecked}
          />
        </div>
        <TodoList
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          markTodo={this.markTodo}
          toggleCheckbox={this.toggleCheckbox}
        />
        <AddTodo onSubmit={this.addTodo} />
      </div>
    );
  }
}

export default TodoListApp;
