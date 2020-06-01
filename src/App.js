import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Menu from './components/Menu';
import "./App.scss";

export default function App() {
  return (
    <BrowserRouter>

      <section className="section section-nav">
        <Menu />
      </section>

      <section className="section section-content">
        <Routes />
      </section>

    </BrowserRouter>
  );
}
