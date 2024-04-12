import React, { useState } from "react";

function App() {
  setInterval(getCurrentTime, 1000)
  let time = new Date().toLocaleTimeString([], { hour12: false });
  const [currentTime, getTime] = useState(time);
  function getCurrentTime() {
    let newTime = new Date().toLocaleTimeString([], { hour12: false });
    getTime(newTime);
  }
  
  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick= {getCurrentTime} >Get Time</button>
    </div>
  );
}

export default App;
