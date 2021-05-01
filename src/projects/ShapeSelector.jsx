import React from "react";

class ShapeSelector extends React.Component {
  constructor() {
    super();
    this.state = {
      shape: "Circle"
    }
  }

  render() {
    return <div>
      <div style={{ marginBottom: "10px" }}>
        <button style={this.state.shape === "Circle" ? { background: "black", color: "white" } : null}
          onClick={() => { this.setState({ shape: "Circle" }) }} >Circle</button>
        <button style={this.state.shape === "Square" ? { background: "black", color: "white" } : null}
          onClick={() => this.setState({ shape: "Square" })} >Square</button>
        <button style={this.state.shape === "Triangle" ? { background: "black", color: "white" } : null}
          onClick={() => this.setState({ shape: "Triangle" })} >Triangle</button>
      </div>
      {this.state.shape === "Circle" && <div style={{ width: "90px", height: "90px", borderRadius: "50%", backgroundColor: "#3d3ddd" }} ></div>}
      {this.state.shape === "Square" && <div style={{ width: "90px", height: "90px", backgroundColor: "rgb(68 190 176)" }} ></div>}
      {this.state.shape === "Triangle" && <div style={{
        width: "0", height: "0", borderLeft: "45px solid transparent",
        borderRight: "45px solid transparent",
        borderBottom: "90px solid rgb(255, 85, 85)"
      }}
      ></div>}
    </div>
  }
}

export default ShapeSelector;