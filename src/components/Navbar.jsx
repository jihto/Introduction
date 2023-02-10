import React from 'react'
import { navLinks } from '../constants'

function Navbar() {
  return (
    <nav className='h-full w-full'> 
        <div className='font-mono text-5xl text-blue-400 font-bold'>
           Nhh.Phuc
           <p className='text-lg my-[-8px]'>Developer software engineer</p>
        </div> 
        <div>
          Call Me: (+84) 32874933 (Zalo)
        </div>
    </nav>
  )
}

export default Navbar