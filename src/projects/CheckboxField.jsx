import React from "react";
import { Slider } from "./SliderWithState";

class CheckboxField extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
  }

  render() {
    return (
      <div>
        <h1>Field of checkboxes</h1>
        <Slider name={"Size"} minValue={1} maxValue={10}
          onChange={(e) => this.setState({ number: +e.target.value })} number={this.state.number} />

        {Array(this.state.number).fill(0).map((_, index) => {
          return <Row key={index} elements={Array(this.state.number).fill(0).map(() => Math.floor(Math.random() * 30))} />
        })}
        <p>Number of checkboxes checked: 0</p>
      </div>
    );
  }
}

const Row = ({ elements }) => {
  return <>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <div style={{ display: "flex", marginBottom: "5px" }}>
          {elements.map((num, index) => {
            return <input type="checkbox" key={index} style={{ marginRight: "5px" }} />
          })}
        </div>
      </div>
    </div>
  </>
}

export default CheckboxField;
