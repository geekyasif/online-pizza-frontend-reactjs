import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HeroSection from '../components/HeroSection'
import Products from '../components/Products'
import { fetchCart } from '../features/cart/cartSlice';

function Home() {
    const { authToken, user} = useSelector((state) => state.auth)
    const { cartProducts } = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    // const fetchCart = async () => {

    //     const res = await fetch(`http://localhost:5000/api/cart/user-id/${user._id}`)
    //     const fetchedCart = await res.json()
    //     dispatch(setCart(fetchedCart.cartProduct))

    // }

    useEffect(() => {
        if(authToken !== null){
            console.log("Wroking")
            dispatch(fetchCart(user._id))
            
        }

    }, [])

    return (
        <div className=''>
            <HeroSection />
            <Products />
        </div>
    )
}

export default Home