import React from "react";

function rgb2hsv(r, g, b) {
  let rabs, gabs, babs, rr, gg, bb, h, s, v, diff, diffc, percentRoundFn;
  rabs = r / 255;
  gabs = g / 255;
  babs = b / 255;
  v = Math.max(rabs, gabs, babs);
  diff = v - Math.min(rabs, gabs, babs);
  diffc = c => (v - c) / 6 / diff + 1 / 2;
  percentRoundFn = num => Math.round(num * 100) / 100;
  if (diff === 0) {
    h = s = 0;
  } else {
    s = diff / v;
    rr = diffc(rabs);
    gg = diffc(gabs);
    bb = diffc(babs);

    if (rabs === v) {
      h = bb - gg;
    } else if (gabs === v) {
      h = (1 / 3) + rr - bb;
    } else if (babs === v) {
      h = (2 / 3) + gg - rr;
    }
    if (h < 0) {
      h += 1;
    } else if (h > 1) {
      h -= 1;
    }
  }
  return {
    h: Math.round(h * 360),
    s: percentRoundFn(s * 100),
    v: percentRoundFn(v * 100)
  };
}

class RgbToHsv extends React.Component {
  constructor() {
    super();
    this.state = {
      r: 255,
      g: 0,
      b: 0
    };
  }

  render() {
    const r = this.state.r;
    const g = this.state.g;
    const b = this.state.b;

    const { h, s, v } = rgb2hsv(r, g, b);

    const rToH = Math.floor(h / 360 * 255);
    const rToS = Math.floor(s / 100 * 255);
    const rToV = Math.floor(v / 100 * 255);

    const isNumber = (value) => {
      const parsedNum = parseInt(value)
      if (isNaN(parsedNum)) return 0;
      if (parsedNum > 255) return 255;
      return parsedNum;
    }

    return (
      <div>
        <h1>RGB to HSV color space</h1>
        <div>
          R: <input
            type="text" value={r}
            onChange={(e) => {
              this.setState({ r: isNumber(e.target.value) })
            }}
            style={{ width: "30px", marginRight: "10px" }} />
          G: <input
            type="text" value={g}
            onChange={(e) => {
              this.setState({ g: isNumber(e.target.value) })
            }}
            style={{ width: "30px", marginRight: "10px" }} />
          B: <input
            type="text" value={b}
            onChange={(e) => {
              this.setState({ b: isNumber(e.target.value) })
            }}
            style={{ width: "30px", marginRight: "10px" }} />
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "20px" }}>
            Color: <div style={{
              border: "1px solid rgb(221, 221, 221)", width: "30px",
              height: "30px", backgroundColor: `rgb(${r}, ${g}, ${b})`
            }}></div>
          </div>
          <div style={{ marginRight: "20px" }}>
            Hue: {h} <div style={{
              border: "1px solid rgb(221, 221, 221)", width: "30px",
              height: "30px", backgroundColor: `rgb(${rToH}, ${rToH}, ${rToH})`
            }}></div>
          </div>
          <div style={{ marginRight: "20px" }}>
            Saturation: {s} <div style={{
              border: "1px solid rgb(221, 221, 221)", width: "30px",
              height: "30px", backgroundColor: `rgb(${rToS}, ${rToS}, ${rToS})`
            }}></div>
          </div>
          <div style={{ marginRight: "20px" }}>
            Value (brightness): {v} <div style={{
              border: "1px solid rgb(221, 221, 221)", width: "30px",
              height: "30px", backgroundColor: `rgb(${rToV}, ${rToV}, ${rToV})`
            }}></div>
          </div>
        </div>
        <hr />
        <p style={{ fontFamily: "monospace" }}>RGB: [{r}, {g}, {b}]; HSV: [{Math.floor(h)},{Math.floor(s)},{Math.floor(v)}]</p>
        <hr />
        <div style={{ display: "flex", fontSize: "10px", justifyContent: "space-between", }}>
          <div>CSS color for "Color":<pre>rgb({r}, {g}, {b})</pre></div>
          <div>CSS color for "Hue":<pre>rgb({rToH}, {rToH}, {rToH})</pre></div>
          <div>CSS color for "Saturation":<pre>rgb({rToS}, {rToS}, {rToS})</pre></div>
          <div>CSS color for "Value":<pre>rgb({rToV}, {rToV}, {rToV})</pre></div>
        </div>
      </div>
    );
  }
}

export default RgbToHsv;
