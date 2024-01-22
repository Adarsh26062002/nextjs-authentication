"use client"

import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { AxiosRequestConfig } from "axios"

type Props = {}

const Signup = (props: Props) => {
    const router = useRouter()
    const [user, setUser] = useState({
        username:'',
        email:'',
        password:''
    })
    const [buttonDisabled,setButtonDisabled] = React.useState(false);
    const [loading,setLoading] = React.useState(false);


    const OnSignup = async()=>{
        try {
            setLoading(true)
            const res = await axios.post('/api/users/signup', user)
            console.log("Signup success",res.data)
            router.push('/login')

        } catch (error:any) {
            console.log("Signup failed", error.message);
            toast.error(error.message);
        }finally{
            setLoading(false)
        }

    }

    useEffect(()=>{
        if(user.username.length>0 && user.email.length>0 && user.password.length>0)
            setButtonDisabled(false)
        else    
            setButtonDisabled(true)
    },[user])

    return (
        <>
            <div className='flex flex-col w-screen h-screen justify-center items-center gap-4'>
                <h1 className='w-full text-center text-2xl'>{loading?"Processing...":"Signup"}</h1>
                <hr/>
                <div className="flex flex-col gap-2 justify-center items-center w-1/2 ">
                    <label htmlFor="username">Username</label>
                    <input className=" text-black p-2 border rounded-lg w-1/3" placeholder="username" type="text" id="username" value={user.username} onChange={(e)=> setUser({...user,username:e.target.value})}/>
                    <label htmlFor="email">Email</label>
                    <input className="text-black p-2 border rounded-lg w-1/3" placeholder="email" type="email" id="email" value={user.email} onChange={(e)=> setUser({...user,email:e.target.value})}/>
                    <label htmlFor="username">Password</label>
                    <input className="text-black p-2 border rounded-lg w-1/3" placeholder="password" type="password" id="password" value={user.password} onChange={(e)=> setUser({...user,password:e.target.value})}/>
                    <button onClick={OnSignup} className="border rounded-lg p-1">{buttonDisabled?"No Signup":"Signup"}</button>
                    <Link href="/login">Visit Login Page</Link>
                </div>
            </div>
        </>
    )
}

export default Signup