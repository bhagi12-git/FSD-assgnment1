import React from "react";
import ReactDOM from "react-dom";
import Image from "./images/lizard.png";
import "./styles.css";

function Hey() {
  return (
    <center>
    <div className="first">
      <div className="second">
        <img src={Image} />
        <div className="third">
          <h2>Lizard</h2>
          <p>
            lizards are a widespread group of squamate
            <br /> reptiles,with over 6,000 species,ranging across
            <br /> all continents except Antarctica
          </p>
          <a href="">SHARE</a>
          <a href="">LEARN MORE </a>
        </div>
      </div>
    </div>
    </center>
  );
}
ReactDOM.render(
  <>
    <Hey />,
  </>,
  document.getElementById("root")
);
