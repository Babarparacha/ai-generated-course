"use client"
import { db } from '@/configs/db'
import { CourseList } from '@/configs/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import React, { useContext, useEffect, useState } from 'react'
import CourseCard from './CourseCard'
import { UserCourseLsitContext } from '@/app/_context/UserCourseLsitContext'
import { Key } from 'lucide-react'

const UserCourseList = () => {
    const {user}=useUser();
    const [courseList, setcourseList] = useState([])
    const {userCoursList,setuserCoursList}=useContext(UserCourseLsitContext)
    useEffect(() => {
      user && getUserCourses()
    }, [user])
    
    const getUserCourses=async()=>{
        const result=await db.select().from(CourseList).where(eq(CourseList?.createdBy,user?.primaryEmailAddress?.emailAddress))
        setcourseList(result)
        setuserCoursList(result)
    }
  return (
    <div className='mt-10'>
<h2 className='font-medium text-xl'>My Ai Courses</h2>
<div className='grid grid-cols2 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
    {
      courseList?.length>0 ?  courseList?.map((course,index)=>{
            return <CourseCard course={course}refreshData={()=>getUserCourses()}/>
        }):
            [1,2,3,4,5,6,7,8,9,10].map((item,index)=>{
return <div Key={index} className="mt-2 w-full bg-slate-200 animate-pulse rounded-lg h-[270px]"></div>
            })
    }
</div>
    </div>
  )
}

export default UserCourseList