"use client"
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react'
import CourseCard from '../_components/CourseCard';
import { Button } from '@/components/ui/button';

const ExplorePage = () => {
  const {user}=useUser();
  const [courseList, setcourseList] = useState([])
  const [pageIndex, setpageIndex] = useState(0)
  useEffect(() => {
     getAllCourses()
  }, [pageIndex])
  
  const getAllCourses=async()=>{
      const result=await db.select().from(CourseList).limit(9).offset(pageIndex*9)
      setcourseList(result)
  }

  return (
    <div>
      <h2 className='font-bold text-3xl'>Explore more projects</h2>
      <p>Explore more project build with Ai by other User </p>
    <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
      {
        courseList?.map((course,item)=>{
          return <div>
            <CourseCard course={course} displayUser={true} />
          </div>
        })
      }
    </div>
    <div className='flex justify-between mt-5 '>
 { pageIndex!==0 &&<Button onClick={()=>setpageIndex(pageIndex-1)}>previous page</Button>}
    <Button onClick={()=>setpageIndex(pageIndex+1)}>Next page</Button>
    </div>
    </div>
  )
}

export default ExplorePage