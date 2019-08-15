import React from "react";

class Delete extends React.Component {
  handleClick = () => {
    this.props.displayCheckboxes();
    this.props.toggleDelBtn();
  };
  render() {
    const display = this.props.isTodoListEmpty() ? "d-none" : "d-inline-block";
    return (
      <button
        className={"btn btn-warning " + display}
        onClick={this.handleClick}
      >
        Delete
      </button>
    );
  }
}

export default Delete;
