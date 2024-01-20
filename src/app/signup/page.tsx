"use client"
import Link from "next/link"
import React, { useState } from "react"

type Props = {}

const Signup = (props: Props) => {
    const [user, setUser] = useState({
        username:'',
        email:'',
        password:''
    })

    const OnSignup = async()=>{

    }
    return (
        <>
            <div className='flex flex-col w-screen h-screen justify-center items-center gap-4'>
                <h1 className='w-full text-center text-2xl'>SignUp</h1>
                <hr/>
                <div className="flex flex-col gap-2 justify-center items-center w-1/2 ">
                    <label htmlFor="username">Username</label>
                    <input className="p-2 border rounded-lg w-1/3" placeholder="username" type="text" id="username" value={user.username} onChange={(e)=> setUser({...user,username:e.target.value})}/>
                    <label htmlFor="email">Email</label>
                    <input className="p-2 border rounded-lg w-1/3" placeholder="email" type="email" id="email" value={user.email} onChange={(e)=> setUser({...user,username:e.target.value})}/>
                    <label htmlFor="username">Password</label>
                    <input className="p-2 border rounded-lg w-1/3" placeholder="password" type="password" id="password" value={user.password} onChange={(e)=> setUser({...user,username:e.target.value})}/>
                    <button onClick={OnSignup} className="border rounded-lg p-1">Signup here</button>
                    <Link href="/login">Visit Login Page</Link>
                </div>
            </div>
        </>
    )
}

export default Signup