import React from "react";

class SliderWithRandomColor extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }

  randomColor() {
    return Math.floor(Math.random() * 255);
  }

  render() {
    const blocks = Array(this.state.number).fill(0);
    return (
      <div>
        <h1>Slider with random color column</h1>
        <input
          className="slider"
          type="range"
          min="0"
          max="50"
          value={this.state.number}
          onChange={(e) => this.setState({ number: parseInt(e.target.value) })}
          style={{}}
        />
        <span>{this.state.number}</span>
        {blocks.map((_, index) => {
          return <div
            style={{
              width: "40px",
              height: "20px",
              backgroundColor: `rgb(${this.randomColor()},${this.randomColor()},${this.randomColor()})`
            }}
            key={index}
          ></div>;
        })}
      </div>
    );
  }
}

export default SliderWithRandomColor;
