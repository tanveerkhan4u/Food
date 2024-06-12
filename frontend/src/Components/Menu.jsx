import React from 'react'



const Menu = () => {
  return (
    <div>
      <div className="container-fluid mb-10 photo " >
        <div className='lg:pt-36 pt-20 '>
          <h1 className='text-center   menu  text-white'>zwigato</h1>
          <p className='text-white text-center text-2xl'>Discover the best food & drinks in Lucknow</p>
        </div>
      
          <div className="flex justify-center mt-5 space-x-2 p-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full lg:max-w-xl md:max-w-lg"
          />
          <button1 className="p-2">
            Search
          </button1>
        </div>
      </div>
    



    </div>
  )
}

export default Menu
