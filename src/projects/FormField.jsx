import React from "react";

class FormField extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      field: "",
      error: "'Name' cannot be empty",
      formDisplay: "block",
      successDisplay: "none"
    }
  }

  render() {
    return <div>
      <h1>Basic form validation</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!this.state.field) {
            this.setState({ show: true })
          } else {
            this.setState({ formDisplay: "none", successDisplay: "block " })
          }
        }}
        style={{ display: `${this.state.formDisplay}` }}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          onChange={(e) => this.setState({ field: e.target.value, show: false })}
        />
        <button
          type="submit"
          style={{ marginLeft: "5px" }}
        >Submit</button>
        {this.state.show && <div style={{ color: "red" }}>{this.state.error}</div>}
      </form>
      <div style={{ display: `${this.state.successDisplay}` }}>Success!</div>
    </div>
  }
}

export default FormField;