import React from "react";

var isDone = false;

function strike() {
  //isDone = true;
  document.getElementById("root").style.textDecoration = "line-through";
}

function unStrike() {
  //isDone = false;
  document.getElementById("root").style.textDecoration = null;
}

function App() {
  return (
    <div>
      <p >Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}
// style={isDone ? { textDecoration: "line-through" } : null} - in p
// the commented part wont work bc we need to re render  so we use hooks
export default App;
