import { AlignJustify } from 'lucide-react'
import React from 'react'

function TopHeader() {
  return (
    <div className='border-b flex p-5 items-center justify-between md:justify-end'>
        <AlignJustify className='md:hidden'/>
        <img src='/student.jpeg' width={60} height={150} className='md:hidden'/>
        {/* <UserButton /> */}
    </div>
  )
}

export default TopHeader
