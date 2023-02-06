import React from 'react'

function HeroSection() {


    return (
        <div className="bg-gray-100">
            <div className='container mx-auto flex flex-row justify-between items-center h-screen'>
                <div className="">
                    <p className=' italic text-2xl -mb-8'>Are you hungry ?</p>
                    <p className='text-7xl font-semibold my-10'>Don't Wait !</p>
                    <a className='bg-orange-500 rounded-full py-3 px-6 text-white text-2xl' href="#">Order Now</a>
                </div>

                <div className="bg-gray-100">
                    <img
                        style={{
                            width: "500px",
                        }}
                        src="/hero-pizza.jpg" alt="pizza"
                    />
                </div>

            </div>
        </div>
    )
}

export default HeroSection