import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function updateInfo(event) {
    const {name, value} = event.target;
    // setContact((previousValue) => {
    //   if(name==="fName") return {fName: value, lName: previousValue.lName, email: previousValue.email};
    //   else if(name==="lName") return {fName: previousValue.fName, lName: value, email: previousValue.email};
    //   else if(name==="email") return {fName: previousValue.fName, lName: previousValue.lName, email: value};
    // });
    setContact(previousValue => {
      return {
        ...previousValue,
        [name] : value
      }
    })
  }
  return (
    <div className="container"> 
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={updateInfo} value={contact.fName} name="fName" placeholder="First Name" />
        <input onChange={updateInfo} value={contact.lName} name="lName" placeholder="Last Name" />
        <input onChange={updateInfo} value={contact.email} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
