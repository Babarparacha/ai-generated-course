import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-5 shadow-sm'>
      <Link href={"/"}>
        <Image src={"/logo.svg"} height={40} width={40} alt='favicon' className='cursor-pointer' />
      </Link>
   <UserButton/>
    </div>
  )
}

export default Header