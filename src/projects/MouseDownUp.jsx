import React from "react";

class MouseDownUp extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 30,
      isMouseDown: false,
      isFirstClick: false,
      top: 0,
      left: 0
    };
  }

  render() {
    return (
      <div>
        <h1>Mouse Down & Mouse Up</h1>
        <p>Mouse is {this.state.isMouseDown === true ? "down" : "up"}</p>
        <div>Circle Size:</div>
        <input
          type="range"
          min="10"
          max="100"
          value={this.state.number}
          onChange={(e) => this.setState({ number: e.target.value })}
        />
        <span>{this.state.number}</span>
        <div
          onMouseDown={(e) => this.setState({ isMouseDown: true, top: e.pageY, left: e.pageX, isFirstClick: true })}
          onMouseUp={() => this.setState({ isMouseDown: false })}
          // onMouseMove={(e) => {
          //   if (this.state.isMouseDown === true) {
          //     this.setState({ top: e.pageY, left: e.pageX })
          //   }
          // }}
          style={{ marginTop: "20px", background: "rgb(243, 243, 243)", height: "400px", borderRadius: "8px" }} >
          <div style={{
            position: "absolute", width: `${this.state.number}px`, height: `${this.state.number}px`,
            borderRadius: "50%", background: "orange",
            top: this.state.isFirstClick ? `${this.state.top - this.state.number / 2}px` : undefined,
            left: this.state.isFirstClick ? `${this.state.left - this.state.number / 2}px` : undefined
          }}
          ></div>
        </div>
      </div>
    );
  }
}

export default MouseDownUp;
