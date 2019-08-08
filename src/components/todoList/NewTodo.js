import React from "react";

class NewTodo extends React.Component {
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
      <div className="add-new-todo">
        <form onSubmit={this.handleSubmit} action="">
          todo name: <br />
          <input ref={this.inputTodoName} type="text" />
          <br />
          todo description: <br />
          <input ref={this.inputTodoDesc} type="text" />
          <input type="submit" value="add todo" />
        </form>
      </div>
    );
  }
}

export default NewTodo;
