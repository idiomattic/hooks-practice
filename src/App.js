import React, { useState } from 'react'
import TodoApp from './components/todo_app';
import FetchApp from './components/fetch_app';

function App() {

  
  return (
    <div className="App">
      <TodoApp />
      <br />
      <FetchApp />
    </div>
  );
}

export default App;
