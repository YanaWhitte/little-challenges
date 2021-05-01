import React from "react";

class FormLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      login: "",
      password: "",
      errors: {},
      formDisplay: "block",
      successDisplay: "none"
    }
  }

  render() {
    return <div>
      <h1>Basic form validation</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (!this.state.login && !this.state.password) {
          this.setState({ errors: { login: "Login cannot be empty", password: "Password cannot be empty" } })
        } else if (!this.state.password) {
          this.setState({ errors: { password: "Password cannot be empty" } })
        } else if (!this.state.login) {
          this.setState({ errors: { login: "Login cannot be empty" } })
        } else {
          this.setState({ formDisplay: "none", successDisplay: "block " })
        }
      }}
        style={{ display: `${this.state.formDisplay}` }}>
        <div>
          <label htmlFor="login">Login </label>
        </div>
        <input type="login" id="login" onChange={(e) => this.setState({ login: e.target.value, errors: {} })} />
        {this.state.errors.login && <div style={{ color: "red" }}>{this.state.errors.login}</div>}
        <div>
          <label htmlFor="password" >Password</label>
        </div>
        <input type="password" id="password" onChange={(e) => this.setState({ password: e.target.value, errors: {} })} />
        {this.state.errors.password && <div style={{ color: "red" }}>{this.state.errors.password}</div>}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div style={{ display: `${this.state.successDisplay}` }}>Success!</div>
    </div>
  }
}

export default FormLogin;