import { UserInputContext } from "@/app/_context/UserInputContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useContext } from "react";

const TopicDescription = () => {
     const {userCourseInput,setUserCourseInput} =useContext(UserInputContext)
  
  const handleInputChange=(fieldName,value) => { 
setUserCourseInput(prev=>({
  ...prev,
  [fieldName]:value
}))
   }
  return (
    <div className="mx-20 lg:mx-44 mt-5">
      {/* Topics  */}
      <div >
        <label htmlFor="" className="mt-5">
          Write the topic for which you want to generate the topic(e.g
          pythoncourse , Yoga etc)
        </label>
        <Input defaultValue={userCourseInput?.topic}
        onChange={(e)=>handleInputChange('topic',e.target.value)} className="h-14 text-xl" placeholder={"Topic"} />
      </div>
      <div className="mt-5">
        <label htmlFor="">
          Tell us more about your course, what you want to inclue im the
          course(optional)
        </label>
        <Textarea defaultValue={userCourseInput?.description} onChange={(e)=>handleInputChange('description',e.target.value)} className="h-24 text-xl" placeholder="about your course" />
      </div>

      {/* text area desc  */}
    </div>
  );
};

export default TopicDescription;
