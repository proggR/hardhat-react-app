import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Symfoni } from "./hardhat/SymfoniContext";
import { Basic } from "./components/Basic";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Symfoni autoInit={true} loadingComponent={<h1>LOADING...</h1>}>
          <div>
            <h1>Welcome</h1>
            <Basic></Basic>
          </div>
        </Symfoni>

      </header>
    </div>
  );
}

export default App;
