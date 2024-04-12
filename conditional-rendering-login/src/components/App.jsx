import React from "react";
import Login from "./Login";


const isLoggedIn = false;

// function renderConditionally() {
//   return isLoggedIn ? <h1>Hello</h1> : <Login/>;
// }

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Login/>}
    </div>
  );
}

export default App;

// if we want to show a msg if the time is past 12: 
// const currentTime = new Date().getHours();
// {currentTime > 12 && <h1>The message you want to show</h1>}
// if the first part is not true then it doesnt reach the expression
// condition && expression - shorthand 