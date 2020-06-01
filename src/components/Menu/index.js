import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faPlus } from '@fortawesome/free-solid-svg-icons'

import "./styles.css";

export default function Menu() {

    return (
        <header>
            <nav>
                <a href="/listagem"><FontAwesomeIcon className="icon" icon={faListUl} />Lista de produtos</a>
                <a href="/cadastro"><FontAwesomeIcon className="icon" icon={faPlus} />Cadastro</a>
            </nav>
            <img src=""></img>
        </header>
    )
}