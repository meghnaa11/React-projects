import React, {useState} from "react";

function ToDoItem(props) {
    // Code for strike-through on click
    // const [clicked, setClicked] = useState(false);
    // function handleClick() {
    //     setClicked((prevValue) => !prevValue)
    // }
    // return <div onClick={handleClick}>
    //     <li style={{textDecoration: clicked && "line-through"}}>{props.item}</li>
    //     </div>;

    return <div onClick={() => props.delete(props.id)}>
    <li>{props.item}</li>
    </div>
}

export default ToDoItem;

