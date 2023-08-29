import React from 'react'
import Header from './macro/Header'
import Listings from './macro/Listings'

const Home = () => {
  return (
    <div className='container w-100 flex justify-center items-center flex-col'>
      <Header />
      <Listings />
    </div>
  )
}

export default Home