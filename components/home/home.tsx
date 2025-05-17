import React from 'react'
// Update the path below to the actual location of BackgroundBeams, for example:
// Update the path below to the actual location of BackgroundBeams, for example:
// import { BackgroundBeams } from "../components/ui/background-beams";
import { BackgroundBeams } from "@/components/ui/background-beams";
import SplitText from '@/components/SplitText/SplitText';


const Home = () => {
  return (
    <div className='overflow-hidden'>
      Home
      <div className="min-h-screen overflow-hidden bg-[19222D]">
        <div className="container border mx-auto H-Screen">
          <div className="grid grid-cols-12">
            <div className="col-span-6">
              A
              <div>
                {/* <SplitText /> */}
                <BackgroundBeams />
                <div className='text'>
                  <h1><SplitText /></h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
