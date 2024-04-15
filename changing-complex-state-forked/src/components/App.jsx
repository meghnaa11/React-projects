import React, { useState } from "react";

function App() {

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [fullName, setFullName] = useState("");
  // function fNameChange(event) {
  //   setFirstName(event.target.value);
  // }

  // function lNameChange(event) {
  //   setLastName(event.target.value);
  // }

  // function fullNameChange(event) {
  //   setFullName(firstName + " " + lastName);
  //   event.preventDefault();
  // }
  // onSubmit={fullNameChange} in form
  // return (
  //   <div className="container">
  //     <h1>Hello {firstName} {lastName}</h1>
  //     <form > 
  //       <input onChange={fNameChange} value={firstName} name="fName" placeholder="First Name" />
  //       <input onChange={lNameChange} value={lastName} name="lName" placeholder="Last Name" />
  //       <button>Submit</button>
  //     </form>
  //   </div>
  // );

  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: ""
  });

  function updateName(event) {
    const {name, value} = event.target;
    setFullName(previousValue => {
      if(name === "fName") {
        return {
          firstName: value,
          lastName: previousValue.lastName
        };
      } else if(name === "lName") {
        return {
          firstName: previousValue.firstName,
          lastName: value
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>Hello {fullName.firstName} {fullName.lastName}</h1>
      <form > 
        <input onChange={updateName} value={fullName.firstName} name="fName" placeholder="First Name" />
        <input onChange={updateName} value={fullName.lastName} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
