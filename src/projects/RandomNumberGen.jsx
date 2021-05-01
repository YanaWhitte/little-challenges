import React from "react";

class RandomNumberGen extends React.Component {
  constructor() {
    super();
    this.state = {
      numbers: [],
      maxNumber: 1,
      allNumbers: 300
    };
  }

  randomNumber = () => Math.floor(Math.random() * this.state.maxNumber);

  render() {
    const randomDelete = this.state.numbers[Math.floor(this.state.numbers.length * Math.random())];
    return (
      <div>
        <h1>Random Number Generator</h1>
        <div>
          <span>Max number: </span>
          <input
            type="text"
            value={this.state.allNumbers}
            onChange={(e) => this.setState({ allNumbers: parseInt(e.target.value) })}
          />
        </div>
        <input
          type="range"
          min="1"
          max={this.state.allNumbers}
          value={this.state.maxNumber}
          onChange={(e) => {
            this.setState({ maxNumber: parseInt(e.target.value) })
          }}
        />
        <span>{this.state.maxNumber}</span>
        <div>
          <button onClick={() =>
            this.setState({ numbers: [...this.state.numbers, this.randomNumber()] })
          }
          >Add random number</button>
          <button onClick={() => this.setState({ numbers: this.state.numbers.slice(0, -1) })}
          >Delete last</button>
          <button onClick={() => this.setState({ numbers: this.state.numbers.filter((num) => num !== randomDelete) })}
          >Delete all "{randomDelete}"</button>
          <button onClick={() => this.setState({ numbers: [] })}
          >Clear</button>
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
          {this.state.numbers.map((item, index) => {
            return <div key={index} style={{ marginRight: "7px" }}>{item}</div>
          })}
        </div>
      </div>
    );
  }
}

export default RandomNumberGen;
