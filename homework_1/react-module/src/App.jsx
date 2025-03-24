
import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import SimpleButton from "./components/SimpleButton/SimpleButton";
function App() {
  return (
    <div className="app">
      <Header />
      <Menu />
      <main className="main-content">
        <h2>Welcome to our website!</h2>
        
      </main>
      <SimpleButton />
      <SimpleButton />
      <SimpleButton />
      <SimpleButton />
      <Footer />
    </div>
  );
}

export default App;
