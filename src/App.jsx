import React from 'react'
import Navbar from './components/Navbar'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <div className="container min-w-screen h-screen bg-sky-900">
      <Navbar />
      <TodoInput />
      <TodoList/>
    </div>
  )
}

export default App
