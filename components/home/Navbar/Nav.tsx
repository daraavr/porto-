import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { navLinks } from '@/constant/constant'

const Nav = () => {
  return (
    <div className='fixed h-[12vh] z-[10] w-full' style={{ backgroundColor: '#800080' }}>
      <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w[80%] mx-auto'> 
        {/* Logo */}
        <Image src="/images/Portofolio.png" alt="Logo" width={170} height={170} className='ml-[-1.5rem] sm:ml-0'/>
        {/* Nav links */}
        <div className='flex items-center space-x-10'>
          {navLinks.map((navLink) => (
            <Link key={navLink.id} href={navLink.url}>
              <p className='nav__link'>{navLink.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Nav
