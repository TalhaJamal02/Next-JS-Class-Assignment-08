import Link from 'next/link'
import React from 'react'
import ThemeSwitch from './ThemeToggle'

function Navbar() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="flex justify-between items-center h-16 w-full">
        <Link href="/">
          <div className="text-3xl font-bold cursor-pointer">
            Sanity
            <span className="text-purple-500">Blog</span>
          </div>
        </Link>
        <ThemeSwitch />
      </div>
    </div>
  )
}

export default Navbar