import React from "react";

class RowComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
  }

  render() {
    return (
      <div>
        <h1>Row component demo</h1>
        <div>Size:</div>
        <input
          type="range"
          min="1"
          max="10"
          value={this.state.number}
          onChange={(e) => this.setState({ number: e.target.value })}
        />
        <span>{this.state.number}</span>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <div style={{ display: "flex", marginBottom: "5px" }}>
              <div style={{
                backgroundColor: "#000", color: "#fff", display: "flex", justifyContent: "center", alignItems: "center",
                borderRadius: "50%", width: "30px", height: "30px", fontSize: "9px", marginRight: "5px"
              }} >17</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RowComponent;
