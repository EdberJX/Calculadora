import React, { Component } from "react";
import Button from "./Button";

export default class Calculadora extends Component {
  state = {
    number1: "",
    number2: "",
    resultado: "",
    operador: "",
    mostrar:""
  };
  wipe = ()=>{
    this.setState({
        number2: "",
        number1: "",
        operador: ""
      });
      this.mostrar("")
  }
  mostrar = (value) =>{
    
         this.setState({
          mostrar: value
   
    }  )}

  onClick = async e => {
    const { value } = e.target;
    let muestra ;

    if (Number.isInteger(parseInt(value)) || value === ".") {
        
      await this.setState({
        number1: this.state.number1 + value
      });
      muestra = this.state.number1
    } else {
      if (!this.state.number2 && value !== "=") {
        await this.setState({
          number2: this.state.number1,
          number1: "",
          operador: value
        });
      } else {
        let n1 = parseFloat(this.state.number1);
        let n2 = parseFloat(this.state.number2);
        let resultado;
        switch (this.state.operador) {
          case "*": {
            resultado = n1 * n2;

            break;
          }
          case "/": {
            resultado = n1 / n2;
            break;
          }
          case "+": {
            resultado = n1 + n2;
            break;
          }
          case "-": {
            resultado = n1 - n2;
            break;
          }
          default: {
            console.log("default");
          }
        }
        await this.setState({ resultado });
        muestra = resultado;
   
      }
    }
    this.mostrar(muestra)
  };
  render() {
    return (
      <React.Fragment>
        
        <h4><i onClick={this.wipe} className="fas fa-broom"></i>{this.state.mostrar}</h4>
        <div className="btn-group-vertical">
          <Button
            color="btn btn-primary btn-block"
            text="1"
            onClick={this.onClick}
            onChange={this.onChange}
          />
          <Button
            color="btn btn-primary btn-block"
            text="4"
            onClick={this.onClick}
          />
          <Button
            color="btn btn-primary btn-block"
            text="7"
            onClick={this.onClick}
          />
          <Button
            color="btn btn-info btn-block"
            text="."
            onClick={this.onClick}
          />
        </div>
        <div className="btn-group-vertical">
          <Button
            color="btn btn-primary btn-block"
            text="2"
            onClick={this.onClick}
          />
          <Button
            color="btn btn-primary btn-block"
            text="5"
            onClick={this.onClick}
          />
          <Button
            color="btn btn-primary btn-block"
            text="8"
            onClick={this.onClick}
          />
          <Button
            color="btn btn-primary btn-block"
            text="0"
            onClick={this.onClick}
          />
        </div>
        <div className="btn-group-vertical">
          <Button
            color="btn btn-primary btn-block"
            text="3"
            onClick={this.onClick}
          />
          <Button
            color="btn btn-primary btn-block"
            text="6"
            onClick={this.onClick}
          />
          <Button
            color="btn btn-primary btn-block"
            text="9"
            onClick={this.onClick}
          />
          <Button
            color="btn btn-info btn-block"
            text="="
            onClick={this.onClick}
          />
        </div>
        <div className="btn-group-vertical">
          <Button
            color="btn btn-dark btn-block"
            text="*"
            onClick={this.onClick}
          />
          <Button
            color="btn btn-dark btn-block"
            text="/"
            onClick={this.onClick}
          />
          <Button
            color="btn btn-dark btn-block"
            text="+"
            onClick={this.onClick}
          />
          <Button
            color="btn btn-dark btn-block"
            text="-"
            onClick={this.onClick}
          />
        </div>
      </React.Fragment>
    );
  }
}
