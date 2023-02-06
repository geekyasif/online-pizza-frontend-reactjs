import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Product({product}) {
    const navigate = useNavigate();
    const {authToken, user} = useSelector((state) => state.auth);

    const {name, size, image , price} = product;

    const addToCart = async (data) => {

        if(authToken === null){
            return navigate('/login')
        }


        const newProd = {
            userId: user._id,
            productId: data._id
        }


        console.log(newProd)

        const res = await fetch('http://localhost:5000/api/cart', {
            method: "post",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProd)
        })

        const resData = await res.json()

        console.log(resData)

    }

    return (
        <div className="p-6">
            <div className='flex flex-col items-center'>
                <img src={image.split('http://localhost:3000/')[1]} alt="pizza" />
                <h6 className='text-xl my-3 font-sans font-semibold'>{name}</h6>
                <p className='rounded-full bg-gray-100 px-4 py-1 text-sm my-3'>{size}</p>
            </div>
            <div className="flex flex-row justify-around my-2 items-center">
                <p className='font-bold text-xl'>₹{price}</p>
                <button onClick={() => addToCart(product)}  className='text-orange-500 font-semibold text-xl border-orange-500 rounded-full border-2 items-center py-1 px-6 '> 
                    <span className='mr-4'>+</span>
                    Add
                </button>
            </div>
        </div>
    )
}

export default Product