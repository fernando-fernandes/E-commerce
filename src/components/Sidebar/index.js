import React from 'react';
import "./styles.scss";

export default function Sidebar() {

  return (
    <div>
      <h1>E-Commerce<span>SENAC</span></h1>
      <a href="https://dribbble.com/tarka" target="_blank" rel="noopener noreferrer">
        <img src={require("./images/Peter-Tarka.png")} alt="Ilustração" />
      </a>
    </div>
  )

}