import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faPlus } from '@fortawesome/free-solid-svg-icons'

import "./styles.scss";
import { NavLink } from 'react-router-dom';

export default function Menu() {

  return (
    <nav>
      <NavLink to="/listagem" activeClassName="active"><FontAwesomeIcon className="icon" icon={faListUl} />Produtos cadastrados</NavLink>
      
      <NavLink exact to="/cadastro" activeClassName="active"><FontAwesomeIcon className="icon" icon={faPlus} />Novo produto</NavLink>
    </nav>
  )
}