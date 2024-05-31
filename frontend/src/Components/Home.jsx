import React from 'react'



const Home = () => {
  return (
    <div>
      <div className="container-fluid height" >
        <div className='header'>
          <h1 className="text-center text-white texting">Order Your Favourite Food Here</h1>
          <p className='text-center text-xl shadow-2xl paragrapgh'>Choose From a diverse menu featuring a delectable array of dishes crafted with the finest ingrediants and culinary expertise.</p>
          <div className=" mt-10">

            <button1 className="p-5 fs-5 button">
              order Now
            </button1>
          </div>
        </div>
      </div>
      <div className="container">
        <h3 className='text text-4xl mt-5 ml-5 font-bold'>Explore our menu</h3>
        <p className='text-gray-600 mt-5 menu ml-5 '> choose from diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining  experience one delicious meal at a time.</p>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 ml-5 mt-5 ">
        <div className="card ">
          <img className='w-28 h-28 img-fluid rounded-full hover:scale-110 duration-500 transition-transform' src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D" alt="" />
          <h1 className='mt-5 ml-7 text-xl font-semibold'>salad</h1>
        </div>
        <div className="card ">
          <img className='w-28 h-28 img-fluid rounded-full hover:scale-110 duration-500 transition-transform' src="https://media.istockphoto.com/id/171579564/photo/chicken-souvlaki-wrap.webp?b=1&s=170667a&w=0&k=20&c=DYEk-teR8P82nnmXAx_hGBdM9ezH4c8zxQRv1PuVyew=" alt="" />
          <h1 className='mt-5 ml-7 text-xl font-semibold'>Rolls</h1>
        </div>
        <div className="card ">
          <img className='w-28 h-28 img-fluid rounded-full hover:scale-110 duration-500 transition-transform' src="https://plus.unsplash.com/premium_photo-1679383371320-8f5b3ec5482d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGVzZXJ0cyUyMGZvb2RzfGVufDB8fDB8fHww" alt="" />
          <h1 className='mt-5 ml-7 text-xl font-semibold'>Deserts</h1>

        </div>
        <div className="card ">
          <img className='w-28 h-28 img-fluid rounded-full hover:scale-110 duration-500 transition-transform' src="https://media.istockphoto.com/id/901781484/photo/cream-cheese-dill-cucumber-english-tea-sandwiches.webp?b=1&s=170667a&w=0&k=20&c=BDSJgkp2Wwc9mOt9GHPpgYtBhwYaL9o4fteKC9F_3VY=" alt="" />
          <h1 className='mt-5 ml-5 text-xl font-semibold'>Sandwich</h1>
        </div>
        <div className="card ">
          <img className='w-28 h-28 img-fluid rounded-full hover:scale-110 duration-500 transition-transform' src="https://media.istockphoto.com/id/1278918978/photo/choco-chips-cake.webp?b=1&s=170667a&w=0&k=20&c=BUPi4Nko-hSslQRHBThec_2_T06wIOuwmfPvq_6EzAk=" alt="" />
          <h1 className='mt-5 ml-7 text-xl font-semibold'>Cake</h1>
        </div>
        <div className="card ">
          <img className='w-28 h-28 img-fluid rounded-full hover:scale-110 duration-500 transition-transform' src="https://media.istockphoto.com/id/482964545/photo/arrabiata-pasta.webp?b=1&s=170667a&w=0&k=20&c=Xr6u4yjlOfsyI02Ni0IohSDoUhGWDc8DnyTImN_2G9I=" alt="" />
          <h1 className='mt-5 ml-7 text-xl font-semibold'>Pasta</h1>
        </div>
      </div>
      <br />
      <div className="container text-4xl mt-5 ml-5 text-gray-600 ">
        <hr />
      </div>
      <br />
      <div className="container">
        <h3 className='text-4xl mt-5 ml-5 font-bold'>Top dishes near you</h3>
      </div>
      
        



    </div>
  )
}

export default Home;


