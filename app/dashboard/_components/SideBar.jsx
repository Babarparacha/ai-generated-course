"use client";
import { UserCourseLsitContext } from "@/app/_context/UserCourseLsitContext";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
// import { Progress } from '@/components/ui/progress'
import { LayoutDashboard, Shield, UserCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";
import { HiOutlineHome, HiOutlineShieldCheck } from "react-icons/hi2";
import { HiOutlineSquare3Stack3D, HiOutlinePower } from "react-icons/hi2";

const SideBar = () => {
  const path = usePathname();
      const {userCoursList,setuserCoursList}=useContext(UserCourseLsitContext)

  const MenuList = [
    {
      id: 1,
      name: "Home",
      icon: <HiOutlineHome />,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Explore",
      icon: <HiOutlineSquare3Stack3D />,
      path: "/dashboard/explore",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: <HiOutlineShieldCheck />,
      path: "/dashboard/upgrade",
    },
    {
      id: 4,
      name: "Logout",
      icon: <HiOutlinePower />,
      path: "/dashboard/logout",
    },
  ];

  return (
    <div className=" fixed md:w-64 h-full shadow-md p-5">
      {/* <div className='flex gap-2 items-center'> */}
      {/* <Image src={"/logo.svg"} alt="ai image" width={40} height={40} /> */}
     <h2><span className="text-blue-600 text-3xl">Ai</span>-Generate</h2>
      <hr className="my-5" />
      <ul>
        {MenuList.map((item, index) => {
          return (
            <div key={index}  className={` ${ path == item.path && "bg-gray-100 text-black" }flex items-center gap-2 text-gray-600 p-6 cursor-pointer
                   hover:bg-gray-100 hover:text-black rounded-lg`}>
              <div className="text-2xl ">{item.icon}</div>
              <Link href={item.path} className="flex gap-3">
                <h2>{item.name}</h2>
              </Link>
            </div>
          );
        })}
      </ul>
    
      <div className="border p-3 bg-slate-100 rounded-lg absolute bottom-10 w-[95%]">
        <Progress value={(userCoursList?.length)/20*100} />
        <h2 className="text-lg mb-2">Avaiable Credits : 20</h2>
        <h2 className="text-sm "> {userCoursList.length} out of 20 Credits used</h2>
        <Link href={"dashboard/upgrade"}>
          <h2 className="text-xs text-primary mt-3 ">upgrade to create more</h2>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
