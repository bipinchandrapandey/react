import React from 'react';
import './App.css';
import Card from './component/card.jsx';

const App = () => {
  return (
    <div className="parent">
      <Card user="Bipin Chandra Pandey" age={26} detail={"i am frontend developer"}    img="https://images.unsplash.com/photo-1757106228756-72a21823574d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=685" />
      <Card user="ujala singh " age={22} detail={"i am frontend developer"}    img="https://images.unsplash.com/photo-1757106228756-72a21823574d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=685" />
      <Card user="Deepak singh" age={22} detail={"i am frontend developer"}    img="https://images.unsplash.com/photo-1757106228756-72a21823574d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=685" />
     
     
    </div>
  );
};

export default App;
