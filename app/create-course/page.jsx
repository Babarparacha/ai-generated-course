"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useContext, useEffect } from "react";
import {
  HiClipboardDocumentCheck,
  HiLightBulb,
  HiMiniSquares2X2,
} from "react-icons/hi2";
import SelectCategory from "./_components/SelectCategory";
import TopicDescription from "./_components/TopicDescription";
import SelectOption from "./_components/SelectOption";
import { UserInputContext } from "../_context/UserInputContext";
import { GnerateCourseLayout_AI } from "@/configs/AiModel";
import LoadingDialog from "./_components/LoadingDialog";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const CreateCourse = () => {
  const [loading, setloading] = useState(false);
  const [activeIndex, setactiveIndex] = useState(0);
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  const { user } = useUser();
  const router=useRouter()

  // this will exec whenever user input change
  useEffect(() => {
    // console.log(userCourseInput)
  }, [userCourseInput]);

  //  used to check next button disable or unable
  const checkStatus = () => {
    if (userCourseInput?.length == 0) {
      return true;
    }
    if (
      (activeIndex == 0) & (userCourseInput?.category?.length == 0) ||
      userCourseInput?.category == undefined
    ) {
      return true;
    }
    if (
      activeIndex == 1 &&
      (userCourseInput?.topic?.length == 0 ||
        userCourseInput?.topic == undefined)
    ) {
      return true;
    } else if (
      activeIndex == 2 &&
      (userCourseInput?.difficultyLevel == undefined ||
        userCourseInput?.duration == undefined ||
        userCourseInput?.displayVideo == undefined ||
        userCourseInput?.noOfChapter == undefined)
    ) {
      return true;
    }
    return false;
  };

  const stepperOptions = [
    {
      id: 1,
      name: "Category",
      icon: <HiMiniSquares2X2 />,
    },
    {
      id: 2,
      name: "Topic & Desc",
      icon: <HiLightBulb />,
    },
    {
      id: 3,
      name: "Option",
      icon: <HiClipboardDocumentCheck />,
    },
  ];

  const GenerateCourseLayout = async () => {
    setloading(true);
    const BASIC_PROMPT =
      "generate a course tutorial on following detail  with field course as name,description along with chapter Name,About,Duration:";
    const USER_INPUT_PROMPT =
      "Category: " +
      userCourseInput?.category +
      ", Topic: " +
      userCourseInput?.topic +
      ", Level: " +
      userCourseInput?.difficultyLevel +
      ", Duration: " +
      userCourseInput?.duration +
      ", NoOf Chapter: " +
      userCourseInput?.noOfChapter +
      " in JSON format";
    const FINAL_PROMPT = BASIC_PROMPT + USER_INPUT_PROMPT;
    // console.log(FINAL_PROMPT)
    const result = await GnerateCourseLayout_AI.sendMessage(FINAL_PROMPT);
    // console.log(result?.response?.text())
    // console.log(JSON.parse(result?.response?.text()));
    setloading(false);
    saveCourseLayoutInDb(JSON.parse(result?.response?.text()));
  };

  const saveCourseLayoutInDb = async (courseLayout) => {
    setloading(true);
    var id = uuidv4();//courseId
    const result = await db.insert(CourseList).values({
      courseId: id,
      name: userCourseInput?.topic,
      level: userCourseInput?.difficultyLevel,
      category: userCourseInput?.category,
      courseOutput: courseLayout,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      userProfileImage: user?.imageUrl,
    });
    await db.update(CourseList).set({
      publish:true
    })
    router.replace('/create-course/'+id)
    setloading(false);
  };

  return (
    <div>
      {/* stepper  */}
      <div className="flex flex-col justify-center items-center mt-10">
        <h2 className="text-4xl text-primary font-medium">Create Course</h2>
        <div className="flex mt-10">
          {stepperOptions.map((item, index) => {
            return (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center w-[50px] md:w-[100px] ">
                  <div
                    className={`bg-gray-200 p-3 rounded-full text-white ${
                      activeIndex >= index && "bg-purple-600"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <h2 className="hidden md:block md:text-sm">{item.name}</h2>
                </div>
                {index != stepperOptions?.length - 1 && (
                  <div
                    className={`h-1 w-[50px] md:2-[100px] rounded-full lg:w-[70px] bg-gray-700
                    ${activeIndex - 1 >= index && "bg-purple-600"}`}
                  ></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-10 md:px-20 lg:px-44 mt-10">
        {/* components  */}
        {activeIndex == 0 ? (
          <SelectCategory />
        ) : activeIndex == 1 ? (
          <TopicDescription />
        ) : (
          <SelectOption />
        )}
        {/* next and previous button  */}
        <div className="flex items-center justify-around mt-10">
          <Button
            variant="outline"
            disabled={activeIndex == 0}
            onClick={() => setactiveIndex(activeIndex - 1)}
          >
            Previous
          </Button>
          {activeIndex < 2 && (
            <Button
              disabled={checkStatus()}
              onClick={() => setactiveIndex(activeIndex + 1)}
            >
              Next
            </Button>
          )}
          {activeIndex == 2 && (
            <Button
              onClick={GenerateCourseLayout}
              disabled={checkStatus()}
              className="bg-purple-600"
            >
              Genrate Course Layout{" "}
            </Button>
          )}
        </div>
      </div>
      <LoadingDialog loading={loading} />
    </div>
  );
};

export default CreateCourse;
