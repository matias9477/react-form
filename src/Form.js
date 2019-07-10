import React from "react";
import './index.css';

export default class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    dni: "",
    email: "",
    password: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      dni: "",
      email: "",
      password: ""
    });
    this.props.onChange({
      firstName: "",
      lastName: "",
      dni: "",
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <form className="formulario">
        <input 
          name="firstName"
          placeholder="Nombre"
          value={this.state.firstName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="lastName"
          placeholder="Apellido"
          value={this.state.lastName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="dni"
          placeholder="DNI"
          value={this.state.dni}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
        />
        <br />
        <button className="boton" onClick={e => this.onSubmit(e)}>Registrar</button>
      </form>
    );
  }
}
