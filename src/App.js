import React, { useState } from 'react'
import TodoApp from './components/todo_app';
import CatApp from './components/fetch_cat_app';

function App() {

  
  return (
    <div className="App">
      <TodoApp />
      <br />
      <CatApp />
    </div>
  );
}

export default App;
