"use client"
import React from 'react'
// import SplitText from './SplitText';
// TODO: Uncomment and update the path below if SplitText exists elsewhere
// import SplitText from '../components/SplitText';
// Make sure the path matches the actual file location and casing
import { BackgroundBeams } from "../components/ui/background-beams";
import SplitText from '@/components/SplitText/SplitText';

const HomePage = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-[19222D]">
    <div className="container border mx-auto H-Screen"> 
      <div className="grid grid-cols-12">
        <div className="col-span-6">A
           <div>
      {/* <SplitText /> */}
      <BackgroundBeams />

      <div className='text'>
        <h1><SplitText /></h1>
      </div>

    </div>
        </div>
        <div className="col-span-6">B</div>
      </div>
    </div>
  </div>
  )
}

export default HomePage