import React from "react";
import { Slider } from "./SliderWithState";

class HsvToRgb extends React.Component {
  constructor() {
    super();
    this.state = {
      densityNum: 5,
      minHeightNum: 0,
      maxHeightNum: 0
    };
  }

  render() {
    return (
      <div>
        <Slider name={"Density"} minValue={5} maxValue={200}
          onChange={(e) => this.setState({ densityNum: +e.target.value })} number={this.state.densityNum} />
        <Slider name={"Min height"} minValue={0} maxValue={50}
          onChange={(e) => this.setState({ minHeightNum: +e.target.value })} number={this.state.minHeightNum} />
        <Slider name={"Max Height"} minValue={0} maxValue={100}
          onChange={(e) => this.setState({ maxHeightNum: +e.target.value })} number={this.state.maxHeightNum} />
      </div>
    );
  }
}

export default HsvToRgb;
