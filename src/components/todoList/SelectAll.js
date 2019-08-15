import React from "react";

class SelectAll extends React.Component {
  handleClick = () => {
    this.props.selectAll();
  };
  render() {
    const display =
      this.props.isDelBtnActive && !this.props.isTodoListEmpty()
        ? "d-inline-block"
        : "d-none";
    return (
      <button className={"btn btn-dark " + display} onClick={this.handleClick}>
        Select All
      </button>
    );
  }
}

export default SelectAll;
