"use client"
import { useClerk } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
const Logout = () => {
const router =useRouter
  const { user, signOut } = useClerk();
  useEffect(() => {
    handleLogout()
  }, [])

  const handleLogout = async () => {
    try {
      await signOut();
      router.replace("/")
      // window.location.href = '/';
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  return (
    <div>
        <h2 className='text-primary text-3xl text-center'>SignIn to create Course</h2>
    </div>
  )
}

export default Logout