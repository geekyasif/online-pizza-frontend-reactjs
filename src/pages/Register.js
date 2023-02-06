import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='bg-gray-100 h-screen flex flex-col justify-center align-center '>
        <div className='container mx-auto w-1/4'>
            <div className="bg-white p-8 shadow-md rounded-md">
                 <div>
                    <label className='font-semibold text-lg text-gray-600'>Name</label>
                    <br />
                    <input className='border-2 border-gray-200 w-full mb-4 mt-2 p-3 rounded-md' placeholder='Your Name' type="text" />
                </div>

                <div>
                    <label className='font-semibold text-lg text-gray-600'>Email</label>
                    <br />
                    <input className='border-2 border-gray-200 w-full mb-4 mt-2 p-3 rounded-md' placeholder='Email' type="text" />
                </div>
                <div>
                <label className='font-semibold text-lg text-gray-600'>Password</label>
                <br />
                <input className='border-2 border-gray-200 w-full mb-4 mt-2 p-3 rounded-md' placeholder='**************' type="password" />
                </div>
                <div className='flex flex-row justify-between mt-4 items-center'>
                    <button className='bg-orange-500 px-6 py-2 rounded-full text-white font-semibold text-lg'>Register</button>
                    <Link to="/login" className='font-semibold text-orange-500 text-lg'>Already have account ?</Link>

                </div>
            </div>
            <p className='text-center my-2 text-gray-400 text-md font-sans'>2022 Pizza Corp. All rights reseverd.</p>

        </div>
    </div>
  )
}

export default Register