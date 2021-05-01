import React from "react";

class ModalWindow extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <div>
        <h1>Modal window</h1>
        <button onClick={() => this.setState({ show: true })} >Show modal</button>
        {this.state.show && <div
          style={{
            boxSizing: "border-box",
            position: "absolute",
            zIndex: "1",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            flexDirection: "column",
            padding: "80px"
          }}
          onClick={() => this.setState({ show: false })}
        >
          <div style={{ background: "#fff", display: "inline-block", padding: "30px", borderRadius: "4px" }}
            onClick={(ev) => ev.stopPropagation()}>
            <h1 style={{ margin: "0 0 16px" }}>Hello world</h1>
            <button onClick={() => this.setState({ show: false })}>Close</button>
          </div>
        </div>}
      </div>
    );
  }
}

export default ModalWindow;
