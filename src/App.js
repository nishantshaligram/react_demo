import React from 'react';

import './App.css';
import Header from "./components/Header";
import Users from "./components/Users";

//BEM convention
function App() {
  return (
    <div className="App">
      <Header/>
      <Users />
    </div>
  );
}
export default App;
