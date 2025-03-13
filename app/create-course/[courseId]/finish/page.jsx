"use client"
import { db } from '@/configs/db'
import { useUser } from '@clerk/nextjs'
import { and, eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import CourseBasicInfo from '../_components/CourseBasicInfo'
import { useParams, useRouter } from 'next/navigation'
import { CourseList } from '@/configs/schema'
import {HiOutlineClipboardDocumentCheck} from 'react-icons/hi2'

const FinishScreen = () => {
    const router=useRouter()
    const {courseId}=useParams()
    const {user}=useUser()
    const [course, setcourse] = useState([])
    useEffect(() => {
        courseId && GetCourse()
    }, [courseId,user])
    
    const GetCourse = async () => {
        try {
            const result = await db
                .select()
                .from(CourseList)
                .where(
                    and(
                        eq(CourseList.courseId, courseId),
                        eq(CourseList.createdBy, user?.primaryEmailAddress?.emailAddress)
                    )
                );
    
            if (result.length === 0) {
                console.log("No course found for the given criteria.");
            } else {
                // console.log(result);
                setcourse(result[0])
            }
        } catch (error) {
            console.error("Error fetching course:", error);
        }
    };
  return (
    <div className='px-10 md:px-20 lg:px-44 my-7'>
        <h2 className='text-center fontbold text-2xl my-3 text-primary'>Congrats Your Couse Is Ready</h2>
        

<CourseBasicInfo course={course} refreshData={()=>console.log('first')}/>
<h2 className='mt-3'>Course URL:</h2>
        <h2 className='text-center border text-blue-400 p-3 rounded-md flex items-center gap-5'>
  {process.env.NEXT_PUBLIC_HOST ? 
    `${process.env.NEXT_PUBLIC_HOST}/course/${course?.courseId}` : 
    `http://localhost:3000/course/${course?.courseId}`} <HiOutlineClipboardDocumentCheck 
    className="h-5 w-5 cursor-pointer" 
    onClick={async() => await navigator.clipboard.writeText(`http://localhost:3000/course/view/${course?.courseId}`)} 
  />
  
</h2>
    </div>
  )
}

export default FinishScreen