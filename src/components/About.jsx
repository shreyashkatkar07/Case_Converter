import React from "react";
import Cards from "./Cards.jsx";

export default function About(props) {
  return (
    <div>
      <h1 className="my-4">About US</h1>
      <h2>Welcome to the Convert Case Tool</h2>
      <p>
        A very handy online text tool where you can change between lower case
        and upper case letters, convert to title case or sentence case and
        transform your text. Explore the options below :
      </p>
      <Cards mode1={props.mode}/>
    </div>
  );
}
