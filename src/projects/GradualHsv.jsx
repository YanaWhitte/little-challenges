import React from "react";
import { Slider } from "./SliderWithState";

class GradualHsv extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 5,
    };
  }

  render() {
    return (
      <div>
        <Slider name={"Density"} minValue={5} maxValue={200}
          onChange={(e) => this.setState({ number: +e.target.value })} number={this.state.number} />
      </div>
    );
  }
}

export default GradualHsv;
