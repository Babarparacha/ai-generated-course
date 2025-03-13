"use client"
import Header from "@/app/_component/Header";
import ChapterList from "@/app/create-course/[courseId]/_components/ChapterList";
import CourseBasicInfo from "@/app/create-course/[courseId]/_components/CourseBasicInfo";
import CourseDetail from "@/app/create-course/[courseId]/_components/CourseDetail";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { eq } from "drizzle-orm";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Course = () => {
    const {courseId}=useParams()
   const [course, setCourse] = useState([])
  useEffect(() => {
    courseId &&  getCourse();
  }, [courseId]);

  const getCourse = async () => {
    const result = await db.select() .from(CourseList).where(eq(CourseList?.courseId,courseId));
      setCourse(result[0])
  };

  return( 
  <div>
    <div>
    <Header/>
    </div>
    <div className="px-10 p-10 md:px-20 lg:px-44">
    <CourseBasicInfo  course={course}/>

    <CourseDetail course={course} />
    <ChapterList course={course}/>
    </div>
  </div>
  );
};

export default Course;
