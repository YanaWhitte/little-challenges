import React from "react";

class BasicToggle extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "inline-block",
      plusMinus: "-"
    }
  }

  render() {
    return <div>
      <h1>Toggle</h1>
      <div
        style={{ cursor: "pointer", marginBottom: "5px" }}
        onClick={() => {
          if (this.state.display === "inline-block") {
            this.setState({ display: "none", plusMinus: "+" });
          } else {
            this.setState({ display: "inline-block", plusMinus: "-" });
          }
        }}
      >Click me
        <span style={{ marginLeft: "5px", fontSize: "20px" }}>{this.state.plusMinus}</span>
      </div>
      <div style={{
        display: `${this.state.display}`,
        padding: "20px",
        background: "rgb(255 85 85)",
        color: "#fff",
        borderRadius: "5px"
      }}>
        TARGET</div>
    </div>
  }
}

export default BasicToggle;