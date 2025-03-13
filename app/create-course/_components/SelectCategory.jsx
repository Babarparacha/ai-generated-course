import { UserInputContext } from "@/app/_context/UserInputContext";
import CategoryList from "@/app/_shared/CategoryList";
import Image from "next/image";
import React, { useContext } from "react";

const SelectCategory = () => {
  const {userCourseInput,setUserCourseInput} =useContext(UserInputContext)
 const handleCategoryChange=(category) => { 

  setUserCourseInput(prev=>({
    ...prev,
    category:category
  }))
  }
 
  return (
    <div className="px-10 md:px-20">
      <h2 className="my-5"> Select the Course Category-</h2>

      <div className="grid grid-cols-3 gap-10 px-10 md:px-20">
        {CategoryList.map((item, index) => {
          return (
            <div
            onClick={() => handleCategoryChange(item.name)}
            key={index}
            className={`${userCourseInput?.category === item.name ? "border-primary bg-purple-300" : ""} cursor-pointer hover:border-primary hover:bg-purple-300 flex items-center rounded-xl flex-col p-5 border`}
          >
          
              <Image src={item.icon} width={50} height={50} alt={item.name} />
              <h2>{item.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectCategory;
