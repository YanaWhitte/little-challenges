import React from "react";

class SliderWithState extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0
    }
  }

  render() {
    return <div>
      <h1>Slider with shared state</h1>
      <input
        type="range"
        min="0"
        max="100"
        value={this.state.number}
        onChange={(e) => this.setState({ number: e.target.value })}
      />
      <span>{this.state.number}</span>
    </div>
  }
}

export default SliderWithState;