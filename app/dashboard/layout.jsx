"use client"
import React, { useState } from 'react'
import SideBar from './_components/SideBar'
import Header from './_components/Header'
import { UserCourseLsitContext } from '../_context/UserCourseLsitContext'

const DashboradLayout = ({children}) => {
  const [userCoursList, setuserCoursList] = useState([])
  return (
    <UserCourseLsitContext.Provider value={{userCoursList,setuserCoursList}}>
    <div>
        <div className='md:w-64 hidden md:block'>
            <SideBar/>
        </div>
        <div className='md:ml-64 p-10'>
          <Header/>
          <div className='p-10'>
        {children}
          </div>
        </div>
        </div>
        </UserCourseLsitContext.Provider>
  )
}

export default DashboradLayout