"use client"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import toast from "react-hot-toast"

type Props = {}

const Login = (props: Props) => {
    const router = useRouter()
    const [user, setUser] = useState({
        email:'',
        password:''
    })
    const [buttonDisabled,setButtonDisabled] = React.useState(false);
    const [loading,setLoading] = React.useState(false);

    const onLogin = async()=>{
        try {
            setLoading(true)
            const res = await axios.post('/api/users/login', user)
            console.log("Login success",res.data)
            router.push('/profile')
        } catch (error:any) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        }finally{
            setLoading(false)
        }

    }

    useEffect(()=>{
        if(user.email.length>0 && user.password.length>0)
            setButtonDisabled(false)
        else    
            setButtonDisabled(true)
    },[user])

    return (
        <>
            <div className='flex flex-col w-screen h-screen justify-center items-center gap-4'>
                <h1 className='w-full text-center text-2xl'>{loading ? "Processing...":"Login"}</h1>
                <hr/>
                <div className="flex flex-col gap-2 justify-center items-center w-1/2 ">
                    <label htmlFor="email">Email</label>
                    <input className="text-black p-2 border rounded-lg w-1/3" placeholder="email" type="email" id="email" value={user.email} onChange={(e)=> setUser({...user,email:e.target.value})}/>
                    <label htmlFor="username">Password</label>
                    <input className="text-black p-2 border rounded-lg w-1/3" placeholder="password" type="password" id="password" value={user.password} onChange={(e)=> setUser({...user,password:e.target.value})}/>
                    <button onClick={onLogin} className="border rounded-lg p-1">{buttonDisabled?"No Login":"Login"}</button>
                    <Link href="/login">Visit Signup Page</Link>
                </div>
            </div>
        </>
    )
}

export default Login