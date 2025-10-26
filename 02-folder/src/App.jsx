import React from 'react';
import './App.css';
import Card from './component/card.jsx';

const App = () => {
  return (
    <div className="parent">
      <Card user="siddhant" age={24} detail={"i am frontend developer"}    img="https://images.unsplash.com/photo-1757106228756-72a21823574d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=685" />
      <Card user="Desi Bhabhi" age={30} detail={"i am sexy "}  img="https://images.unsplash.com/photo-1760679209760-872f7f77a150?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2018"  />
      <Card user ="julee" age = {26} detail={"i am cutiepie "}  img="https://images.unsplash.com/photo-1760625525477-f725e48f5a13?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"  />
    </div>
  );
};

export default App;
