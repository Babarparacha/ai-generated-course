"use client";
import { db } from "@/configs/db";
import { Chapters, CourseList } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CourseBasicInfo from "./_components/CourseBasicInfo";
import CourseDetail from "./_components/CourseDetail";
import ChapterList from "./_components/ChapterList";
import { Button } from "@/components/ui/button";
import { GenerateChapterContent } from "@/configs/AiModel";
import LoadingDialog from "../_components/LoadingDialog";
import service from "@/configs/service";

const CourseLayout = () => {
  const router = useRouter();
  const { courseId } = useParams();
  const { user } = useUser();
  const [course, setcourse] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    courseId && GetCourse();
  }, [courseId, user]);

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
        setcourse(result[0]);
      }
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };

  // generate chapter for course
  const generateChapterContent = () => {
    setloading(true);
    const chapters = course?.courseOutput?.course?.chapters;
    chapters.forEach(async (chapter, index) => {
      const PROMPT = `explain the concept in Detail on Topic: ${course?.name}, Chapter: ${chapter?.name}, Variables and data types, in JSON Format with list of array with field as title, explanation on give chapter in detail, Code Example (Code file in < code> format) if applicable`;
      // if(index==1){
      try {
        let videoId = "";
        //generate video url
        service.getVideos(course?.name + ":" + chapter?.name).then((resp) => {
          videoId = resp[0]?.id?.videoId;
          // console.log(resp);
        });
        // generate chapter content
        const result = await GenerateChapterContent.sendMessage(PROMPT);
        const content = JSON.parse(result?.response?.text());
        // console.log(result?.response?.text())

        // save chapter content +video url
        await db.insert(Chapters).values({
          chapterId: index,
          courseId: course?.courseId,
          content: content,
          videoId: videoId,
        });
        setloading(false);
      } catch (error) {
        setloading(false);
        console.log(error);
      }
      router.replace("/create-course/" + course?.courseId + "/finish");
      // }
    });
  };

  return (
    <div className="mt-10 px-7 md:px-20 lg:px-44">
      <h2 className="font-bold text-center text-2xl">Course Layout</h2>
      <LoadingDialog loading={loading} />
      {/* basic info  */}
      <CourseBasicInfo course={course} />
      {/* course detail  */}
      <CourseDetail course={course} />
      {/* list of chapter  */}
      <ChapterList course={course} />
      <Button onClick={generateChapterContent} className="my-10">
        Generate Chapter Content{" "}
      </Button>
    </div>
  );
};

export default CourseLayout;
