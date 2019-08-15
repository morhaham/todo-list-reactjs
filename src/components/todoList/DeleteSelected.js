import React from "react";

class DeleteSelected extends React.Component {
  handleClick = () => {
    this.props.deleteSelected();
  };

  render() {
    const display = this.props.isAnyBoxChecked() ? "d-inline-block" : "d-none";
    return (
      <button
        className={"btn btn-danger " + display}
        onClick={this.handleClick}
      >
        Delete Selected
      </button>
    );
  }
}

export default DeleteSelected;
