// @ts-check

import React from "react";

class RandomColorBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      padding: "20px",
      backgroundColor: "rgb(0, 0, 0)",
      color: "rgb(255, 255, 255)"
    }
  }

  generateColors() {
    const color = [
      Math.random() * 255,
      Math.random() * 255,
      Math.random() * 255,
    ]
    const invertedColor = [
      255 - color[0],
      255 - color[1],
      255 - color[2],
    ]
    return [color, invertedColor]
  }

  render() {
    return <div>
      <h1>Button with random color</h1>
      <button
        style={this.state}
        onClick={() => {
          const [color, invertedColor] = this.generateColors();
          this.setState({
            backgroundColor: `rgb(${color[0]},${color[1]},${color[2]})`,
            color: `rgb(${invertedColor[0]},${invertedColor[1]},${invertedColor[2]})`
          })
        }}
      >Click me</button>
    </div >
  }
}

export default RandomColorBtn;