import React from 'react'
import Menuitem from './MenuItem'
import {AiFillHome} from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'


export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
        <div className='flex gap-4'>
          <Menuitem title="home" address="/" Icon={AiFillHome} />
          <Menuitem title="about" address="/about" Icon={BsFillInfoCircleFill} />
        </div>
        <div className="flex items-center gap-4">
          <DarkModeSwitch />

          <Link href="/" className='flex gap-1 items-center'>
              <span className='text-2xl font-bold bg-amber-500 py-0.5 px-2 rounded-2xl'>Bridge</span>
              <span className='text-xl hidden font-bold sm:inline py-1.5 '>View</span>
          </Link>
        </div>
    </div>
  )
}
