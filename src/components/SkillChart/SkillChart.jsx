import {  
  ItemClipper,
  UpperDonut,
  LowerDonut,
  Checkmark,
  Text,
  Grid,
  GridOverlapper
} from "./SkillChartElems"
//import { useSpring } from 'react-spring'

import React, {useEffect} from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css/'

import CheckmarkImage from '../../images/checkmark.png'

// This is made by using 2 circles, each with 1 half green and 1 half red.
// Then, half of the circle is cropped/clipped to hide the other side, 
// and the green side rotates to replace the red side.

const SkillChart = ({skillName = "", useCheckmark = true}) => {

  //Animate on Scroll
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  
  return (
    <>
      <Grid>
        {/* <ItemWrapper> */}
          <GridOverlapper data-aos="flip-up">
            {/* <UpperDonut></UpperDonut>
            <LowerDonut></LowerDonut> */}
            <ItemClipper>
              <UpperDonut></UpperDonut>
            </ItemClipper>
            <ItemClipper>
              <LowerDonut></LowerDonut>
            </ItemClipper>
          </GridOverlapper>
          {
            useCheckmark ?
              <GridOverlapper>
                <Checkmark src={CheckmarkImage} data-aos="zoom-in" data-aos-delay="1700"></Checkmark>
              </GridOverlapper>
            : 
              <></>
          }
          {        
            (skillName !== "")?
              <Text> {skillName} </Text>
            : 
              <></>
          }
        {/* </ItemWrapper> */}
      </Grid>
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