import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <AppBoundary>
      <header className="big-font">
        <Title>My TODO App</Title>
      </header>
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
