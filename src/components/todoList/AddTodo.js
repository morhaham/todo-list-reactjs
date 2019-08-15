import React from "react";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.inputTodoName = React.createRef();
    this.inputTodoDesc = React.createRef();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(
      this.inputTodoName.current.value,
      this.inputTodoDesc.current.value
    );
    e.target.reset();
  };

  render() {
    return (
      <form
        className="d-inline-block"
        id="form-add-todo"
        onSubmit={this.handleSubmit}
        action=""
      >
        <h2>Add New Todo</h2>
        <div className="form-group">
          <label for="todo-name">Todo Name</label>
          <input
            className="form-control"
            ref={this.inputTodoName}
            type="text"
          />
          <br />
        </div>
        <div className="form-group">
          todo description: <br />
          <input
            className="form-control"
            ref={this.inputTodoDesc}
            type="text"
          />
        </div>
        <input className="btn btn-primary" type="submit" value="Add Todo" />
      </form>
    );
  }
}

export default AddTodo;
