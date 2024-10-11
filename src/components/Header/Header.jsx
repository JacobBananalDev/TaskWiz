import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-row top-0 left-0 justify-between items-center bg-white p-2'>
      
      <div className='flex flex-row'>
        <h1 className='font-bold text-purple-700 text-2xl'>TaskWiz</h1>
      </div>

      <div className='flex flex-row'>
        <button className='flex p-2 rounded bg-purple-500 text-white'>Sign Up</button>
      </div>

    </div>
  )
}

export default Header
