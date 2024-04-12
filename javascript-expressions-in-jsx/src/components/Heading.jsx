import React from "react";

function Heading() {
  const time = new Date().getHours;
  let greeting;
  const customColor = {
    color: "",
  };

  if (time < 12) {
    greeting = "Good Morning";
    customColor.color = "red";
  } else if (time < 18) {
    greeting = "Good Afternoon";
    customColor.color = "green";
  } else {
    greeting = "Good Night";
    customColor.color = "blue";
  }

  return (
    <h1 className="heading" style={customColor}>
      {greeting}
    </h1>
  );
}

export default Heading;
