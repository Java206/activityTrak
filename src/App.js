import React from "react";
import './App.css';
//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>ActivityTrak {inputText}</h1>
      </header>
      <Form setInputText={setInputText}/>
      <TodoList/>
    </div>
  );
}

export default App;
