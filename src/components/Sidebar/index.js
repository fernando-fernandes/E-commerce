import React from 'react';
import "./styles.scss";

export default function Sidebar() {

  return (
    <div>
      <h1>Projeto<br />E-Commerce<span>SENAC</span></h1>
      <img src={require("./images/img.jpg")} alt="Ilustração" />
    </div>
  )

}