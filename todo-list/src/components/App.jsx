import React, {useState} from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  
  const [items, setItems] = useState([]);
  

  

  function handleClick(text) {
    setItems((prevItems) => [...prevItems, text]);
  }

  function handleDelete(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => index != id);
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea handleClick={handleClick}/>
      <div>
        <ul>
          {items.map((element, index) => <ToDoItem key={index} id= {index} item= {element} delete={handleDelete} />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
