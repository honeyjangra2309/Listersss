import React from 'react'
import Button from '../micro/Button'
import { Link } from 'react-router-dom'

const Header = () => {
  const style ={
    color: "#00A8B5",
    fontFamily: `"Montserrat","sans-serif"`
  }
  return (
    <div className='container flex justify-between items-center px-4 my-4'>
        <h1 className='text-bold text-2xl md:text-4xl' style={style}>Listersss</h1>
        <Link to="/newListing"> <Button name="Add Listing" /></Link>
    </div>
  )
}

export default Header