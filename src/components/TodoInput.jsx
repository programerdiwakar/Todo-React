import React from 'react'

const TodoInput = () => {
  return (
    <div className='flex justify-center items-center mt-20 gap-1.5'>
          <input className='border-2 border-gray-200 bg-amber-50 p-3 w-1/3' type="text" placeholder='enter your todo' />
          <button className='w-1/14 h-13 bg-blue-100'>ADD</button>
    </div>
  )
}

export default TodoInput
