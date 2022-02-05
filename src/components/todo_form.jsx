import React, { useState } from 'react'

const TodoForm = () => {
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

  return <div>
    <form >
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
}

export default TodoForm