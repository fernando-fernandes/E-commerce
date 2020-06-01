import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Menu from './components/Menu';
import Sidebar from './components/Sidebar';
import "./App.scss";

export default function App() {
  return (
    <BrowserRouter>

      <section className="section section-sidebar">
        <Sidebar />
      </section>

      <section className="section section-content">
        <Menu />
        <Routes />
      </section>

    </BrowserRouter>
  );
}
