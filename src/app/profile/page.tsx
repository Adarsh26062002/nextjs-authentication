import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import toast from 'react-hot-toast'

type Props = {}

const Profile = (props: Props) => {
  const router = useRouter()
  const logout = async()=>{
    try {
      await axios.get('/api/logout');
      toast.success("Logout successful");
      router.push('/login');
    } catch (error) {
      
    }
  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
    <div>Profile</div>
    <hr />
    <button className=' bg-blue-500 text-white p-4 mt-4 rounded-xl'>Logout</button>
    </div>
  )
}

export default Profile