import Image from "next/image";
import React from "react";
import { HiBookOpen, HiMiniEllipsisVertical } from "react-icons/hi2";
import DropDownOption from "./DropDownOption";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";

const CourseCard = ({ course, refreshData, displayUser = false }) => {
    // console.log(course)
  const handleDelete = async () => {
    const resp = await db
      .delete(CourseList)
      .where(eq(CourseList.id, course?.id))
      .returning({ id: CourseList?.id });
    if (resp) {
      refreshData();
    }
  };
  return (
    <div
      className="shadow-sm rounded-lg border p-2
    hover:scale-105 transition-all cursor-pointer mt-4"
    >
      <Link href={"/course/" + course?.courseId}>
        <Image
          className="rounded-lg w-full h-[200px] object-cover"
          src={course?.courseBanner}
          width={300}
          height={200}
          alt="course image"
        />
      </Link>
      <div className="p-2">
        <h2 className=" flex item-center justify-between  font-medium text-lg">
          {course?.courseOutput?.course?.name}
          {!displayUser &&<DropDownOption handleDelete={() => handleDelete()}>
            <HiMiniEllipsisVertical className="mt-2 text-bold" />
          </DropDownOption>}
        </h2>
        <p className="text-sm text-gray-400 my-1">{course?.category}</p>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="flex items-center p-1 text-sm gap-2 bg-purple-50 text-primary">
          <HiBookOpen />
          {course?.courseOutput?.course?.numberOfChapters} Chapters
        </h2>
        <h2 className="text-sm bg-purple-50 text-primary p-1 rounded-sm">
          {course?.courseOutput?.course?.level} level
        </h2>
      </div>
      {displayUser && <div className="flex gap-2 items-center mt-3">
        <Image className="rounded-full" src={course?.userProfileImage} height={35} width={35} alt="user profile" />
      <h2 className="text-sm">{course?.userName}</h2>
      </div>}
    </div>
  );
};

export default CourseCard;
