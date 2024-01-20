"use client"
import Link from "next/link"
import React, { useState } from "react"

type Props = {}

const Login = (props: Props) => {
    const [user, setUser] = useState({
        email:'',
        password:''
    })

    const onLogin = async()=>{

    }

    return (
        <>
            <div className='flex flex-col w-screen h-screen justify-center items-center gap-4'>
                <h1 className='w-full text-center text-2xl'>Login</h1>
                <hr/>
                <div className="flex flex-col gap-2 justify-center items-center w-1/2 ">
                    <label htmlFor="email">Email</label>
                    <input className="p-2 border rounded-lg w-1/3" placeholder="email" type="email" id="email" value={user.email} onChange={(e)=> setUser({...user,email:e.target.value})}/>
                    <label htmlFor="username">Password</label>
                    <input className="p-2 border rounded-lg w-1/3" placeholder="password" type="password" id="password" value={user.password} onChange={(e)=> setUser({...user,password:e.target.value})}/>
                    <button onClick={onLogin} className="border rounded-lg p-1">Login here</button>
                    <Link href="/login">Visit Signup Page</Link>
                </div>
            </div>
        </>
    )
}

export default Login