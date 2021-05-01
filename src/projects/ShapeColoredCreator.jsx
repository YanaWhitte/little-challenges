import React from "react";

class ShapeColoredCreator extends React.Component {
  constructor() {
    super();
    this.state = {
      shape: [],
      background: "#ffa500"
    };
  }

  render() {
    return (
      <div>
        <div style={{ marginBottom: "10px" }}>
          <button
            onClick={() =>
              this.setState({ shape: [...this.state.shape, { type: "Circle", color: this.state.background }] })
            }
          >
            Circle
          </button>
          <button
            onClick={() =>
              this.setState({ shape: [...this.state.shape, { type: "Square", color: this.state.background }] })
            }
          >
            Square
          </button>
          <button
            onClick={() =>
              this.setState({ shape: [...this.state.shape, { type: "Triangle", color: this.state.background }] })
            }
          >
            Triangle
          </button>
          <button
            style={{ marginLeft: "20px" }}
            onClick={() =>
              this.setState({ shape: this.state.shape.slice(0, -1) })
            }
          >
            Delete last
          </button>
          <button onClick={() => this.setState({ shape: [] })}>Clear</button>

          <button
            onClick={() => this.setState({ background: "rgb(255, 85, 85)" })}
            style={this.state.background === "rgb(255, 85, 85)" ? {
              marginLeft: "20px",
              background: "rgb(255, 85, 85)", color: "white"
            } : { marginLeft: "20px" }}
          >Red</button>
          <button
            style={this.state.background === "#ffa500" ? { background: "orange", color: "white" } : null}
            onClick={() => this.setState({ background: "#ffa500" })}>Orange</button>
          <button
            style={this.state.background === "#3d3ddd" ? { background: "#3d3ddd", color: "white" } : null}
            onClick={() => this.setState({ background: "#3d3ddd" })}>Blue</button>
          <button
            style={this.state.background === "rgb(68 190 176)" ? { background: "rgb(68 190 176)", color: "white" } : null}
            onClick={() => this.setState({ background: "rgb(68 190 176)" })}>Green</button>
        </div>
        <div
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
        >
          {this.state.shape.map((shape, index) => (
            <div
              key={index}
              style={{
                width: "100px",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {shape.type === "Circle" && (
                <div
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    backgroundColor: shape.color,
                  }}
                ></div>
              )}
              {shape.type === "Square" && (
                <div
                  style={{
                    width: "90px",
                    height: "90px",
                    backgroundColor: shape.color,
                  }}
                ></div>
              )}
              {shape.type === "Triangle" && (
                <div
                  style={{
                    width: "0",
                    height: "0",
                    borderLeft: "45px solid transparent",
                    borderRight: "45px solid transparent",
                    borderBottom: `90px solid ${shape.color}`,
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ShapeColoredCreator;
