import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [myNumber, setMyNumber] = useState(0);

  return (
    <AppBoundary>
      <header className="big-font">
        <Title>My Counter App</Title>
      </header>
      <div className="number">{myNumber}</div>
      <div className="btn-group">
        <button onClick={() => setMyNumber(myNumber - 1)}>minus</button>
        <button onClick={() => setMyNumber(myNumber + 1)}>add</button>
      </div>
    </AppBoundary>
  );
}

export default App;

function Title({ children }) {
  return <h1 style={{ color: "dodgerblue" }}>{children}</h1>;
}

function AppBoundary({ children }) {
  const style = {
    margin: "0 auto",
    width: "640px",
  };
  return <div style={style}>{children}</div>;
}
