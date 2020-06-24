import React from "react";
import logo from "./logo.svg";
import "./App.css";

const style = {
  margin: "0 auto",
  width: "640px",
};

function App() {
  return (
    <div style={style}>
      <header className="big-font">
        <Title title="My TODO App" />
      </header>
    </div>
  );
}

export default App;

function Title(props) {
  return <h1>{props.title}</h1>;
}
