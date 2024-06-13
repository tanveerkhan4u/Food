import React, { useRef, useState } from 'react'
import Card from './Card'
import FoodData from './dummydata';



const Menu = () => {

  const [foodList, setFoodList] = useState(FoodData);

  const searchRef = useRef(null);

  const searchFood = () => {
    const filteredData = FoodData.filter((food) => {
      return food.name.toLowerCase().includes(searchRef.current.value.toLowerCase())
    });
    setFoodList(filteredData);
  }



  return (
    <div>
      <div className="container-fluid  photo " >
        <div className='lg:pt-36 pt-20 '>
          <h1 className='text-center   menu  text-white'>zwigato</h1>
          <p className='text-white text-center text-2xl'>Discover the best food & drinks in Lucknow</p>
        </div>

        <div className="flex justify-center mt-5 space-x-2 p-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full lg:max-w-xl md:max-w-lg" ref={searchRef}
          />
          <button1 onClick={searchFood} className="p-2 rounded" >
            Search
          </button1>
        </div>
      </div>
    
    <div className='container-fluid bg-slate-100 p-5'>
        <div className='flex flex-wrap gap-10 justify-center mt-5 my-10 ' >
          {
            foodList.map((food,name) => {
              return <Card  food={food}
             
              />
            })
          }
        
        </div>
        </div>

    </div>
  )
}

export default Menu

// div className=''