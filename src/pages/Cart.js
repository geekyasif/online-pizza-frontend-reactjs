import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart } from '../features/cart/cartSlice'

function Cart() {
    const { user } = useSelector((state) => state.auth)
    const { cartProducts } = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    console.log("from the cart ", cartProducts.cartProduct)
    // const [cart, setCart] = useState()


    // const fetchCart = async () => {

    //     const res = await fetch(`http://localhost:5000/api/cart/user-id/${user._id}`)
    //     const fetchedCart = await res.json()
    //     console.log(fetchCart.cartProduct)
    //     setCart(fetchedCart.cartProduct)

    // }


    useEffect(() => {

        console.log("working")
        console.log(user._id)
        dispatch(fetchCart(user._id))
        

    }, [])


    // console.log("cart", cart)



    return (
        <div className='bg-gray-100 h-screen'>
            <div className="container mx-auto">
                <div className="w-2/3 m-auto p-6">

                    <div className='flex flex-row items-center mt-10 pb-6 '>
                        <img style={{ width: 35 }} src="/cart.png" alt="alt" className='mr-4' />
                        <h4 className='text-3xl font-bold'>Order Summary</h4>
                    </div>

                    <div className='border-b-2 border-t-2 border-gray-300 pb-8 pt-8'>


                        {
                            cartProducts.cartProduct?.map((item) => (

                            <div className='grid grid-cols-3 items-center my-4' key={item._id}>
                                <div className='flex flex-row items-center'>
                                    <div>
                                        <img style={{ width: 130 }} src="/pizza.jpg" alt="pizza" className='mr-4' />
                                    </div>
                                    <div>
                                        <p className='text-2xl font-semibold'>{item.name}</p>
                                        <p className="text-gray-500 my-2">{item.size}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-lg font-semibold float-right'>1 Pcs</p>
                                </div>
                                <div>
                                    <p className='text-lg font-bold float-right'>₹{item.price}</p>
                                </div>
                            </div>

                            ))
                        }

                   


                    </div>

                    <div className='float-right w-2/5 mb-8'>

                        <p className='my-4 text-xl font-bold float-right'>Total Amount: <span className='text-2xl font-bold text-orange-500'>₹1300</span></p>
                        <input type="text" placeholder='Address' className='w-full my-4 py-4 px-2' />
                        <br />
                        <button className='bg-orange-500 rounded-full px-8 py-2 float-right text-white text-lg'>Order Now</button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cart