import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {setUser, setAuthToken} from "../features/auth/authSlice";

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const {authToken} = useSelector((state) => state.auth)
    const dispatch = useDispatch()


    const handleLogin = async () => {

        if(email === "" || password === ""){

            alert("All fields are required")
        }

        else{

            console.log(email, password)
            const res = await fetch('http://localhost:5000/api/login', {
                method: "post",
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            })

            const loginCredentials = await res.json()

            console.log("Login Credentials", loginCredentials)
            dispatch(setUser(loginCredentials.user))
            dispatch(setAuthToken(loginCredentials.accessToken))
            
            navigate('/')
            
        }

    }


  return (
    <div className='bg-gray-100 h-screen flex flex-col justify-center align-center'>
        <div className='container mx-auto w-1/4'>
            <div className="bg-white p-8 shadow-md rounded-md">
                <div>
                    <label className='font-semibold text-lg text-gray-600'>Email</label>
                    <br />
                    <input onChange={(e) => setEmail(e.target.value)} className='border-2 border-gray-200 w-full mb-4 mt-2 p-3 rounded-md' placeholder='Email' type="email" />
                </div>
                <div>
                <label className='font-semibold text-lg text-gray-600'>Password</label>
                <br />
                <input onChange={(e) => setPassword(e.target.value)} className='border-2 border-gray-200 w-full mb-4 mt-2 p-3 rounded-md' placeholder='**************' type="password" />
                </div>
                <div className='flex flex-row justify-between mt-4 items-center'>
                    <button onClick={handleLogin} className='bg-orange-500 px-6 py-2 rounded-full text-white font-semibold text-lg'>Sign in</button>
                    <Link to="/register" className='font-semibold text-orange-500 text-lg'>Don't have account ?</Link>

                </div>
            </div>
            <p className='text-center my-2 text-gray-400 text-md font-sans'>2022 Pizza Corp. All rights reseverd.</p>

        </div>
    </div>
  )
}

export default Login