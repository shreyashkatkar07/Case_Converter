/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";
import { Cards } from "./Cards.jsx";

export const About = React.memo((props) => {
  return (
    <div className="text-center">
      <h1 className="my-3">About Us</h1>
      <h2>Welcome to the Convert Case Tool</h2>
      <p>
        A very handy online text tool where you can change between lower case
        and upper case letters, convert to title case or sentence case and
        transform your text. <br /> Explore the options below :
      </p>
      <Cards mode={props.mode} />
    </div>
  );
});
