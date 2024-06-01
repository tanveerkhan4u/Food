import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import mobile from './images/mobile.png'
import apple from './images/apple.png'
import google from './images/google.png'
import arrow from './images/arrow.png'


const Home = () => {
  return (
    <div>
      <div className="container-fluid height " >
        <div className='header'>
          <h1 className="text-center text-white texting">Order Your Favourite Food Here</h1>
          <p className='text-center text-xl shadow-2xl paragrapgh font-semibold'>Choose From a diverse menu featuring a delectable array of dishes crafted with the finest ingrediants and culinary expertise.</p>
          <div className=" mt-10">

            <button1 className="p-5 fs-5 button">
              order Now
            </button1>
          </div>
        </div>
      </div>
      <div className="container">
        <h3 className='text-orange-500 text-4xl mt-5 ml-5 font-bold '>What's on your mind?</h3>
        <p className='text-gray-600 mt-5 menu ml-5 '> choose from diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining  experience one delicious meal at a time.</p>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 ml-5 mt-5 ">
        <div className="card ">
          <img className='w-28 h-28 img-fluid rounded-full hover:scale-110 duration-500 transition-transform object-cover' src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D" alt="" />
          <h1 className='mt-5 ml-7 text-xl font-semibold'>salad</h1>
        </div>
        <div className="card ">
          <img className='w-28 h-28 img-fluid rounded-full hover:scale-110 duration-500 transition-transform object-cover' src="https://media.istockphoto.com/id/171579564/photo/chicken-souvlaki-wrap.webp?b=1&s=170667a&w=0&k=20&c=DYEk-teR8P82nnmXAx_hGBdM9ezH4c8zxQRv1PuVyew=" alt="" />
          <h1 className='mt-5 ml-7 text-xl font-semibold'>Rolls</h1>
        </div>
        <div className="card ">
          <img className='w-28 h-28 img-fluid rounded-full hover:scale-110 duration-500 transition-transform object-cover' src="https://plus.unsplash.com/premium_photo-1679383371320-8f5b3ec5482d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGVzZXJ0cyUyMGZvb2RzfGVufDB8fDB8fHww" alt="" />
          <h1 className='mt-5 ml-7 text-xl font-semibold'>Deserts</h1>

        </div>
        <div className="card ">
          <img className='w-28 h-28 img-fluid rounded-full hover:scale-110 duration-500 transition-transform object-cover' src="https://media.istockphoto.com/id/901781484/photo/cream-cheese-dill-cucumber-english-tea-sandwiches.webp?b=1&s=170667a&w=0&k=20&c=BDSJgkp2Wwc9mOt9GHPpgYtBhwYaL9o4fteKC9F_3VY=" alt="" />
          <h1 className='mt-5 ml-5 text-xl font-semibold'>Sandwich</h1>
        </div>
        <div className="card ">
          <img className='w-28 h-28 img-fluid rounded-full hover:scale-110 duration-500 transition-transform object-cover' src="https://media.istockphoto.com/id/1278918978/photo/choco-chips-cake.webp?b=1&s=170667a&w=0&k=20&c=BUPi4Nko-hSslQRHBThec_2_T06wIOuwmfPvq_6EzAk=" alt="" />
          <h1 className='mt-5 ml-7 text-xl font-semibold'>Cake</h1>
        </div>
        <div className="card ">
          <img className='w-28 h-28 img-fluid rounded-full hover:scale-110 duration-500 transition- object-cover' src="https://media.istockphoto.com/id/482964545/photo/arrabiata-pasta.webp?b=1&s=170667a&w=0&k=20&c=Xr6u4yjlOfsyI02Ni0IohSDoUhGWDc8DnyTImN_2G9I=" alt="" />
          <h1 className='mt-5 ml-7 text-xl font-semibold'>Pasta</h1>
        </div>
      </div>
      <br />
      <div className="container text-4xl mt-5 ml-5 text-gray-600 ">
        <hr />
      </div>
      <br />
      <div className="container">
        <h3 className='text-4xl mt-5 text-center font-bold text-orange-500 '>Trending Food</h3>
      </div>
      <br />
      <>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className='imageswiper w-96 h-96 mx-auto my-auto object-cover px-4 py-4 ' src="https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='imageswiper w-96 h-96 mx-auto my-auto object-cover px-4 py-4' src="https://images.unsplash.com/photo-1630431341973-02e1b662ec35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZW5jaCUyMGZyaWVzfGVufDB8fDB8fHww" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='imageswiper w-96 h-96 mx-auto my-auto object-cover px-4 py-4' src="https://images.unsplash.com/photo-1628410040883-c412c8d9a0f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9tb3N8ZW58MHx8MHx8fDA%3D" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='imageswiper w-96 h-96 mx-auto my-auto object-cover px-4 py-4' src="https://images.unsplash.com/photo-1638439430466-b2bb7fdc1d67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='imageswiper w-96 h-96 mx-auto my-auto object-cover px-4 py-4' src="https://images.unsplash.com/photo-1530469912745-a215c6b256ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hhd2FybWF8ZW58MHx8MHx8fDA%3D" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='imageswiper w-96 h-96 mx-auto my-auto object-cover px-4 py-4' src="https://plus.unsplash.com/premium_photo-1674498270805-d1fbcbeef7da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZpc2glMjBmb29kfGVufDB8fDB8fHww" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='imageswiper w-96 h-96 mx-auto my-auto object-cover px-4 py-4' src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZWVyJTIwdGlra2F8ZW58MHx8MHx8fDA%3D" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='imageswiper w-96 h-96 mx-auto my-auto object-cover' src="https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FsYWR8ZW58MHx8MHx8fDA%3D" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='imageswiper w-96 h-96 mx-auto my-auto object-cover' src="https://images.unsplash.com/photo-1579783411194-f697db862dcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VhJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D" />
          </SwiperSlide>
          <br /><br />
        </Swiper>
      </>
      <br />
      <div className="container-fluid  p-5 bg-[url('https://static.vecteezy.com/system/resources/previews/040/986/494/non_2x/ai-generated-cutlery-setting-on-a-restaurant-table-advertising-foodgraphy-photo.jpg')] fork" >
        <div className="grid grid-cols-1  lg:grid-cols-2 mt-5" >
          <div>
            <img src="https://assets.website-files.com/63d0c13bf294b9ad2ad7a1f0/63d9de67f1e5b982041702d6_about-image-01.png " className='object-cover w-full h-96 mx-auto py-4 px-4 ' alt="" />
          </div>
          <div className="heading">
            <h1 className='text-4xl text-center text-orange-500 font-extrabold '>About Us</h1>
            <p className='text-white mt-5 text-lg px-4 py-4 '>We are a team of passionate foodies dedicated to providing you with the best dining experience possible. Our mission is to satisfy your cravings and elevate your dining experience one delicious meal at a time.</p>
          </div>
        </div>
      </div>
      <br />
     
     


      <div className="container">
        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 mt-5'>
          <div className='download'>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-semibold sm:ml-4 md:ml-8 lg:ml-20 px-4 py-4 md:mt-20 lg:mt-28'>Download App</h1>
            <p className='text-gray-600 text-xl px-4 py-4 sm:ml-5 md:ml-8 lg:ml-20'>
            A great food restaurant is more than just a place to eat; it is an experience that delights all the senses.   
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 ml-20'>
            <div>
              <img src={apple} className='object-cover w-52 mt-5 ' alt="" />
            </div>
            <div >
            <img src={google} className='object-cover w-52 mt-5' alt="" />
            </div>
            <div>
              <img src={arrow} className='object-cover mt-10 px-4 py-4 w-38 md:ml-20' alt="" />
            </div>
            </div>
          </div>
          <div >
            <img src={mobile} className='object-cover mobile ml-10 sm:ml-4 md:ml-8 lg:ml-20 py-4 px-4 ' alt="" />
          </div>
        </div>
      </div>






    </div>
  )
}

export default Home;


