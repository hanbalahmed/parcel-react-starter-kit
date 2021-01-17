import React from "react";
import "../css/Helloworld.css";
import logo from "../logo.png";

const Helloworld = () => {
  return (
    <div className="hello-world">
      <img className="app__logo" src={logo} alt="logo" />
      <h1>React App</h1>
      <p>
        Start Editing <code>./src/App.js</code> to reaload
      </p>
    </div>
  );
};

export default Helloworld;
