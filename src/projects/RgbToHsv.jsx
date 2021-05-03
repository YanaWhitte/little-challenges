import React from "react";

class RgbToHsv extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>RGB to HSV color space</h1>
        <div>
          R: <input type="text" style={{ width: "30px", marginRight: "10px" }} />
          G: <input type="text" style={{ width: "30px", marginRight: "10px" }} />
          B: <input type="text" style={{ width: "30px", marginRight: "10px" }} />
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "20px" }}>
            Color: <div style={{
              border: "1px solid rgb(221, 221, 221)", width: "30px",
              height: "30px", backgroundColor: "rgb(255, 0, 0)"
            }}></div>
          </div>
          <div style={{ marginRight: "20px" }}>
            Hue: 0 <div style={{
              border: "1px solid rgb(221, 221, 221)", width: "30px",
              height: "30px", backgroundColor: "rgb(0, 0, 0)"
            }}></div>
          </div>
          <div style={{ marginRight: "20px" }}>
            Saturation: 100.00 <div style={{
              border: "1px solid rgb(221, 221, 221)", width: "30px",
              height: "30px", backgroundColor: "rgb(255, 255, 255)"
            }}></div>
          </div>
          <div style={{ marginRight: "20px" }}>
            Value (brightness): 100 <div style={{
              border: "1px solid rgb(221, 221, 221)", width: "30px",
              height: "30px", backgroundColor: "rgb(255, 255, 255)"
            }}></div>
          </div>
        </div>
        <hr />
        <p style={{ fontFamily: "monospace" }}>RGB: [255,0,0]; HSV: [0,100,100]</p>
        <hr />
        <div style={{ display: "flex", fontSize: "10px", justifyContent: "space-between", }}>
          <div>CSS color for "Color":<pre>rgb(255, 0, 0)</pre></div>
          <div>CSS color for "Hue":<pre>rgb(0, 0, 0)</pre></div>
          <div>CSS color for "Saturation":<pre>rgb(255, 255, 255)</pre></div>
          <div>CSS color for "Value":<pre>rgb(255, 255, 255)</pre></div>
        </div>
      </div>
    );
  }
}

export default RgbToHsv;
