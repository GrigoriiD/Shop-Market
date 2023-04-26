import React from 'react';
import './App.scss';
import Header from './Components/layout/Header.jsx';
import Footer from './Components/layout/Foter.jsx';
import Main from './Components/layout/Main.jsx';
export default function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
