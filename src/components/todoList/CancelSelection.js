import React from "react";

class CancelSelection extends React.Component {
  handleClick = () => {
    this.props.cancelSelection();
  };
  render() {
    const display = this.props.isAnyBoxChecked() ? "d-inline-block" : "d-none";
    return (
      <button
        className={"btn btn-secondary " + display}
        onClick={this.handleClick}
      >
        {" "}
        Cancel Selection{" "}
      </button>
    );
  }
}

export default CancelSelection;
