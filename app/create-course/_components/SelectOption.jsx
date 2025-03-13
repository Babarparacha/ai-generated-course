import React, { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { UserInputContext } from "@/app/_context/UserInputContext";

const SelectOption = () => {
       const {userCourseInput,setUserCourseInput} =useContext(UserInputContext)
  const handleInputChange=(fieldName,value) => { 
setUserCourseInput(prev=>({
  ...prev,
  [fieldName]:value
}))
  }
  return (
    <div className="px-10 md:px-20 lg:px-44">
      <div className="grid grid-cols-2 gap-10">
        {/* 1st select  */}
        <div>
          <label className="text-sm" htmlFor="">
            Difficulty Level
          </label>
          <Select defaultValue={userCourseInput?.difficultyLevel}
          onValueChange={(value=>handleInputChange('difficultyLevel',value))}>
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advance">Advance</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* 2nd select  */}
        <div>
          <label className="text-sm" htmlFor="">
            Course Duration
          </label>
          <Select defaultValue={userCourseInput?.duration}
          onValueChange={(value=>handleInputChange('duration',value))}> 
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1 Hour">1 Hours</SelectItem>
              <SelectItem value="2 Hour">2 Hours</SelectItem>
              <SelectItem value="More than 3 Hours">More than 3 Hours</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* 3rd selct  */}
        <div>
          <label className="text-sm" htmlFor="">
            Add Video
          </label>
          <Select defaultValue={userCourseInput?.displayVideo}
          onValueChange={(value=>handleInputChange('displayVideo',value))}>
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* 4th div for input  */}
        <div>
          <label className="text-sm" htmlFor="">
            No of Chapters
          </label>
          <Input type="number" defaultValue={userCourseInput?.noOfChapter}
          onChange={(e)=>handleInputChange('noOfChapter',e.target.value)} />
        </div>
      </div>
    </div>
  );
};

export default SelectOption;
