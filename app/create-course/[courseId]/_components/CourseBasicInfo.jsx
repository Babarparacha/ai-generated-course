import { Button } from "@/components/ui/button";
import { db } from "@/configs/db";
import { storage } from "@/configs/firebaseConfig";
import { CourseList } from "@/configs/schema";
import { eq } from "drizzle-orm";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiOutlinePuzzle } from "react-icons/hi";

const CourseBasicInfo = ({ course}) => {
const [selectedFile, setselectedFile] = useState()
  const onFileSelected=async(e) => { 
    const file=e.target.files[0]
    // console.log(file)
    setselectedFile(URL.createObjectURL(file))
    // upload image to firebase 
    const fileName=Date.now()+".jpg";
    const storageRef=ref(storage,"ai-course/"+fileName)
    await uploadBytes(storageRef,file).then((snapshot)=>{
      console.log("file uploaded")
    }).then(resp=>{
      getDownloadURL(storageRef).then(async(downloadUrl)=>{
        // console.log(downloadUrl)
        await db.update(CourseList).set({
          courseBanner:downloadUrl
        }).where(eq(CourseList.id,course?.id))
      })
    })
   }
   useEffect(() => {
     if(course){
      setselectedFile(course?.courseBanner)
     }
   }, [course])
   
  return (
    <div className="p-10 border rounded-xl shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
        <div>
          <h2 className="font-bold text-3xl ">
            {course?.courseOutput?.course?.name}
          </h2>
          <p className="text-sm text-gray-400 mt-3">
            {course?.courseOutput?.course?.description}
          </p>
          <h2 className="font-medium mt-2 flex gap-2 items-center text-primary">
            <HiOutlinePuzzle /> {course?.category}
          </h2>
        {/* { !edit &&  */}
        <Link href={"/course/"+course?.courseId+"/start"}>
          <Button className="w-full mt-5">Start</Button>
          </Link>
          {/* } */}
        </div>
        <div>
          <label htmlFor="upload_image">
            <Image
              className="w-full rounded-xl h-[250px] object-cover"
              src={selectedFile?selectedFile:"/qa.png"}
              alt="banner image"
              width={300}
              height={300}
            />
            <input type="file" id="upload_image" onChange={onFileSelected} className="opacity-0 cursor-pointer" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default CourseBasicInfo;
