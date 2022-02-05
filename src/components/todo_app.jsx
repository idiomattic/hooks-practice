import React, {useState} from 'react';

const TodoApp = () => {
  // const [forms, setForms] = useState([<TodoForm key={0} />])
  const [todos, setTodos] = useState([])

  const [todo, setTodo] = useState({
    title: '',
    description: '',
    complete: false
  })

  const update = field => {
    return e => {
      setTodo({ ...todo, [field]: field === 'complete' ? !todo.complete : e.target.value })
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    setTodos([...todos, todo])
    setTodo({
      title: '',
      description: '',
      complete: false
    })
  }

  const updateSavedTodo = i => {
    return e => {
      setTodos([...todos.slice(0, i), {title: todos[i].title, description: todos[i].description, complete: !todos[i].complete}, ...todos.slice(i + 1)])
    }
  }

  // const addForm = () => {
  //   setForms([...forms, <TodoForm key={forms.length} />])
  // }  
  console.log(todos)
  
  return (
    <div id='todo-app'>
      <div id="forms-container">
        {/* {forms} */}
        <div>
          <form onSubmit={e => handleSubmit(e)}>
            <label>Title
              <input type="text" onChange={update('title')} value={todo.title}/>
            </label>
            <br />
            <label>Description
              <input type="text" onChange={update('description')} value={todo.description}/>
            </label>
            <br />
            <label>Complete?
              <input type="checkbox" onChange={update('complete')} value={todo.complete} checked={todo.complete}/>
            </label>
            <br />
            <input type="submit" />
          </form>
        </div>
        {/* <button onClick={e => addForm()}>Add another form</button> */}
      </div>
      <div id="index-container">
        <ul id='todo-list'>
          {todos.map((todo, i) => (
            <li key={i} className='todo-list-item'>
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
              <label>Completed
                <input type="checkbox"
                  onChange={updateSavedTodo(i)} 
                  value={todo.complete} 
                  checked={todo.complete}/>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default TodoApp;
