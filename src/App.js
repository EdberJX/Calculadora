import React from "react";
import Logo from "./components/Logo";
import P from "./components/P";
import Calculadora from "./components/Calculadora"
import Calculadora2 from "./components/Calculadora2"
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
      </header> 
      <P>Calculadora con React</P>
      <div className="row container">
          <div className="col-md-6">
            <p>Version 1</p>
            <Calculadora/>
          </div>
          <div className="col-md-6">
          <p>Version 2</p>
            <Calculadora2/>
          </div>
      </div>
     
      
      
      
    </div>
  );
}

export default App;
