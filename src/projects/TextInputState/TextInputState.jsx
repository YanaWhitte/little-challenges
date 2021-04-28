import React from "react";

class TextInputState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }

  render() {
    return <div>
      <h1>Input and div with shared state</h1>
      <p>Type text and it will be shown in the heading below</p>
      <input onChange={(e) => this.setState({ text: e.currentTarget.value })} />
      <div>{this.state.text}</div>
    </div>
  }
}

export default TextInputState;