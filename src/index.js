//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  const now = new Date().getHours();
  const [color, greeting] =
    now < 12
      ? ["blue", "Good morning!"]
      : now > 12 && now < 18
      ? ["green", "Good afternoon"]
      : ["blue", "Good evening ser"];

  return <h1 style={{ color }}>{greeting}</h1>;
}

ReactDOM.render(
  <div>
    <Greeting />
  </div>,
  document.getElementById("root")
);
