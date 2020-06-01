import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Menu from './components/Menu';
import "./App.css";

export default function App() {
  return (
   <BrowserRouter>
    <section className="section">
    <Menu />
    <Routes />
    </section>
    <section className="section">

    </section>
  </BrowserRouter>
  );
}
