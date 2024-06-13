import React from 'react'
import {AiFillStar} from 'react-icons/ai'


function Card  ({food})  {
  console.log(food);
  
  return (
    <div className='font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2'>
      <img src={food.img} alt="" className='w-auto h-[150px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out ' />
      <div className='text-md flex justify-between mt-2'>
        <h2>{food.name}</h2>
        <span className='text-green-500 '>₹{food.price}</span>
      </div>
      <p className='text-sm font-normal'>{food.desc}</p>
      <div className='flex justify-between'>
        <span className='flex justify-center items-center'>
        <AiFillStar className='mr-1 text-yellow-400'/> {food.rating}
        </span>
        <button className='p-1 text-sm text-white bg-orange-500 rounded-lg hover:bg-orange-600'>Add to cart</button>
      </div>
    </div>
  )
}
export default Card

