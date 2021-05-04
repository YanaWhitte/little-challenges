import React from "react";

class SliderWithState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
  }
  render() {
    return <>
      <h1>Slider with shared state</h1>
      <Slider name={"Name"} minValue={0} maxValue={100}
        onChange={(e) => this.setState({ number: e.target.value })} number={this.state.number} />
    </>
  }
}

export const Slider = (props) => {
  return <div>
    <div>{props.name}:</div>
    <input
      type="range"
      min={props.minValue}
      max={props.maxValue}
      value={props.number}
      onChange={(e) => props.onChange(e)}
    />
    <span>{props.number}</span>
  </div>
}

export default SliderWithState;