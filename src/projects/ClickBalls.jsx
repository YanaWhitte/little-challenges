import React from "react";

class ClickBalls extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
  }

  render() {
    return (
      <div>
        <h1>Clickable balls with random numbers</h1>
        <div>Size:</div>
        <input
          type="range"
          min="1"
          max="10"
          value={this.state.number}
          onChange={(e) => this.setState({ number: +e.target.value })}
        />
        <span>{this.state.number}</span>
        {Array(this.state.number).fill(0).map((_, index) => {
          return <Row key={index} elements={Array(this.state.number).fill(0).map(() => Math.floor(Math.random() * 30))} />
        })}
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
            return <div key={index} style={{
              backgroundColor: "#000", color: "#fff", display: "flex", justifyContent: "center", alignItems: "center",
              borderRadius: "50%", width: "30px", height: "30px", fontSize: "9px", marginRight: "5px"
            }} >{num}</div>
          })}
        </div>
      </div>
    </div>
  </>
}

export default ClickBalls;
