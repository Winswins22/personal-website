import React, {useEffect, useState} from 'react'
import {PageWrapper} from '../../components/PageWrapper/PageWrapper'
//import InfoSection from '../../components/InfoSection/InfoSection'
import Loader from '../../components/Loader/Loader'

import {getFinishTimeFromMode} from '../../components/Loader/LoaderTimings'

import SkillChart from '../../components/SkillChart/SkillChart'
import InfoSection from '../../components/InfoSection/InfoSection'

import {
  TitleSpacing, 
  AnimatedTitle, 
  Text
} from '../../components/InfoSection/InfoSectionElems'

import Aos from 'aos'
import 'aos/dist/aos.css/'

import Logo from '../../images/logo.png'

// initialLoading:
// Set to '1' to skip loader animation.

// mode:
//  -Controls the speed of the animation.
// Set to '"standard"' for a 2.2s animation.
// Set to '"fast"' for a slightly faster animation
// Set to '"fastest"' for a faster animation with a very fast bar fill

// See src/components/Loader/LoaderTimings.jsx for more details.
function SkillPage({mode = "standard", initialLoading = 0}){
  const [timesLoaded, setLoading] = useState(initialLoading);

  //Animate on Scroll
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (timesLoaded !== 1){
        setLoading(1);
        //console.log("Set 'timesLoaded' to 1!", timesLoaded)
      }
    }, getFinishTimeFromMode(mode))
  })

  return(
    <>

      {

        (timesLoaded === 1) ? 
          
          <PageWrapper>

            <InfoSection 
              title={<>
              <div style={{display:"flex", flexWrap:"wrap"}}>
                <AnimatedTitle> Skills and </AnimatedTitle>
                <AnimatedTitle> Experience </AnimatedTitle>
              </div>
              </>} 
              description={<> <Text data-aos="fade-left" data-aos-delay="1000" color={"grey"}> 
                Front End Developer | React Developer 
              </Text> </>}

              img={<>
                <div style={{display: "flex", height: "100vh"}}>
                  <div>
                    <SkillChart skillName={"React"}></SkillChart>
                    <SkillChart skillName={"JS"}></SkillChart>
                  </div>
                  <div>
                    <SkillChart skillName={"CSS"}></SkillChart>
                    <SkillChart skillName={"HTML"}></SkillChart>
                  </div>
                </div>
              </>}
            ></InfoSection>

            {/* <div style={{display: "flex", height: "100vh"}}>
              <div>
                <SkillChart skillName={"React"}></SkillChart>
                <SkillChart skillName={"JS"}></SkillChart>
              </div>
              <div>
                <SkillChart skillName={"CSS"}></SkillChart>
                <SkillChart skillName={"HTML"}></SkillChart>
              </div>
            </div> */}

          </PageWrapper>

        :
          <Loader mode={mode}></Loader>
      }
      
    </>
  )
}

export default SkillPage