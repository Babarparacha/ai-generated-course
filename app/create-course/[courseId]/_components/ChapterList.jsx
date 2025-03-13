import React from 'react'
import {HiOutlineClock,HiOutlineCheckCircle} from 'react-icons/hi2'
const ChapterList = ({course}) => {
  return (
    <div className='mt-3 '>
        <h2 className='font-medium text-xl'>Chapters</h2>
        <div className='mt-2'>
        {course?.courseOutput?.course?.chapters.map((chapter,index)=>{
            return<div key={index} className='flex items-center justify-between border p-5 rounded-lg mb-2'>
                <div className='flex gap-5 items-center'>
                   <h2 className='flex-none p-2 bg-primary h-10 w-10 text-white  rounded-full text-center'>{index+1}</h2>
                <div>
                    <h2 className='font-medium text-lg '>{chapter?.name}</h2>
                    <p className='text-sm text-gray-500'>{chapter?.about}</p>
                    <p className='flex gap-2 text-primary items-center'><HiOutlineClock/>{chapter?.duration}</p>
                </div>
                </div>
                <HiOutlineCheckCircle className='text-4xl text-gray-300 flex-none'/>
            </div>
        })}
        </div>
    </div>
  )
}

export default ChapterList