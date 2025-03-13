'use client'

import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import { UserButton } from '@clerk/nextjs' // Make sure to import UserButton
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  const { user } = useUser()

  return (
    
    <div className='flex justify-between items-center p-6 shadow-lg'>
     <Link href="/">
      <Image src={"/logo.svg"} alt='logo' width={50} height={40} />
     </Link>
      
      {/* Center content (UserButton + Dashboard or Getting Started) */}
      <div className='flex justify-end flex-grow gap-3'>
        {user ? (
          <>
            <Link href="/about">
              <Button variant="outline">About</Button>
            </Link>
            {/* <UserButton /> */}
            <Link href="/dashboard">
              <Button variant="outline">Dashboard</Button>
            </Link>
          
          </>
        ) : (
          <>
          <Link href="/about">
          <Button variant="outline">About</Button>
        </Link>
          <Link href="/sign-up">
            <Button>Getting Started</Button>
          </Link>
          </>
        )}
      </div>
      
    </div>
  )
}

export default Header
