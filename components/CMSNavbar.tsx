import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function CMSNavbar() {
  return (
    <div className=" flex justify-between items-center py-1 px-5">
      <Link href="/">
        <ArrowLeft />
      </Link>
      <div className=" font-bold text-3xl dark:text-amber-50">
        Sanity
        <span className=" text-purple-500">Blog</span>
      </div>
    </div>
  )
}

export default CMSNavbar