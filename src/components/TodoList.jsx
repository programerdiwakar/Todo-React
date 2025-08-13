import React from 'react'

const TodoList = () => {
  return (
      <div className='flex flex-col justify-center items-center mt-20'>
          <h2 className='text-4xl font-bold mb-5 text-amber-50'>Your Todos</h2>
          <ul className='list-none flex gap-1.5'>
              <li className='text-lg bg-amber-50 p-2 w-150 border-2 mb-5'>Todo 1</li>
              <button className='text-lg bg-red-500 p-2  border-2 mb-5 hover:bg-red-800 rounded-2xl'>Delete</button>
          </ul>
      </div>
  )
}

export default TodoList
