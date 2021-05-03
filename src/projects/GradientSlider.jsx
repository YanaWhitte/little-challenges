import React from "react";

class GradientSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 1,
      maxColors: 128,
    };
  }

  render() {
    const blocks = Array(this.state.number).fill(0);
    return (
      <div>
        <h1>Slider with black & white color column</h1>
        <div>
          <span>Max colors: </span>
          <input
            type="text"
            value={this.state.maxColors}
            onChange={(e) => this.setState({ maxColors: parseInt(e.target.value) })}
          />
        </div>
        <input
          type="range"
          min="1"
          max={this.state.maxColors}
          value={this.state.number}
          onChange={(e) => {
            this.setState({ number: parseInt(e.target.value) })
          }}
        />
        <span>{this.state.number}</span>
        <div style={{ display: "flex" }}>
          {blocks.map((_, index) => {
            const colors = () => Math.floor((index / this.state.number) * 255);
            return <div
              style={{
                height: "20px",
                backgroundColor: `rgb(${colors()},${colors()},${colors()})`,
                display: "flex",
                flex: "1",
              }}
              key={index}
            />;
          })}
        </div>
      </div>
    );
  }
}

export default GradientSlider;
