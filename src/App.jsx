import React from 'react'
import Navbar from './components/Navbar'
import TodoInput from './components/TodoInput'
import { useState } from 'react'

const App = () => {
  const [todoList, setTodoList] = useState([]);
  console.log(todoList)

  let addTodo = (todo) => {
    setTodoList([...todoList, todo])
  }

  const deleteTodo = (index) => {
    // Remove the item at the given index
    setTodoList(todoList.filter((_, i) => i !== index));
  }

  return (
    <div className="container min-w-screen h-screen bg-sky-900 md:w-32 lg:w-48 sm:max-w-40">
      <Navbar />
      <TodoInput addTodo={addTodo} />
      <div className='flex flex-col justify-center items-center mt-20'>
        <h2 className='text-4xl font-bold mb-5 text-amber-50'>Your Todos</h2>
        <ul className='list-none flex-col gap-1.5'>
          {todoList.map((list, i) => (
            <li key={i} className='flex items-center text-lg bg-amber-50 p-2 w-150 border-2 mb-5 rounded-md md:max-w-2xl sm:max-w-20'>
              <span className="flex-1">{list}</span>
              <button
                className='ml-4 text-lg bg-red-500 p-2 border-2 hover:bg-red-800 rounded-2xl'
                onClick={() => deleteTodo(i)}
              >
                Delete
              </button>
            </li>
            ))}

        </ul>
      </div>

    </div>
  )
}

export default App
