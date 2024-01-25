'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

type Props = {}

const Profile = (props: Props) => {
  const router = useRouter()
  const [data, setData] = useState('nothing');
  const logout = async()=>{
    try {
      await axios.get('/api/users/logout');
      toast.success("Logout successful");
      router.push('/login');
    } catch (error) {
      console.log(error);
    }
  }

  const getUserDetails = async()=>{
    const res = await axios.get('/api/users/me');
    console.log(res.data);
    setData(res.data.data._id);
  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
    <div>Profile</div>
    <hr />
    <button className=' bg-blue-500 text-white p-4 mt-4 rounded-xl' onClick={logout}>Logout</button>
    </div>
  )
}

export default Profile