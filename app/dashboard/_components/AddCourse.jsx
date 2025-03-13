"use client"
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { UserCourseLsitContext } from '@/app/_context/UserCourseLsitContext'
import React, { useContext } from 'react'

const AddCourse = () => {
      const {userCoursList,setuserCoursList}=useContext(UserCourseLsitContext)
    const {user}=useUser()
  return (
    <div className='flex justify-between items-center'>
        <div>
            <h2 className='text-3xl'>Hello , <span className='font-bold text-blue-400'>{user?.fullName}</span></h2>
        <p className='tet-sm text-gray-500'>create new Course with Ai, Share with friends and Earn from it.</p>
        </div>
        <Link href={userCoursList?.length>=20 ? '/dashboard/upgrade': "/create-course"}>
        <Button>+ Create Ai Course</Button>
        </Link>
    </div>
  )
}

export default AddCourse