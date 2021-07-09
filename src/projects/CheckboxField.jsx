import React from "react";
import { Slider } from "./SliderWithState";

class CheckboxField extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 8,
      checked: []
    };
  }

  render() {
    const addChecked = (e) => this.setState({ checked: [...this.state.checked, e.target.checked] });
    const removeChecked = () => this.setState({ checked: this.state.checked.slice(0, -1) });
    return (
      <div>
        <h1>Field of checkboxes</h1>
        <Slider name={"Size"} minValue={1} maxValue={10}
          onChange={(e) => this.setState({ number: +e.target.value })} number={this.state.number} />

        <div style={{ marginTop: "10px" }}>
          {Array(this.state.number).fill(0).map((_, index) => {
            return <Row key={index} elements={Array(this.state.number).fill(0).map(() => 30)}
              addChecked={addChecked} removeChecked={removeChecked}
            />
          })}
        </div>
        <p>Number of checkboxes checked: {this.state.checked.length}</p>
      </div>
    );
  }
}

const Row = ({ elements, addChecked, removeChecked }) => {
  return <>
    <div style={{ display: "flex" }}>
      <div>
        <div style={{ display: "flex" }}>
          {elements.map((_, index) => {
            return <input
              type="checkbox" key={index}
              onChange={(e) => {
                if (e.target.checked) {
                  addChecked(e)
                  console.log("Checked")
                } else {
                  removeChecked();
                  console.log("Unchecked")
                }
              }}
            />
          })}
        </div>
      </div>
    </div>
  </>
}

export default CheckboxField;
