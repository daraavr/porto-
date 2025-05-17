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
    <div>
      {/* <SplitText /> */}
      <BackgroundBeams />

      <div className=''>
        <SplitText />
      </div>

    </div>
  )
}

export default HomePage