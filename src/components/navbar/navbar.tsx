"use client"
import React,{useState} from 'react'
import Link from 'next/link'
import NavLink from '../navLink/navLink'
import Image from 'next/image'
export interface ILink  {
  url:string,
  title:string
  }
const links:ILink[] = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
const Navbar = () => {
  const[open,setopen] = useState<boolean>(false)
  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
     
      {/* LOGO */}
      <div> 
      <Link href={""}>
        <span className='text-black uppercase text-xl font-semibold italic'>
          SHERRY
        </span>
      </Link>
      </div>
       {/* LINKS */}
       <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      <Image onClick={()=>setopen(true)} src={'/hamburger.svg'} alt='menu-icon' width={40} height={40} className='block md:hidden cursor-pointer'/>
    {/* Responsive Menu */}
    {open && 
    <div className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-2xl'>
    {links.map((link) => (
          <NavLink  link={link} key={link.title} />
        ))}
        <Image onClick={()=>setopen(false)} src={'/cross.svg'} alt='cross-icon' width={40} height={40} className='absolute right-6 top-6 cursor-pointer'/>
    </div>
    }
    
    
    </div>
  )
}

export default Navbar