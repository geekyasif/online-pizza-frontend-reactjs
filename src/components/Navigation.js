import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { removeAuthToken } from '../features/auth/authSlice'

function Navigation() {
  const {authToken} = useSelector((state) => state.auth)
  const {cartProducts} = useSelector((state) => state.cart)


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    console.log(authToken)
    dispatch(removeAuthToken())
    navigate('/login')

  }



  return (
   <div className="bg-white p-4">
     <div className="flex flex-row justify-between items-center container mx-auto">
        <div className='flex flex-row items-center'>
            <img 
              style={{
                backgroundColor: "transparent",
                width: 100,
                borderRadius: 100
              }}
              src="/logo.png" alt="logo" 
            />
        </div>

        <div className="">
          <ul className='flex flex-row items-center'>
            <li className='mr-8 font-semibold text-lg'><Link to="/">Menu</Link></li>
            <li className='mr-8 font-semibold text-lg'><Link to="/">Offers</Link></li>
            {
              authToken === null ? 
              <>
              
                <li className='mr-8 font-semibold text-lg'><Link to="/Register">Register</Link></li>
                <li className='mr-8 font-semibold text-lg'><Link to="/login">Login</Link></li>
              </>
              :

              <>
               <li className='mr-8 font-semibold text-lg'><Link to="/orders">My Orders</Link></li>
            <li className='mr-8 font-semibold text-lg'><button onClick={handleLogout} >logout</button></li>
            <li className='bg-orange-500 px-6 py-2 text-white rounded-full font-semibold text-lg'><Link to="/cart">{cartProducts.cartProduct?.length} Cart</Link></li>
            </>

            }
           

          </ul>
        </div>
    </div>
   </div>
  )
}

export default Navigation