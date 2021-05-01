import React from "react";

class MousePosition extends React.Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0
    }
  }

  handleMouseMove = (e) => {
    this.setState({ x: e.pageX, y: e.pageY });
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  render() {
    return <div style={{
      display: "flex", alignItems: "flex-end",
      justifyContent: "flex-end", color: "#ff002f", fontSize: "17px"
    }}>
      <span style={{ marginRight: "15px" }}>X: {this.state.x}</span>
      <span>Y: {this.state.y}</span>
    </div>
  }
}

export default MousePosition;