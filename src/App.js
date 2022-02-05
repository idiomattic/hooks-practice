import './App.css';
import TodoForm from './components/todo_form';
import React, { useState } from 'react'

function App() {
  const [forms, setForms] = useState([<TodoForm key={0} />])

  const addForm = () => {
    setForms([...forms, <TodoForm key={forms.length} />])
  }
  
  return (
    <div className="App">
      {forms}
      <button onClick={e => addForm()}>Add another form</button>
    </div>
  );
}

export default App;
