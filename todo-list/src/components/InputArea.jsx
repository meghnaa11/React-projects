import React, {useState} from "react";

function InputArea(props) {
    const [text, setText] = useState("");
    function handleChange(event) {
        const value = event.target.value;
        setText(value);
      }
    return (
        <div className="form">
        <input type="text" onChange={handleChange} value={text}/>
        <button onClick={() => {
            props.handleClick(text);
            setText("");
        }}>
          <span>Add</span>
        </button>
      </div>
    );
}

export default InputArea;