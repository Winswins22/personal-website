import { DonutChart } from "./SkillChartElems"
//import { useSpring } from 'react-spring'

import React from 'react'

// This is made by using 2 circles, each with 1 half green and 1 half red.
// Then, half of the circle is cropped/clipped to hide the other side, 
// and the green side rotates to replace the red side.

const SkillChart = ({skillName = "", useCheckmark = true}) => {

  return (
    <>
      <DonutChart skillName={skillName} useCheckmark={useCheckmark}></DonutChart>
    </>
  )
}

export default SkillChart

  // const fillAnimation = useSpring({
  //   to: {

  //     background: 
  //     `radial-gradient(#202033 50%,transparent 0%),
  //     conic-gradient(
  //         #2ec02e 1deg, 
  //         #d12a2a 0 360deg 
  //     )`
  
  //   },
  
  //   from: {
  
  //     background: 
  //     `radial-gradient(#202033 50%,transparent 0%),
  //     conic-gradient(
  //         #2ec02e 359deg, 
  //         #d12a2a 0 360deg 
  //     )`
  
  //   },
  
  //   config: { duration: 1000 },
  //   delay: 1000,
  // })