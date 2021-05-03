import React from "react";

class MouseDrawing extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 30,
      isMouseDown: false,
      isFirstClick: false,
      circles: [],
      background: "#ffa500"
    };
  }

  ref = React.createRef();

  render() {
    const circles = this.state.circles;
    const rect = this.ref.current?.getBoundingClientRect();
    // console.log(this.ref.current?.getBoundingClientRect())
    return (
      <div>
        <h1>Mouse Drawing</h1>
        <div>Circle Size:</div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="range"
            min="10"
            max="100"
            value={this.state.number}
            onChange={(e) => this.setState({ number: e.target.value })}
          />
          <span>{this.state.number}</span>

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
          <button style={{ marginLeft: "20px" }} onClick={() => this.setState({ circles: [] })}>Clear</button>
        </div>

        <div
          onMouseDown={(e) => this.setState({
            isMouseDown: true,
            isFirstClick: true, circles: [...circles, { top: e.pageY, left: e.pageX, size: this.state.number, color: this.state.background }]
          })}
          onMouseUp={() => this.setState({ isMouseDown: false })}
          onMouseMove={(e) => {
            if (this.state.isMouseDown === true) {
              this.setState({ circles: [...circles, { top: e.pageY, left: e.pageX, size: this.state.number, color: this.state.background }] })
            }
          }}
          ref={this.ref}
          style={{ position: "relative", overflow: "hidden", marginTop: "20px", background: "rgb(243, 243, 243)", height: "400px", borderRadius: "8px" }} >
          {circles.map((circle, index) => {
            return <div key={index} style={{
              position: "absolute", width: `${circle.size}px`, height: `${circle.size}px`,
              borderRadius: "50%", background: `${circle.color}`,
              top: this.state.isFirstClick ? `${circle.top - circle.size / 2 - rect?.top - window.scrollY}px` : undefined,
              left: this.state.isFirstClick ? `${circle.left - circle.size / 2 - rect?.left}px` : undefined
            }}
            />
          })}
        </div>
      </div>
    );
  }
}

export default MouseDrawing;
