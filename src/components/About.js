import React from "react";
import { image } from "../data/data";

function About() {
  return (
   <div>
    <h2>About Me</h2>
    <p>Lorem ipsum</p>
    <img src={image} alt="i made this"></img>
   </div>
  );
}

export default About;
