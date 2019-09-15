import React, { Component } from "react";
import Button from "./Button";

export default class Caluladora2 extends Component {
  state = {
    result: ""
  };
  handleClick = e => {
      const { value } = e.target;
      if(!value){
        this.setState({result: ""});
      }else{
    this.setState({result: this.state.result+value});
}
  };
  operacion = ()=>{
      /*eslint-disable no-eval */
      let result = this.state.result;
      if(result[0]==="0" && result.length>1){
          result = result.substr(1,result.length)
          result = eval(result)
          this.setState({result})
      } else{
      
     result = eval(this.state.result)
      this.setState({result})
      }
  }

  render() {
    const digitos = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
    const operadores = ["+","-","*","/",""]
    return (
      <div className="row container mb-4" style={{width:"200px",margin:"auto",background:"#51C3FA",padding:"12px", borderRadius:"12%"}}>
           <hr></hr>
          <div style={{color:"white"}}>
            {this.state.result || "0"}
         
          </div>
       
          <div >
        {digitos.map(digito => {
          return (
            <Button
              key={digito}
              color="btn btn-dark shadow p-3 col-md-3 m-1  "
              text={digito}
              onClick={this.handleClick}
            />
          );
        })}
      </div>
      <div className="pt-2" >
        {operadores.map(digito => {
          if(!digito){
            return (
                <Button
                  key={digito}
                  color="btn btn-danger shadow p-3 col-md-1 m-1  "
                  text={digito}
                  onClick={this.handleClick}
                />
              );
          }else{
          return (
            <Button
              key={digito}
              color="btn btn-success shadow p-3 col-md-1 m-1  "
              text={digito}
              onClick={this.handleClick}
            />
          );
        }})}
        <Button
              
              color="btn btn-info shadow p-3 col-md-1 m-1  "
              text="="
              onClick={this.operacion}
              />
      </div>
      </div>
    );
  }
}
