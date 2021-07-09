import React from "react";
import { Slider } from "./SliderWithState";

class ClickBalls extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 5,
      randomValue: 1,
      randomNumbers: Array(5).fill(0).map(() => Array(5).fill(0).map(Math.random)),
      row: 0,
      column: 0,
      background: "",
      isFirstClick: false,
    };
  }

  render() {
    return (
      <div>
        <h1>Clickable balls with random numbers</h1>
        <Slider name={"Size"} minValue={1} maxValue={10}
          onChange={(e) => this.setState({ number: +e.target.value })} number={this.state.number} />
        <div style={{ display: 'flex', marginTop: "20px" }} >
          <div style={{ marginRight: "20px" }}>
            {Array(this.state.number).fill(0).map((_, rowIndex) => {
              return <Row key={rowIndex} elements={Array(this.state.number).fill(0).map(() => Math.floor(Math.random() * 80))}
                onClick={(num, columnIndex, randomColor) => {
                  this.setState({
                    row: rowIndex, column: columnIndex, randomValue: num,
                    background: `rgb(${randomColor}, ${randomColor}, ${randomColor})`, isFirstClick: true
                  })
                }}
              />
            })}
          </div>
          {this.state.isFirstClick && <div>
            <div>Got number: {this.state.randomValue}</div>
            <div>Color: {this.state.background}</div>
            <div>Row: {this.state.row}</div>
            <div>Column: {this.state.column}</div>
          </div>}
        </div>
      </div>
    );
  }
}

const Row = ({ elements, onClick }) => {
  return <div style={{ display: "flex", marginBottom: "5px" }}>
    {elements.map((num, columnIndex) => {
      const randomColor = Math.floor(Math.random() * 205);
      return <div key={columnIndex} style={{
        backgroundColor: `rgb(${randomColor}, ${randomColor}, ${randomColor})`, color: "#fff", display: "flex",
        justifyContent: "center", alignItems: "center", cursor: "pointer",
        borderRadius: "50%", width: "30px", height: "30px", fontSize: "9px", marginRight: "5px"
      }}
        onClick={() => onClick(num, columnIndex, randomColor)}
      >{num}</div>
    })}
  </div>
}

export default ClickBalls;
