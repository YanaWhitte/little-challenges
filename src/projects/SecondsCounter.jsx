import React from "react";

class SecondsCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      seconds: 0
    };
  }

  componentDidMount() {
    this.countdown = setInterval(this.timer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.countdown);
  }

  timer = () => {
    this.setState({ seconds: this.state.seconds + 1 });
  }

  render() {
    const seconds = this.state.seconds % 60;

    const zeroSecond = `${seconds}` < 10 ? `0${seconds}` : `${seconds}`;
    const minutes = Math.floor(this.state.seconds / 60);
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ marginTop: "50px", fontSize: "35px", fontFamily: "monospace" }}>
          {minutes < 10 ? "0" + minutes : minutes}:
          {`${zeroSecond}` === 59 ? this.setState({ seconds: 0 }) : `${zeroSecond}`}
        </div>
      </div>
    );
  }
}

export default SecondsCounter;
