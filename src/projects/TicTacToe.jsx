import React from "react";
import "./TicTacToe.css";

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: "x",
      field0: null,
      field1: null,
      field2: null,
      field3: null,
      field4: null,
      field5: null,
      field6: null,
      field7: null,
      field8: null,
      winnerItems: [],
    };
  }

  componentDidUpdate() {
    if (this.state.winnerItems.length > 0) return;
    const gameOver = (gameOver) => {
      setTimeout(() => {
        if (gameOver) {
          alert("game over");
        } else {
          alert("winner is " + (this.state.currentPlayer === "x" ? "o" : "x"));
        }
        this.setState({
          currentPlayer: "x",
          field0: null,
          field1: null,
          field2: null,
          field3: null,
          field4: null,
          field5: null,
          field6: null,
          field7: null,
          field8: null,
          winnerItems: [],
        });
      }, 100);
    };

    const allValuesNotNull = Object.entries(this.state)
      .filter(([key]) => key.startsWith("field"))
      .map(([, a]) => a !== null)
      .reduce((a, b) => a && b, true);

    if (
      this.state.field0 === this.state.field1 &&
      this.state.field0 === this.state.field2 &&
      this.state.field0 !== null
    ) {
      this.setState({ winnerItems: [0, 1, 2] }, () => gameOver());
    } else if (
      this.state.field3 === this.state.field4 &&
      this.state.field3 === this.state.field5 &&
      this.state.field3 !== null
    ) {
      this.setState({ winnerItems: [3, 4, 5] }, () => gameOver());
    } else if (
      this.state.field6 === this.state.field7 &&
      this.state.field6 === this.state.field8 &&
      this.state.field6 !== null
    ) {
      this.setState({ winnerItems: [6, 7, 8] }, () => gameOver());
    } else if (
      this.state.field0 === this.state.field3 &&
      this.state.field0 === this.state.field6 &&
      this.state.field0 !== null
    ) {
      this.setState({ winnerItems: [0, 3, 6] }, () => gameOver());
    } else if (
      this.state.field1 === this.state.field4 &&
      this.state.field1 === this.state.field7 &&
      this.state.field1 !== null
    ) {
      this.setState({ winnerItems: [1, 4, 7] }, () => gameOver());
    } else if (
      this.state.field2 === this.state.field5 &&
      this.state.field2 === this.state.field8 &&
      this.state.field2 !== null
    ) {
      this.setState({ winnerItems: [2, 5, 8] }, () => gameOver());
    } else if (
      this.state.field0 === this.state.field4 &&
      this.state.field0 === this.state.field8 &&
      this.state.field0 !== null
    ) {
      this.setState({ winnerItems: [0, 4, 8] }, () => gameOver());
    } else if (
      this.state.field2 === this.state.field4 &&
      this.state.field2 === this.state.field6 &&
      this.state.field2 !== null
    ) {
      this.setState({ winnerItems: [2, 4, 6] }, () => gameOver());
    } else if (allValuesNotNull) {
      gameOver(true);
    }
  }

  render() {
    return (
      <>
        <h1>Tic Tac Toe</h1>
        <div className="tic-tac-toe">
          {Array(9)
            .fill(0)
            .map((x, index) => (
              <Cell
                key={index}
                onClick={() => {
                  if (this.state["field" + index] === null) {
                    this.setState({
                      ["field" + index]: this.state.currentPlayer,
                      currentPlayer: this.state.currentPlayer === "x" ? "o" : "x",
                    });
                  }
                }}
                value={this.state["field" + index]}
                isWinner={this.state.winnerItems.includes(index)}
              />
            ))}
        </div>
      </>
    );
  }
}

const Cell = ({ onClick, value, isWinner }) => {
  return <div className="cell-field" onClick={onClick}>
    <span className={isWinner ? "winner" : null}>{value}</span>
  </div>
}

export default TicTacToe;
