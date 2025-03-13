"use client";
import { db } from "@/configs/db";
import { Chapters, CourseList } from "@/configs/schema";
import { and, eq } from "drizzle-orm";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ChapterListCard from "./component/ChapterListCard";
import ChapterContent from "./component/ChapterContent";
import Header from "@/app/_component/Header";

const PageStart = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState();
  const [chapterContent, setchapterContent] = useState([]);
  useEffect(() => {
    courseId && getCourse();
  }, [courseId]);

  const getCourse = async () => {
    const result = await db
      .select()
      .from(CourseList)
      .where(eq(CourseList?.courseId, courseId));
    // console.log(result);
    setCourse(result[0]);
    getSelectedChapterContent(0)
  };
  // get slecetd chapter content 
  const getSelectedChapterContent = async (chapterId) => {
    const result = await db
      .select()
      .from(Chapters)
      .where(and(eq(Chapters?.chapterId, chapterId),eq(Chapters?.courseId, course?.courseId)));
    // console.log(result);
    setchapterContent(result[0]);
  };
  return (
    <>
  
    <Header/>
   <div className="flex">
      {/* Chapter list sidebar */}
      <div className="fixed md:w-72 w-full md:h-screen h-auto md:block bg-white shadow-md overflow-y-auto">
        <h2 className="font-medium text-lg bg-primary p-4 text-white">
          {course?.courseOutput?.course?.name}
        </h2>
        <div className="space-y-2 p-4">
          {course?.courseOutput?.course?.chapters?.map((chapter, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setSelectedChapter(chapter);
                  getSelectedChapterContent(index);
                }}
                className={`cursor-pointer p-3 rounded-lg transition-colors duration-300 hover:bg-purple-100 ${
                  selectedChapter?.name === chapter?.name ? "bg-purple-200" : ""
                }`}
              >
                <ChapterListCard chapter={chapter} index={index} />
              </div>
            );
          })}
        </div>
      </div>

      {/* content div  */}
      <div className="md:ml-64">
        <ChapterContent chapter={selectedChapter}content={chapterContent}/>
      </div>
    </div>
    </>
  );
};

export default PageStart;
