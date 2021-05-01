import React from "react";

class ShapeCreator extends React.Component {
  constructor() {
    super();
    this.state = {
      shape: [],
    };
  }

  render() {
    console.log(this.state.shape)
    return (
      <div>
        <div style={{ marginBottom: "10px" }}>
          <button
            onClick={() =>
              this.setState({ shape: [...this.state.shape, "Circle"] })
            }
          >
            Circle
          </button>
          <button
            onClick={() =>
              this.setState({ shape: [...this.state.shape, "Square"] })
            }
          >
            Square
          </button>
          <button
            onClick={() =>
              this.setState({ shape: [...this.state.shape, "Triangle"] })
            }
          >
            Triangle
          </button>
          <button
            style={{ marginLeft: "20px" }}
            onClick={() => this.setState({ shape: this.state.shape.slice(0, -1) })}
          >Delete last</button>
          <button onClick={() => this.setState({ shape: [] })}>Clear</button>
        </div>
        <div
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
        >
          {this.state.shape.map((shape, index) => (
            <div
              style={{
                width: "100px",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              key={index}
            >
              {shape === "Circle" && (
                <div
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    backgroundColor: "#3d3ddd",
                  }}
                ></div>
              )}
              {shape === "Square" && (
                <div
                  style={{
                    width: "90px",
                    height: "90px",
                    backgroundColor: "rgb(68 190 176)",
                  }}
                ></div>
              )}
              {shape === "Triangle" && (
                <div
                  style={{
                    width: "0",
                    height: "0",
                    borderLeft: "45px solid transparent",
                    borderRight: "45px solid transparent",
                    borderBottom: "90px solid rgb(255, 85, 85)",
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

export default ShapeCreator;
