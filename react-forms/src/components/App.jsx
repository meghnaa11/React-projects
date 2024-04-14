import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headerName, setHeaderName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }
  function handleClick() {
    setHeaderName(name);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>Hello {headerName}</h1>
      <input onChange={handleChange} value={name} type="text" placeholder="What's your name?" />
      <button onClick={handleClick}>Submit</button>
    </form>
  );
}

// to make the name come as you type - use {name} in h1 instead of headerName
export default App;
